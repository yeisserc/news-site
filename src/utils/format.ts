import moment from 'moment';

export const dateToString = (date: Date): string => {
  const formattedDate = moment(date).format("YYYY/MM/DD");
  
  return formattedDate;
}