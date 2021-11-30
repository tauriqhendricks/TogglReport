import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { TogglService } from 'src/app/services/toggl.service';
import { compareDate, convertDateToDayAndMonthString, convertDateToDayOfWeekString, convertMillisToTimeString, convertTimeStringToNumber, convertTimeStringToTimePeriod } from 'src/app/shared/helpers/custom-functions';
import { ReportWeekly } from 'src/app/shared/models/report-weekly.model';
import { formatDate } from '@angular/common';
import { ReportMonthly } from 'src/app/shared/models/report-monthly.model';

import { DaysLogged, User } from 'src/app/shared/models/user.model';
import { Observable, Subscription } from 'rxjs';
import { Workspace } from 'src/app/shared/models/workspace-model';
import { ChartSettings } from 'src/app/shared/settings/ChartSettings';
import { ApiInfo } from 'src/app/shared/models/api-info.model';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // there are only 5 users on each workspace

  isNavLoading$: Observable<boolean>;
  isLoading: boolean = false;

  // messages
  warningMessage: string = '';
  errorMessage: string = '';

  showDetails: boolean = false;

  // used to display the differnt time details on the html
  period: string = '';

  reportWeekly: ReportWeekly;
  reportMonthly: ReportMonthly;

  // used to get all the data from the month report api, the api only returns data in a list with 50 objects, with this the maximum data that can be retrieved is 1000
  totalCountArray: number[] = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]

  users: User[] = [];

  // users should at least log time for 6 hours a day
  // if a user did not for the current week, that specific day will be flagged
  usersNotLogged6hours: User[] = [];

  workspaceSub: Subscription;
  selectedWorkspace: Workspace;

  // created a seperate class with all the chart settings, because its alot of settings and its all in one place
  chartSettings: ChartSettings = new ChartSettings();

  constructor(
    private togglService: TogglService,
    @Inject(LOCALE_ID) private locale: string,
    private workspaceService: WorkspaceService
  ) { }

  ngOnInit(): void {

    this.isNavLoading$ = this.togglService.isNavLoadingChange$;
    this.isLoading = true;

    // get selected workspace
    this.workspaceSub = this.togglService.workspaceChange$.subscribe(
      (result: Workspace) => this.selectedWorkspace = result
    );

    this.chartSetUpOnInit();

    this.isLoading = false;

  }

  chartSetUpOnInit(): void {

    // get first day of week, Date format
    const firstDayOfWeekDate = this.getFirstDayOfWeekDate();

    let firstDayOfWeek = new Date(firstDayOfWeekDate);
    let lastDayOfWeek = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() + 6));

    const since = formatDate(firstDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    // get all days of the week to display on the chart
    const daysOfWeek = this.getAllDaysBetweenTwoDates(since, until);
    daysOfWeek.forEach(day => {
      this.chartSettings.chartLabelsDefault.push([convertDateToDayOfWeekString(day), convertDateToDayAndMonthString(day)]);
    });

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

    let firstDayOfWeek = new Date(firstDayOfWeekDate);
    let lastDayOfWeek = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() + 6));

    const since = formatDate(firstDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';
    this.period = 'This Week';

    const apiInfo = this.createApiInfo(since, until, groupBy);

    if (this.selectedWorkspace.name === 'Testing Workspace')
      this.getTestWeeklyReport(apiInfo);
    else
      this.getWeeklyReport(apiInfo);

  }

  submitLastWeek(): void {

    // get first day of week, Date format
    const firstDayOfWeekDate = this.getFirstDayOfWeekDate();

    // get the prev week start date
    let lastWeekStart = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() - 7));
    let lastWeekEnd = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() + 6));

    const since = formatDate(lastWeekStart, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastWeekEnd, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';
    this.period = 'Last Week';

    const apiInfo = this.createApiInfo(since, until, groupBy);

    if (this.selectedWorkspace.name === 'Testing Workspace')
      this.getTestWeeklyReport(apiInfo);
    else
      this.getWeeklyReport(apiInfo);

  }

  createApiInfo(since: string, until: string, groupBy: string, page?: number): ApiInfo {

    // create the object that will be sent to the api
    const apiInfo: ApiInfo = {
      key: this.selectedWorkspace.apiKey,
      workspaceId: this.selectedWorkspace.workspaceId,
      groupBy,
      since,
      until,
      page
    }

    return apiInfo;

  }

  getTestWeeklyReport(apiInfo: ApiInfo): void {

    this.isLoading = true;
    this.resetMessages();
    this.showDetails = false;

    this.users = [];
    this.usersNotLogged6hours = [];

    this.resetChart();

    // added timeout to the test data so the delay can be the same
    setTimeout(() => {

      // format todays date to same as apiInfo.since string format
      const dateFormated = formatDate(new Date(), 'yyyy-MM-dd', this.locale);

      const diff = Math.abs(new Date(dateFormated).getTime() - new Date(apiInfo.since).getTime());
      const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

      this.reportWeekly = this.workspaceService.getTestWeekReportData(apiInfo.since, apiInfo.until, diffDays + 1);

      this.reportWeekly.groupBy = apiInfo.groupBy;
      this.reportWeekly.since = apiInfo.since;
      this.reportWeekly.until = apiInfo.until;

      this.setReportWeeklyData();
      this.setUsersNotLogged6hours();

      this.isLoading = false;

    }, 1500);

  }

  getWeeklyReport(apiInfo: ApiInfo): void {

    this.isLoading = true;
    this.resetMessages();
    this.showDetails = false;

    this.users = [];
    this.usersNotLogged6hours = [];

    this.resetChart();

    // added timeout because the api will start limiting requests if too much requests are sent at the same time
    // the safe window is 1 request per second
    setTimeout(() => {
      this.togglService.getWeeklyReport(apiInfo).subscribe(
        (result: ReportWeekly) => {

          this.reportWeekly = result;
          this.reportWeekly.groupBy = apiInfo.groupBy;
          this.reportWeekly.since = apiInfo.since;
          this.reportWeekly.until = apiInfo.until;

          if (this.reportWeekly.data.length === 0) {

            this.warningMessage = 'There is no time logged for the selected period!!!';
            this.isLoading = false;

          }
          else {

            this.setReportWeeklyData();
            this.setUsersNotLogged6hours();

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

  setReportWeeklyData(): void {

    // get all days of the week to display on the chart
    const daysOfWeek = this.getAllDaysBetweenTwoDates(this.reportWeekly.since, this.reportWeekly.until);
    daysOfWeek.forEach(day => {
      this.chartSettings.chartLabels.push([convertDateToDayOfWeekString(day), convertDateToDayAndMonthString(day)]);
    });

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
      this.users.push({

        user: data.title.user as string,
        totalHours: convertMillisToTimeString(data.totals[7]),
        daysLogged: [

          { date: daysOfWeek[0], duration: convertMillisToTimeString(data.totals[0]) },
          { date: daysOfWeek[1], duration: convertMillisToTimeString(data.totals[1]) },
          { date: daysOfWeek[2], duration: convertMillisToTimeString(data.totals[2]) },
          { date: daysOfWeek[3], duration: convertMillisToTimeString(data.totals[3]) },
          { date: daysOfWeek[4], duration: convertMillisToTimeString(data.totals[4]) },
          { date: daysOfWeek[5], duration: convertMillisToTimeString(data.totals[5]) },
          { date: daysOfWeek[6], duration: convertMillisToTimeString(data.totals[6]) }

        ]

      });

    });

  }

  /**
   * Check if users logged at least 6 hours of work.
   * Does not check for the current day, only the days before
   */
  setUsersNotLogged6hours(): void {

    this.users.forEach(user => {

      let daysLogged: DaysLogged[] = []
      user.daysLogged.forEach(dayLogged => {

        const timePeriod = convertTimeStringToTimePeriod(dayLogged.duration);

        if (compareDate(dayLogged.date, new Date) === -1) {
          if ((parseInt(timePeriod.hours, 10) < 6) && (dayLogged.date.getDay() > 0 && dayLogged.date.getDay() < 6))
            daysLogged.push({ date: dayLogged.date, duration: dayLogged.duration });
        }

      });

      if (daysLogged.length > 0) {

        this.usersNotLogged6hours.push({
          user: user.user,
          totalHours: user.totalHours,
          daysLogged: daysLogged
        });

      }

    });

  }

  amountOfDaysNotLoggedFor6Hours(user: string): number {

    let amount: number = 0;

    this.usersNotLogged6hours.forEach(users => {
      if (users.user === user)
        amount = users.daysLogged.length;
    });

    return amount;

  }

  /**
   * If true css will be an alert class.
   */
  checkShowAlert(dayLogged: DaysLogged): boolean {

    if (this.period === 'This Week') {
      const timePeriod = convertTimeStringToTimePeriod(dayLogged.duration);

      if (compareDate(dayLogged.date, new Date) === -1 && parseInt(timePeriod.hours, 10) < 6)
        return true;
    }

    return false;

  }

  submitThisMonth(): void {

    const curr = new Date(); // get current date

    const firstDayOfMonth = new Date(curr.getFullYear(), curr.getMonth(), 1);
    const lastDayOfMonth = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);

    const since = formatDate(firstDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';
    const page: number = 1;

    const apiInfo = this.createApiInfo(since, until, groupBy, page);

    if (this.selectedWorkspace.name === 'Testing Workspace')
      this.getTestMonthlyReport(apiInfo, 'this');
    else
      this.getMonthlyReport(apiInfo);

  }

  submitLastMonth(): void {

    const curr = new Date(); // get current date

    // get the prev month date
    const lastMonth = new Date(curr.getFullYear(), curr.getMonth() - 1, curr.getDate());
    const firstDayOfMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0);

    const since = formatDate(firstDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';
    const page: number = 1;

    const apiInfo = this.createApiInfo(since, until, groupBy, page);

    if (this.selectedWorkspace.name === 'Testing Workspace')
      this.getTestMonthlyReport(apiInfo, 'last');
    else
      this.getMonthlyReport(apiInfo);

  }

  getMonthlyReport(apiInfo: ApiInfo, newRequest: boolean = false): void {

    this.isLoading = true;
    this.resetMessages();
    this.showDetails = false;
    this.period = 'Month';

    this.users = [];
    this.usersNotLogged6hours = [];

    this.resetChart();

    // added timeout because the api will start limiting requests if too much requests are sent at the same time
    // the safe window is 1 request per second
    setTimeout(() => {
      this.togglService.getMonthlyReport(apiInfo).subscribe(
        (result: ReportMonthly) => {

          // check if the request is a new one, if not add result to current month data list
          if (newRequest === false) {

            this.reportMonthly = result;
            this.reportMonthly.groupBy = apiInfo.groupBy;
            this.reportMonthly.since = apiInfo.since;
            this.reportMonthly.until = apiInfo.until;

          } else
            this.reportMonthly.data = this.reportMonthly.data.concat(result.data); // add report data list to current list

          if (this.reportMonthly.data.length === 0) {

            this.warningMessage = 'There is no time logged for the selected period!!!';
            this.isLoading = false;

          }
          else {

            if (this.reportMonthly.data.length === 50 && this.reportMonthly.total_count > this.totalCountArray[apiInfo.page - 1]) {

              // get next report data
              apiInfo.page++;
              this.getMonthlyReport(apiInfo, true);

            } else {

              this.reportMonthly.data.reverse();

              this.setReportMonthlyData();
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

  getTestMonthlyReport(apiInfo: ApiInfo, period: string): void {

    this.isLoading = true;
    this.resetMessages();
    this.showDetails = false;
    this.period = 'Month';

    this.users = [];
    this.usersNotLogged6hours = [];

    this.resetChart();

    setTimeout(() => {

      this.reportMonthly = this.workspaceService.getTestMonthReportData(apiInfo.since, apiInfo.until, period);

      this.reportMonthly.groupBy = apiInfo.groupBy;
      this.reportMonthly.data = this.reportMonthly.data.filter(data => compareDate(data.endDate, new Date()) === -1);

      this.reportMonthly.data.reverse();
      this.setReportMonthlyData(true);

      this.isLoading = false;

    }, 1500);

  }

  setReportMonthlyData(fromTest: boolean = false): void {

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

          if (!fromTest) {
            data.startDate = new Date(data.start);
            data.endDate = new Date(data.end);
          }

          if (user.user === data.user) {
            // check if the user logged time for that day
            if (compareDate(days.date, data.startDate) === 0) {

              let duration = parseInt(days.duration, 10);
              duration = duration + data.dur;//parseInt(data.dur as string, 10);

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

      // map user data to chart
      this.chartSettings.chartData.push({
        data:
          duration
        ,
        label: user.user
      });

    });

    // add user to display on screen
    users.forEach(user => {

      let total = 0
      user.daysLogged.forEach(days => {
        total += parseInt(days.duration, 10);
      });

      user.totalHours = convertMillisToTimeString(total.toString());
      this.users.push(user);

    });

  }

  resetChart(): void {

    // resetting the chart
    this.chartSettings.chartData = [];
    this.chartSettings.chartLabels = [];

  }

  ngOnDestroy(): void {
    if (this.workspaceSub) this.workspaceSub.unsubscribe();
  }

}
