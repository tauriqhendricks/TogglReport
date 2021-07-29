import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOptions } from '../shared/models/http-options.model';
import { Report as Report } from '../shared/models/report.model';
import { BaseService } from './_base.service';

@Injectable({
  providedIn: 'root'
})
export class TogglService extends BaseService {

  private password: string = 'api_token';
  // apiWorkspaces: 'https://api.track.toggl.com/api/v8/workspaces',
  private action:string = 'reports/api/v2';

  public getWeeklyReport(apiKey: string, workspaceId: string, groupBy: string = 'projects'): Observable<Report> {

    const httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${apiKey}:${this.password}`)
      }),
      params: new HttpParams()
        .set('user_agent', 'tauriqh786@gmail.com')
        .set('workspace_id', workspaceId)
        .set('grouping', groupBy)
    };
    console.log('httpOptions headers', httpOptions.headers);
    console.log('httpOptions params', httpOptions.params);
    console.log('this.action', this.action);

    return this.baseGet(`${this.action}/weekly`, httpOptions);

  }

}
