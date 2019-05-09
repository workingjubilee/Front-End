export const makeReminders = (
  startDate,
  endDate,
  frequency,
  date,
  day,
  time
) => {
  let offset = new Date().getTimezoneOffset() / 60;
  startDate = startDate.split('');
  endDate = endDate.split('');
  let startDateHour = offset.toString();
  let endDateHour = (offset - 1).toString();
  if (startDateHour.length === 1) {
    startDateHour = `0${startDateHour}`;
  } else {
    startDateHour = startDateHour.toString();
  }
  if (endDateHour.length === 1) {
    endDateHour = `0${endDateHour}`;
  } else {
    endDateHour = endDateHour.toString();
  }
  startDate[11] = startDateHour[0];
  startDate[12] = startDateHour[1];
  startDate[14] = '0';
  startDate[15] = '0';
  startDate[17] = '0';
  startDate[18] = '0';
  startDate[20] = '0';
  startDate[21] = '0';
  startDate[22] = '0';
  endDate[11] = endDateHour[0];
  endDate[12] = endDateHour[1];
  endDate[14] = '5';
  endDate[15] = '9';
  endDate[17] = '5';
  endDate[18] = '9';
  endDate[20] = '9';
  endDate[21] = '9';
  endDate[22] = '9';
  let timeOnDeck = new Date(startDate.join('')).getTime();
  let reminders = [];
  while (timeOnDeck <= new Date(endDate.join('')).getTime()) {
    if (frequency === 'daily') {
      reminders.push(timeOnDeck);
      timeOnDeck += 86400000;
    } else if (frequency == 'weekly') {
      reminders.push(timeOnDeck);
      timeOnDeck += 604800000;
    } else if (frequency === 'monthly') {
      reminders.push(timeOnDeck);
      timeOnDeck += 2419200000;
    }
  }
  console.log(reminders);
  return reminders;
};
