import { DateTime } from './luxon.js';

const updateClock = () => {
  const dateTimeDiv = document.getElementById('time');
  const now = DateTime.local();

  const dateString = now.toLocaleString(DateTime.DATE_FULL);
  const timeString = now.toLocaleString(DateTime.TIME_SIMPLE);

  const dateTime = `${dateString} , ${timeString}`;
  dateTimeDiv.innerHTML = dateTime;
};

export default updateClock;