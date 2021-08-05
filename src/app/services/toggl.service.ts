import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  public getWeeklyReport(apiKey: string, workspaceId: string, groupBy: string, since: string, until: string): Observable<ReportWeekly> {

    const httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${apiKey}:${this.password}`)
      }),
      params: new HttpParams()
        .set('user_agent', 'tauriqh786@gmail.com')
        .set('workspace_id', workspaceId)
        .set('grouping', groupBy)
        .set('since', since)
        .set('until', until)
    };

    return this.baseGet(`${this.action}/weekly`, httpOptions);

  }

  public getMonthlyReport(apiKey: string, workspaceId: string, groupBy: string, since: string, until: string, page: number): Observable<ReportMonthly> {

    const httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${apiKey}:${this.password}`)
      }),
      params: new HttpParams()
        .set('user_agent', 'tauriqh786@gmail.com')
        .set('workspace_id', workspaceId)
        .set('grouping', groupBy)
        .set('since', since)
        .set('until', until)
        .set('page', page)
    };

    return this.baseGet(`${this.action}/details`, httpOptions);

  }

  private workspaceSource = new BehaviorSubject<Workspace>(new Workspace());
  workspaceChange$ = this.workspaceSource.asObservable();
  changeWorkspace(workspace: Workspace) {
    this.workspaceSource.next(workspace);
  }

}
