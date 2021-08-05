import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { TogglService } from 'src/app/services/toggl.service';
import { compareDate, convertDateToDayAndMonthString, convertDateToDayOfWeekString, convertMillisToTimeString, convertTimeStringToNumber } from 'src/app/shared/helpers/custom-functions';
import { ReportWeekly } from 'src/app/shared/models/report-weekly.model';
import { formatDate } from '@angular/common';
import { ReportMonthly } from 'src/app/shared/models/report-monthly.model';

import { User } from 'src/app/shared/models/user.model';
import { Subscription } from 'rxjs';
import { Workspace } from 'src/app/shared/models/workspace-model';
import { ChartSettings } from 'src/app/shared/settings/ChartSettings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;
  warningMessage: string = '';
  errorMessage: string = '';

  reportWeekly: ReportWeekly;
  reportMonthly: ReportMonthly;
  totalCountArray: number[] = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]

  users: User[] = [];
  workspaceSub: Subscription;
  selectedWorkspace: Workspace;

  // created a seperate class with all the chart settings, because its alot of settings and its all in one place
  chartSettings: ChartSettings = new ChartSettings();

  constructor(
    private togglService: TogglService,
    @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {

    this.isLoading = true;

    // get selected workspace
    this.workspaceSub = this.togglService.workspaceChange$.subscribe(
      (result: Workspace) => this.selectedWorkspace = result
    );

    // get first day of week, Date format
    const firstDayOfWeekDate = this.getFirstDayOfWeekDate();

    let fisrtDayOfWeek = new Date(firstDayOfWeekDate);
    let lastDayOfWeek = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() + 6));

    const since = formatDate(fisrtDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    // get all days of the week to display on the chart
    const daysOfWeek = this.getAllDaysBetweenTwoDates(since, until);
    daysOfWeek.forEach(day => {
      this.chartSettings.chartLabelsDefault.push([convertDateToDayOfWeekString(day), convertDateToDayAndMonthString(day)]);
    });

    this.isLoading = false;

  }

  resetBarChartDataMonth(): void {

    this.chartSettings.chartData = [
      { data: [0], label: 'Users' }
    ];

  }

  resetMessages(): void {

    this.warningMessage = '';
    this.errorMessage = '';

  }

  getFirstDayOfWeekDate(): Date {

    const curr = new Date(); // get current date
    const firstDayOfWeek = curr.getDate() - curr.getDay() + 1; // first day of week = day of the month - day of the week + 1 to make first day of the week on monday
    return new Date(curr.setDate(firstDayOfWeek));

  }

  getAllDaysBetweenTwoDates(start: Date | string, end: Date | string): Date[] {

    const endDate = new Date(end)
    let days: Date[] = [];

    for (let d = new Date(start); d <= endDate; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }

    return days;

  }

  submitThisWeek(): void {

    // get first day of week, Date format
    const firstDayOfWeekDate = this.getFirstDayOfWeekDate();

    let fisrtDayOfWeek = new Date(firstDayOfWeekDate);
    let lastDayOfWeek = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() + 6));

    const since = formatDate(fisrtDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';

    this.getWeeklyReport(groupBy, since, until);

  }

  submitLastWeek(): void {

    // get first day of week, Date format
    const firstDayOfWeekDate = this.getFirstDayOfWeekDate();

    let lastWeekStart = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() - 7));
    let lastWeekEnd = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() + 6));

    const since = formatDate(lastWeekStart, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastWeekEnd, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';

    this.getWeeklyReport(groupBy, since, until);

  }

  getWeeklyReport(groupBy: string, since: string, until: string): void {

    this.isLoading = true;
    this.resetMessages();

    // added timeout because the api will start limiting requests if too much requests are sent at the same time
    // the safe window is 1 request per second
    setTimeout(() => {
      this.togglService.getWeeklyReport(this.selectedWorkspace.apiKey, this.selectedWorkspace.workspaceId, groupBy, since, until).subscribe(
        (result: ReportWeekly) => {

          this.reportWeekly = result;
          this.reportWeekly.groupBy = groupBy;
          this.reportWeekly.since = since;
          this.reportWeekly.until = until;

          this.chartSettings.chartData = [];
          this.chartSettings.chartLabels = [];

          if (this.reportWeekly.data.length === 0) {

            this.warningMessage = 'There is no time logged for the selected period!!!';
            this.isLoading = false;

          }
          else {

            // get all days of the week to display on the chart
            const daysOfWeek = this.getAllDaysBetweenTwoDates(this.reportWeekly.since, this.reportWeekly.until);
            daysOfWeek.forEach(day => {
              this.chartSettings.chartLabels.push([convertDateToDayOfWeekString(day), convertDateToDayAndMonthString(day)]);
            });

            this.users = [];

            this.reportWeekly.data.forEach(data => {

              // map chart data to user
              this.chartSettings.chartData.push({
                data: [
                  convertTimeStringToNumber(convertMillisToTimeString(data.totals[0])),
                  convertTimeStringToNumber(convertMillisToTimeString(data.totals[1])),
                  convertTimeStringToNumber(convertMillisToTimeString(data.totals[2])),
                  convertTimeStringToNumber(convertMillisToTimeString(data.totals[3])),
                  convertTimeStringToNumber(convertMillisToTimeString(data.totals[4])),
                  convertTimeStringToNumber(convertMillisToTimeString(data.totals[5])),
                  convertTimeStringToNumber(convertMillisToTimeString(data.totals[6]))
                ],
                label: data.title.user
              });

              // add user to display on screen
              this.users.push({ user: data.title.user as string, totalHours: convertMillisToTimeString(data.totals[7]), daysLogged: [] });

            });

            this.isLoading = false;

          }

        },
        err => {
          this.errorMessage = 'Workspace does not exist!!!';
          this.isLoading = false;
        }
      );
    }, 1500);

  }

  submitThisMonth(): void {

    const curr = new Date(); // get current date

    const firstDayOfMonth = new Date(curr.getFullYear(), curr.getMonth(), 1);
    const lastDayOfMonth = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);

    const since = formatDate(firstDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';
    const page: number = 1;

    this.getMonthlyReport(groupBy, since, until, page);

  }

  submitLastMonth(): void {

    const curr = new Date(); // get current date

    const lastMonth = new Date(curr.getFullYear(), curr.getMonth() - 1, curr.getDate());
    const firstDayOfMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0);

    const since = formatDate(firstDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';
    const page: number = 1;

    this.getMonthlyReport(groupBy, since, until, page);

  }

  getMonthlyReport(groupBy: string, since: string, until: string, page: number, newRequest: boolean = false): void {

    this.isLoading = true;
    this.resetMessages();

    // added timeout because the api will start limiting requests if too much requests are sent at the same time
    // the safe window is 1 request per second
    setTimeout(() => {
      this.togglService.getMonthlyReport(this.selectedWorkspace.apiKey, this.selectedWorkspace.workspaceId, groupBy, since, until, page).subscribe(
        (result: ReportMonthly) => {

          if (newRequest === false) {

            this.reportMonthly = result;
            this.reportMonthly.groupBy = groupBy;
            this.reportMonthly.since = since;
            this.reportMonthly.until = until;

            this.chartSettings.chartData = [];
            this.chartSettings.chartLabels = [];

          } else this.reportMonthly.data = this.reportMonthly.data.concat(result.data); // add report data list to current list

          if (this.reportMonthly.data.length === 0) {

            this.warningMessage = 'There is no time logged for the selected period!!!';
            this.isLoading = false;

          }
          else {

            if (this.reportMonthly.data.length === 50 && this.reportMonthly.total_count > this.totalCountArray[page - 1]) {

              // get next report data
              page++;
              this.getMonthlyReport(groupBy, since, until, page, true);

            } else {

              this.reportMonthly.data.reverse();

              // get all days of the month to display on the chart
              const daysOfMonth = this.getAllDaysBetweenTwoDates(this.reportMonthly.since, this.reportMonthly.until);
              daysOfMonth.forEach(day => {
                this.chartSettings.chartLabels.push([convertDateToDayOfWeekString(day), convertDateToDayAndMonthString(day)]);
              });

              let users: User[] = []

              this.reportMonthly.data.forEach(data => {
                if (!users.some(x => x.user === data.user))
                  users.push({ user: data.user, totalHours: '0', daysLogged: [{ date: new Date(), duration: '0' }] });
              });

              users.forEach(user => {

                user.daysLogged = [];

                // add all the days of the month to each user
                daysOfMonth.forEach(day => {
                  user.daysLogged.push({ date: day, duration: '0' });
                });

                user.daysLogged.forEach(days => {
                  this.reportMonthly.data.forEach(data => {

                    data.startDate = new Date(data.start);
                    data.endDate = new Date(data.end);

                    if (user.user === data.user) {
                      // check if the user logged time for that day
                      if (compareDate(days.date, data.startDate) === 0) {

                        let duration = parseInt(days.duration, 10);
                        duration = duration + parseInt(data.dur, 10);

                        // set the time the user logged for the day
                        days.duration = duration.toString();

                      }
                    }

                  });
                });

                let duration: number[] = [];

                // map the duration to a number list, in order to map the data to the chart easier
                user.daysLogged.forEach(days => {
                  duration.push(convertTimeStringToNumber(convertMillisToTimeString(days.duration)));
                });

                // map chart data to user
                this.chartSettings.chartData.push({
                  data:
                    duration
                  ,
                  label: user.user
                });

              });

              this.users = [];

              // add user to display on screen
              users.forEach(user => {

                let total = 0
                user.daysLogged.forEach(days => {
                  total += parseInt(days.duration, 10);
                });

                user.totalHours = convertMillisToTimeString(total.toString());
                this.users.push(user);

              });

              this.isLoading = false;

            }

          }

        },
        err => {
          this.errorMessage = 'Workspace does not exist!!!';
          this.isLoading = false;
        }

      );
    }, 1500);

  }

  ngOnDestroy(): void {
    if (this.workspaceSub) this.workspaceSub.unsubscribe();
  }

}

