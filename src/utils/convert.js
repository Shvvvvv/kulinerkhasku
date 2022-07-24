export function dateToTime(date) {
  let jam = date.getHours();
  let minut = date.getMinutes();
  let str = '';
  if (jam < 10) {
    str = '0' + jam + ':';
  } else {
    str = jam + ':';
  }

  if (minut > 9) {
    str += minut;
  } else {
    str += '0' + minut;
  }

  return str;
}
