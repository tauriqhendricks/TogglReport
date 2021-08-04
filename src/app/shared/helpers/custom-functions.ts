import { TimeUnits } from "../models/time-units.model";

export function convertMillisToTimeString(value: any): string {

  const delim = ':';
  // this does not go iver 60 mins, will reset to 0, instead of 60h 30m it will return 0h 30m
  // const hours = Math.floor(value / (1000 * 60 * 60) % 60);
  const hours = Math.floor(value / (1000 * 60 * 60));
  const minutes = Math.floor(value / (1000 * 60) % 60);
  const seconds = Math.floor(value / 1000 % 60);

  const hrs = hours < 10 ? '0' + hours : hours;
  const mins = minutes < 10 ? '0' + minutes : minutes;
  const secs = seconds < 10 ? '0' + seconds : seconds;

  return hrs + 'h' + delim + mins + 'm' + delim + secs + 's';

}

export function convertMillisToTimeUnits(value: any): TimeUnits {

  const hours = Math.floor(value / (1000 * 60 * 60) % 60);
  const minutes = Math.floor(value / (1000 * 60) % 60);
  const seconds = Math.floor(value / 1000 % 60);

  const hrs = hours < 10 ? '0' + hours : hours;
  const mins = minutes < 10 ? '0' + minutes : minutes;
  const secs = seconds < 10 ? '0' + seconds : seconds;

  return {
    hours: hrs.toString(),
    minutes: mins.toString(),
    seconds: secs.toString(),
  };

}

export function convertTimeStringToNumber(value: string): number {

  const hoursMinutes = value.split(/[.:]/);
  const hours = parseInt(hoursMinutes[0], 10);
  const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;

  return hours + (minutes / 60);

}

export function convertNumberToTimeString(value: number): string {

  const delim = ':';
  const str = value.toString();

  const hoursMinutes = str.split(/[.:]/);
  const hours = parseInt(hoursMinutes[0], 10);

  const minutes = value - hours;
  let mins = (minutes * 60).toFixed(0);

  const hrs = hours < 10 ? '0' + hours : hours;
  mins = parseInt(mins, 10) < 10 ? '0' + mins : mins;

  return hrs + 'h' + delim + mins + 'm' + delim + '00' + 's';

}

export function convertDateToDayOfWeekString(value: Date): string {

  const weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayOfWeek = value.getDay();

  return weekDays[dayOfWeek];

}

export function convertDateToDayAndMonthString(value: Date): string {

  const day = value.getDate();
  const month = value.getMonth() + 1;

  return `${day}/${month}`;

}

export function compareDate(date1: Date, date2: Date): number {

  // With Date object we can compare dates them using the >, <, <= or >=.
  // The ==, !=, ===, and !== operators require to use date.getTime(),
  // so we need to create a new instance of Date with 'new Date()'
  let d1 = new Date(date1); let d2 = new Date(date2);

  // set time to 0, do not want to use time when comparing
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  // Check if the dates are equal
  let same = d1.getTime() === d2.getTime();
  if (same) return 0;

  // Check if the first is greater than second
  if (d1 > d2) return 1;

  // Check if the first is less than second
  if (d1 < d2) return -1;

  return 12;

}