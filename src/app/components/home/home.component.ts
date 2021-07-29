import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TogglService } from 'src/app/services/toggl.service';
import { convertMillisToTime } from 'src/app/shared/helpers/custom-functions';
import { Report } from 'src/app/shared/models/report.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // th:todo get data by week

  apiKey: string = '3fea34b99c7950e8e52909a69a63fce2';
  workspaceId: string = '4519795';

  report: Report;

  constructor(private togglService: TogglService) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log('testing');

    console.log('apiKey', this.apiKey);
    console.log('workspaceId', this.workspaceId);

    const apiKey: string = '3fea34b99c7950e8e52909a69a63fce2';
    const workspaceId1: string = '4519795';
    const workspaceId2: string = '352049';

    const groupBy: string = 'users';

    this.togglService.getWeeklyReport(this.apiKey, this.workspaceId, groupBy).pipe(
      tap(x => x.groupBy = groupBy)).subscribe(
        (result: Report) => {

          // console.log('result', result);
          this.report = result;
          // console.log('result.data[0].uid', result.data[0].uid);
          // console.log('result.data[0].pid', result.data[0].pid);

          if (this.report.groupBy === 'users')
            this.report.data.forEach(element => {
              console.log('user: ', element.title.user);
              console.log('total hours: ', convertMillisToTime(element.totals[7]));
            });

        },
        err => {
          console.log('err', err);
        }
      );

  }

}
