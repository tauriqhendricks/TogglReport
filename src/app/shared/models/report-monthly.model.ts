import { Money } from "./money.model";

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

class ReportDataMonthly {

  pid?: string;
  uid?: string;

  start: string;
  startDate: Date;

  end: string;
  endDate: Date;

  dur: string;
  user: string;
  client: string;
  project: string;

}
