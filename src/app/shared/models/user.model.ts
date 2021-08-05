export class User {

  user: string;
  totalHours: string;
  daysLogged: DaysLogged[];
  
}

export class DaysLogged {
  
  date: Date;
  duration: string;

}