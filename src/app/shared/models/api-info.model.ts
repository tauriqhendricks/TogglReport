/**
 * The data that will be sent to the api.
 */
export class ApiInfo {

  key: string;
  workspaceId: string;
  groupBy: string;
  since: string;
  until: string;
  page?: number;

}