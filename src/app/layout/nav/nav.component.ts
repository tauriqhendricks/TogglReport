import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TogglService } from 'src/app/services/toggl.service';
import { WorkspaceService } from 'src/app/services/workspace.service';
import { Workspace } from 'src/app/shared/models/workspace-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  isLoading$: Observable<boolean>;
  sub: Subscription;

  errorMessage: string = '';

  selectedWorkspace: Workspace;
  workspaces: Workspace[] = [];

  constructor(
    private togglService: TogglService,
    private workspaceService: WorkspaceService) { }

  ngOnInit(): void {

    this.getWorkspaces();

  }

  getWorkspaces(): void {

    this.isLoading$ = this.togglService.isNavLoadingChange$;
    this.togglService.changeIsNavLoading(true)

    this.errorMessage = '';

    this.sub = this.workspaceService.getWorkspaces()
      .subscribe((result: Workspace[]) => {

        this.workspaces = result;
        this.sortWorkspaces();

        this.selectedWorkspace = this.workspaces[0];
        this.workspaces = this.workspaces.filter(x => x !== this.selectedWorkspace)

        this.togglService.changeWorkspace(this.selectedWorkspace)
        this.togglService.changeIsNavLoading(false)

      }, err => {

        this.errorMessage = 'Could not retrieve any Workspaces!!!';
        this.togglService.changeIsNavLoading(false)

      });

  }

  sortWorkspaces(): void {

    // sort alphabetical
    this.workspaces.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

  }

  onSelectedWorkspace(workspace: Workspace): void {

    this.workspaces.push(this.selectedWorkspace);
    this.sortWorkspaces();

    this.workspaces = this.workspaces.filter(x => x !== workspace)
    this.selectedWorkspace = workspace;

    this.togglService.changeWorkspace(this.selectedWorkspace)

  }

  ngOnDestroy(): void {

    if (this.sub)
      this.sub.unsubscribe();

  }

}
