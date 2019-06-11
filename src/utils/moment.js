import moment from 'moment';

const FormatDate = time => {
  return moment(time).format('DD/MM/YYYY');
};
const FormatTime = time => {
  return moment(time).format('h:mm');
};
export { FormatDate, FormatTime };
