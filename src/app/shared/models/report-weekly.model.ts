import { Money } from "./money.model";

export class ReportWeekly {

  total_grand: number;
  total_billable: string;
  total_currencies: Money[] = [];
  data: ReportDataWeekly[] = [];
  week_totals: string[] = [];

  groupBy: string;
  since: string;
  until: string;

}

export class ReportDataWeekly {

  pid?: string;
  uid?: string;

  title: DataTitleWeekly;
  totals: string[] = [];

  details: DataDetailsWeekly[] = []

}

class DataTitleWeekly {

  user?: string;
  client?: string;
  project?: string;

}

class DataDetailsWeekly {

  pid?: string;
  uid?: string;

  title: DataTitleWeekly;
  totals: string[] = [];

}
