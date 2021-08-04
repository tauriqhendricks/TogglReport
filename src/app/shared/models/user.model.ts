export class User {

  user: string;
  daysLogged: DaysLogged[];
  x: number[][];

  totalHours: string;
  
}

export class DaysLogged {
  
  date: Date;
  duration: string;

}