import { Money } from "./money.model";

export class Report {

  total_grand: number;
  total_billable: string;
  total_currencies: Money[] = [];
  data: ReportData[] = [];
  week_totals: string[] = [];

  groupBy: string;

}

class ReportData{
  
  pid?: string;
  uid?: string;

  title: DataTitle;
  totals: string[] = [];

  details: DataDetails[] = []
  
}

class DataTitle{

  user?: string;
  client?: string;
  project?: string;

}

class DataDetails{

  pid?: string;
  uid?: string;

  title: DataTitle;
  totals: string[] = [];

}
