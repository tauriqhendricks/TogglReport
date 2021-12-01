import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiInfo } from '../shared/models/api-info.model';
import { HttpOptions } from '../shared/models/http-options.model';
import { ReportMonthly } from '../shared/models/report-monthly.model';
import { ReportWeekly as ReportWeekly } from '../shared/models/report-weekly.model';
import { Workspace } from '../shared/models/workspace-model';
import { BaseService } from './_base.service';

@Injectable({
  providedIn: 'root'
})
export class TogglService extends BaseService {

  private password: string = 'api_token';
  private action: string = 'reports/api/v2';

  public getWeeklyReport(apiInfo: ApiInfo): Observable<ReportWeekly> {

    // set the httpOptions for getting a weekly report
    const httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${apiInfo.key}:${this.password}`)
      }),
      params: new HttpParams()
        .set('user_agent', 'tauriqh786@gmail.com')
        .set('workspace_id', apiInfo.workspaceId)
        .set('grouping', apiInfo.groupBy)
        .set('since', apiInfo.since)
        .set('until', apiInfo.until)
    };

    return this.baseGet(`${this.action}/weekly`, httpOptions);

  }

  public getMonthlyReport(apiInfo: ApiInfo): Observable<ReportMonthly> {

    // set the httpOptions for getting a monthly report
    const httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${apiInfo.key}:${this.password}`)
      }),
      params: new HttpParams()
        .set('user_agent', 'tauriqh786@gmail.com')
        .set('workspace_id', apiInfo.workspaceId)
        .set('grouping', apiInfo.groupBy)
        .set('since', apiInfo.since)
        .set('until', apiInfo.until)
        .set('page', apiInfo.page as number)
    };

    return this.baseGet(`${this.action}/details`, httpOptions);

  }

  private workspaceSource = new BehaviorSubject<Workspace>(new Workspace());
  workspaceChange$ = this.workspaceSource.asObservable();
  changeWorkspace(workspace: Workspace) {
    this.workspaceSource.next(workspace);
  }

  private isNavLoadingSource = new BehaviorSubject<boolean>(false);
  isNavLoadingChange$ = this.isNavLoadingSource.asObservable();
  changeIsNavLoading(isNavLoading: boolean) {
    this.isNavLoadingSource.next(isNavLoading);
  }

}
