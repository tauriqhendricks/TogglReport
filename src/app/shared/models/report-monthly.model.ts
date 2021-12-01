import { Money } from "./money.model";

/**
 *  Holds all the data for the monthly report
 */
export class ReportMonthly {

  total_grand: number;
  total_billable: string;
  total_currencies: Money[] = [];
  total_count: number;
  per_page: number;
  data: ReportDataMonthly[] = [];

  groupBy: string;
  since: string;
  until: string;

}

export class ReportDataMonthly {

  pid?: string | number;
  uid?: string | number;

  start: string;
  startDate: Date;

  end: string;
  endDate: Date;

  dur: number;
  user: string;
  client: string;
  project: string;


  // added for test data and can be used in future
  billable: string;
  cur: string;
  description: string;
  id: number;
  is_billable: boolean;
  project_color: string;
  project_hex_color: string;
  tags: string[];
  task: string;
  tid: string;
  updated: string;
  use_stop: boolean;

}
