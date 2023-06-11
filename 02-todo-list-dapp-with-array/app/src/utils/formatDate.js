// Function that convert a rawDate to an human readable date
const formatDate = (rawDate) => {
  rawDate = Number(rawDate)
  if(!rawDate) { return }
  const _date = new Date(rawDate * 1000)
  const date = `${pad(_date.getDate())}/${pad(_date.getMonth()+1)}/${_date.getFullYear()}`;
  const time = `${pad(_date.getHours())}:${pad(_date.getMinutes())}:${pad(_date.getSeconds())}`;
  return `${date} - ${time}`;
};

function pad(n) {
  return n < 10 ? "0"+n : n;
}

export default formatDate;