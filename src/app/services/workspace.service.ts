import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Workspace } from '../shared/models/workspace-model';
import { BaseService } from './_base.service';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService extends BaseService {

  // add new workspaces here
  private workspaces: Workspace[] = [
    { workspaceId: '4519795', apiKey: '3fea34b99c7950e8e52909a69a63fce2', name: `Nieljacobssa's workspace` },
    { workspaceId: '352049', apiKey: '95f2486932f02a9a776bbb9362691cfb', name: 'Bitcube' },
    { workspaceId: '12345', apiKey: 'random23123123213weq', name: 'Testing Workspace' }
  ]
  private workspacesSource = new BehaviorSubject<Workspace[]>(this.workspaces);

  getWorkspaces(): Observable<Workspace[]> {

    return this.workspacesSource.asObservable();

  }

}
