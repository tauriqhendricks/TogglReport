import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { TogglService } from 'src/app/services/toggl.service';
import { compareDate, convertDateToDayAndMonthString, convertDateToDayOfWeekString, convertMillisToTimeString, convertNumberToTimeString, convertTimeStringToNumber } from 'src/app/shared/helpers/custom-functions';
import { ReportWeekly } from 'src/app/shared/models/report-weekly.model';
import { formatDate } from '@angular/common';
import { ReportMonthly } from 'src/app/shared/models/report-monthly.model';

import { ChartOptions, ChartType, ChartDataSets, ChartTooltipItem, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';
import { DaysLogged, User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // th:todo show totals on graph
  isLoading: boolean = false;

  apiKey: string = '3fea34b99c7950e8e52909a69a63fce2';
  workspaceId: string = '4519795';
  workspaceId2: string = '352049';

  reportWeekly: ReportWeekly;
  reportMonthly: ReportMonthly;
  pageArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  totalCountArray: number[] = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]

  users: User[] = [];

  barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      xPadding: 10,
      yPadding: 10,
      callbacks: {
        title: function (context: ChartTooltipItem[], data: ChartData): string {

          const index = context[0].datasetIndex as number;
          const dataSet = data.datasets as ChartDataSets[];
          const title = dataSet[index].label as string;

          return title;

        },
        label: function (context: ChartTooltipItem): string {

          const value = context.yLabel as number;
          const label = ` Time:${convertNumberToTimeString(value)}`;

          return label;

        }
      }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Hours'
        },
        ticks: {
          max: 24,
          min: 0,
          stepSize: 2
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Day of Week'
        }
      }]
    }
  };

  // barChartLabels: Label[] = [['Mon', '2/8'], ['Tue', '3/8'], ['Wed', '4/8'], ['Thu', '5/8'], ['Fri', '6/8'], ['Sat', '7/8'], ['Sun', '8/8']];
  barChartLabelsMonth: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  // barChartData: ChartDataSets[] = [
  //   // { data: [0], label: 'Users' }
  // ];

  // array = [2, 4, 8, 2.5, 1.8, 0, 0];

  // barChartData: ChartDataSets[] = [
  //   { data: this.array, label: 'Siphosethurinna Kanandawo' },
  //   { data: [8, 7, 5, 3, 0, 5.5, 0], label: 'Schirume6' }
  // ];

  barChartDataMonth: ChartDataSets[] = [
    // { data: [0], label: 'Users' }
  ];

  constructor(
    private togglService: TogglService,
    @Inject(LOCALE_ID) private locale: string) {

    // this.barChartDataMonth = [
    //   { data: [], label: 'Users' }
    // ];

  }

  ngOnInit(): void {

    this.isLoading = false;

  }

  resetBarChartData(): void {

    // this.barChartData = [
    //   { data: [0], label: 'Users' }
    // ];

  }

  resetBarChartDataMonth(): void {

    this.barChartDataMonth = [
      { data: [0], label: 'Users' }
    ];

  }

  test(): void {

    const curr = new Date(); // get current date


    // console.log('date', curr);
    // console.log('month', curr.getMonth() +1);
    // console.log('day of month', curr.getDate());
    // console.log('day of week', convertDayOfWeekNumberToString(curr.getDay()));
    // console.log(convertDateToDayAndMonthString(curr));

    // let lastMonth = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() - 3);
    // console.log('lastMonth', lastMonth);
    // console.log('day of week', convertDayOfWeekNumberToString(lastMonth.getDay()));=

    // this.barChartLabelsMonth = [[convertDateToDayOfWeekString(curr), convertDateToDayAndMonthString(curr)], [convertDateToDayOfWeekString(lastMonth), convertDateToDayAndMonthString(lastMonth)]];

    const a = new Date();

    console.log('curr', curr);
    console.log('a', a);
    if (curr === a) {
      console.log('equal');
    }

    console.log(compareDate(curr, a));



  }

  submitThisWeek(): void {

    const curr = new Date(); // get current date
    const firstDayOfWeek = curr.getDate() - curr.getDay() + 1; // first day of week = day of the month - day of the week + 1 to make first day of the week on monday
    const firstDayOfWeekDate = new Date(curr.setDate(firstDayOfWeek));

    let fisrtDayOfWeek = new Date(firstDayOfWeekDate);
    let lastDayOfWeek = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() + 6));

    const since = formatDate(fisrtDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfWeek, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';

    this.getWeeklyReport(this.apiKey, this.workspaceId, groupBy, since, until);

  }

  submitLastWeek(): void {

    const curr = new Date(); // get current date
    const firstDayOfWeek = curr.getDate() - curr.getDay() + 1; // first day of week = day of the month - day of the week + 1 to make first day of the week on monday
    const firstDayOfWeekDate = new Date(curr.setDate(firstDayOfWeek));

    let lastWeekStart = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() - 7));
    let lastWeekEnd = new Date(firstDayOfWeekDate.setDate(firstDayOfWeekDate.getDate() + 6));

    const since = formatDate(lastWeekStart, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastWeekEnd, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';

    this.getWeeklyReport(this.apiKey, this.workspaceId, groupBy, since, until);

  }

  getWeeklyReport(apiKey: string, workspaceId: string, groupBy: string, since: string, until: string): void {

    this.isLoading = true;

    setTimeout(() => {
      console.log('in get weely report');

      this.togglService.getWeeklyReport(apiKey, workspaceId, groupBy, since, until).subscribe(

        (result: ReportWeekly) => {

          this.reportWeekly = result;
          this.reportWeekly.groupBy = groupBy;
          this.reportWeekly.since = since;
          this.reportWeekly.until = until;

          // this.resetBarChartData();
          // this.barChartData = [];
          this.barChartDataMonth = [];
          this.barChartLabelsMonth = [];


          var untilDate = new Date(this.reportWeekly.until)
          var daysOfWeek: Date[] = [];
          for (var d = new Date(this.reportWeekly.since); d <= untilDate; d.setDate(d.getDate() + 1)) {
            daysOfWeek.push(new Date(d));
          }

          daysOfWeek.forEach(element => {
            this.barChartLabelsMonth.push([convertDateToDayOfWeekString(element), convertDateToDayAndMonthString(element)]);
          });

          this.reportWeekly.data.forEach(element => {

            this.barChartDataMonth.push({
              data: [
                convertTimeStringToNumber(convertMillisToTimeString(element.totals[0])),
                convertTimeStringToNumber(convertMillisToTimeString(element.totals[1])),
                convertTimeStringToNumber(convertMillisToTimeString(element.totals[2])),
                convertTimeStringToNumber(convertMillisToTimeString(element.totals[3])),
                convertTimeStringToNumber(convertMillisToTimeString(element.totals[4])),
                convertTimeStringToNumber(convertMillisToTimeString(element.totals[5])),
                convertTimeStringToNumber(convertMillisToTimeString(element.totals[6]))
              ],
              label: element.title.user
            });

          });

          console.log('Total hours for:', this.reportWeekly.data[0].title.user);

          console.log(convertMillisToTimeString(this.reportWeekly.data[0].totals[7]));


          this.users = [];
          this.reportWeekly.data.forEach(data => {

            let user: User = new User();

            user.user = data.title.user as string;
            user.totalHours = convertMillisToTimeString(data.totals[7]);

            this.users.push(user);

          });

          this.isLoading = false;

        },
        err => {
          console.log('err', err);
        }

      );

    }, 1500);

  }

  submitThisMonth(): void {

    let curr = new Date(); // get current date
    // console.log('curr: ', curr);

    let firstDayOfMonth = new Date(curr.getFullYear(), curr.getMonth(), 1);
    // console.log('firstDayOfMonth', firstDayOfMonth);

    var lastDayOfMonth = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);
    // console.log('lastDay', lastDayOfMonth);

    const since = formatDate(firstDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';
    let page: number = 1;

    this.getMonthlyReport(this.apiKey, this.workspaceId, groupBy, since, until, page);

  }

  submitLastMonth(): void {

    let curr = new Date(); // get current date
    // console.log('curr: ', curr);

    let lastMonth = new Date(curr.getFullYear(), curr.getMonth() - 1, curr.getDate());
    // console.log('lastMonth: ', lastMonth);

    let firstDayOfMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);
    // console.log('firstDayOfMonth', firstDayOfMonth);

    var lastDayOfMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0);
    // console.log('lastDay', lastDayOfMonth);

    const since = formatDate(firstDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd
    const until = formatDate(lastDayOfMonth, 'yyyy-MM-dd', this.locale); // format firstDayOfWeekDate to yyyy-MM-dd

    const groupBy: string = 'users';
    let page: number = 1;

    this.getMonthlyReport(this.apiKey, this.workspaceId, groupBy, since, until, page);

  }

  getMonthlyReport(apiKey: string, workspaceId: string, groupBy: string, since: string, until: string, page: number, newRequest: boolean = false): void {

    this.isLoading = true;

    setTimeout(() => {
      console.log('in get monthly report');

      this.togglService.getMonthlyReport(apiKey, workspaceId, groupBy, since, until, page).subscribe(
        (result: ReportMonthly) => {

          if (newRequest === false) {

            this.reportMonthly = result;
            this.reportMonthly.groupBy = groupBy;
            this.reportMonthly.since = since;
            this.reportMonthly.until = until;

            // this.resetBarChartDataMonth();
            this.barChartDataMonth = [];
            this.barChartLabelsMonth = [];

          } else this.reportMonthly.data = this.reportMonthly.data.concat(result.data);

          if (this.reportMonthly.data.length === 0) {
            console.log('There is no time logged for the selected period!!');
          }
          else {

            if (this.reportMonthly.data.length === 50 && this.reportMonthly.total_count > this.totalCountArray[page - 1]) {
              page++;
              this.getMonthlyReport(apiKey, workspaceId, groupBy, since, until, page, true);
            } else {

              console.log('finish off');
              this.reportMonthly.data.reverse();

              var untilDate = new Date(this.reportMonthly.until)
              var daysOfMonth: Date[] = [];
              for (var d = new Date(this.reportMonthly.since); d <= untilDate; d.setDate(d.getDate() + 1)) {
                daysOfMonth.push(new Date(d));
              }

              // console.log('daysOfMonth', daysOfMonth);


              daysOfMonth.forEach(element => {
                this.barChartLabelsMonth.push([convertDateToDayOfWeekString(element), convertDateToDayAndMonthString(element)]);
              });

              let users: User[] = []

              this.reportMonthly.data.forEach(element => {
                if (!users.some(x => x.user === element.user))
                  users.push({ user: element.user, daysLogged: [{ date: new Date(), duration: '0' }], x: [], totalHours: '0' });
              });

              users.forEach(user => {

                user.daysLogged = [];

                daysOfMonth.forEach(day => {

                  user.daysLogged.push({ date: day, duration: '0' });

                });

                user.daysLogged.forEach(days => {
                  this.reportMonthly.data.forEach(data => {

                    data.startDate = new Date(data.start);
                    data.endDate = new Date(data.end);

                    if (user.user === data.user) {
                      if (compareDate(days.date, data.startDate) === 0) {
                        let duration = parseInt(days.duration, 10);
                        duration = duration + parseInt(data.dur, 10);
                        days.duration = duration.toString();
                      }
                    }

                  });
                });

                let duration: number[] = [];

                user.daysLogged.forEach(days => {
                  duration.push(convertTimeStringToNumber(convertMillisToTimeString(days.duration)));
                });

                this.barChartDataMonth.push({
                  data:
                    duration
                  ,
                  label: user.user
                });

              });

              this.users = [];
              users.forEach(user => {
                let total = 0
                // let user: User = new User();
                user.daysLogged.forEach(days => {
                  total += parseInt(days.duration, 10);
                });

                console.log('total', total);
                console.log('total', convertMillisToTimeString(total));

                user.totalHours = convertMillisToTimeString(total.toString());

                this.users.push(user);

              });

              this.isLoading = false;


              // users.forEach(user => {

              //   user.daysLogged.forEach(days => {
              //     this.reportMonthly.data.forEach(data => {

              //       data.startDate = new Date(data.start);
              //       data.endDate = new Date(data.end);

              //       if (user.user === data.user) {
              //         if (compareDate(days.date, data.startDate) === 0) {
              //           let duration = parseInt(days.duration, 10);
              //           duration = duration + parseInt(data.dur, 10);
              //           days.duration = duration.toString();
              //         }
              //       }

              //     });
              //   });

              // });

              // users.forEach(user => {

              //   let duration: number[] = [];

              //   user.daysLogged.forEach(days => {
              //     duration.push(convertTimeStringToNumber(convertMillisToTimeString(days.duration)))
              //   });

              //   this.barChartDataMonth.push({
              //     data:
              //       duration
              //     ,
              //     label: user.user
              //   });

              // });

            }

          }

        },
        err => {
          console.log('err', err);
        }

      );

    }, 1500);

  }

}

