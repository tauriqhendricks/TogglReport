export function convertMillisToTime(millis: any){

  const delim = " ";
  const hours = Math.floor(millis / (1000 * 60 * 60) % 60);
  const minutes = Math.floor(millis / (1000 * 60) % 60);
  const seconds = Math.floor(millis / 1000 % 60);

  const hrs = hours < 10 ? '0' + hours : hours;
  const mins = minutes < 10 ? '0' + minutes : minutes;
  const secs = seconds < 10 ? '0' + seconds : seconds;

  return hrs + 'h' + delim + mins + 'm' + delim + secs + 's';
  
}