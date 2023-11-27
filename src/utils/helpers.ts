export const getYearByDate = (date: Date) => {
  return date.toString().split('-')[0];
};
