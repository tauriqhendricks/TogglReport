import { Component, OnInit } from '@angular/core';
import { TogglService } from 'src/app/services/toggl.service';
import { Workspace } from 'src/app/shared/models/workspace-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  selectedWorkspace: Workspace;
  workspaces: Workspace[] = [];

  constructor(private togglService: TogglService) { }

  ngOnInit(): void {

    // add workspaces
    this.workspaces.push({ workspaceId: '4519795', apiKey: '3fea34b99c7950e8e52909a69a63fce2', name: `Nieljacobssa's workspace` });
    this.workspaces.push({ workspaceId: '352049', apiKey: '95f2486932f02a9a776bbb9362691cfb', name: 'Bitcube' });
    this.workspaces.push({ workspaceId: '12345', apiKey: 'random23123123213weq', name: 'Testing Workspace' });

    this.workspaces.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

    this.selectedWorkspace = this.workspaces[0];
    this.workspaces = this.workspaces.filter(x => x !== this.selectedWorkspace)

    this.togglService.changeWorkspace(this.selectedWorkspace)

  }

  onSelectedWorkspace(workspace: Workspace): void {

    this.workspaces.push(this.selectedWorkspace);

    this.workspaces.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

    this.workspaces = this.workspaces.filter(x => x !== workspace)
    this.selectedWorkspace = workspace;

    this.togglService.changeWorkspace(this.selectedWorkspace)

  }

}
