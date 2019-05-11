import moment from 'moment';

export const makeReminders = (
  startDate,
  endDate,
  doses,
  frequency,
  date,
  weekday,
  time,
  instruction
) => {
  startDate = moment(startDate).format('LLLL');
  endDate = moment(endDate).format('LLLL');

  startDate = startDate.split(' ');
  endDate = endDate.split(' ');

  startDate[4] = '12:00';
  startDate[5] = 'AM';

  endDate[4] = '11:59';
  endDate[5] = 'PM';

  startDate = startDate.join(' ');
  endDate = endDate.join(' ');

  let lastRem = new Date(startDate).getTime();

  for (let i = 0; i < doses; i++) {
    const setRemTime = rem => {
      console.log('makes it here');
      console.log(rem);
      rem[4] = time[i];
      rem[4] = rem[4].split('');

      let hour = parseInt(rem[4][0] + rem[4][1]);
      if (hour > 12) {
        hour = (hour % 12).toString();
        rem[5] = 'PM';
        if (hour.length < 2) {
          hour = '0' + hour;
        }
        rem[4][0] = hour[0];
        rem[4][1] = hour[1];
      }
      if (hour === 12) {
        rem[5] = 'PM';
      }
      if (hour === 0) {
        rem[4][0] = '1';
        rem[4][1] = '2';
        rem[5] = 'AM';
      }
      if (rem[4][0] === '0') {
        rem[4].splice(0, 1);
      }
      rem[4] = rem[4].join('');
      return rem;
    };

    while (lastRem < new Date(endDate).getTime()) {
      if (frequency === 'daily') {
        let newRem = moment(lastRem).format('LLLL');
        newRem = newRem.split(' ');
        newRem = setRemTime(newRem);
        newRem = newRem.join(' ');
        console.log(newRem);
        console.log(new Date(newRem).getTime());
        lastRem += 86400000;
      } else if (frequency === 'weekly') {
        let newRem = moment(lastRem).format('LLLL');
        newRem = newRem.split(' ');
        console.log(newRem)
        if (newRem[2] === weekday[i]) {
          newRem = setRemTime(newRem);
          newRem = newRem.join(' ');
          console.log(newRem);
          console.log(new Date(newRem).getTime());
        }
        lastRem += 86400000;
      } else if (frequency === 'monthly') {
        let newRem = moment(lastRem).format('LLLL');
        newRem = newRem.split(' ');
        // console.log(newRem)
        console.log(date[i])
        if (parseInt(newRem[2][0]) === date[i]) {
          newRem = setRemTime(newRem);
          newRem = newRem.join(' ');
          console.log(newRem);
          console.log(new Date(newRem).getTime());
        }
        lastRem += 86400000;
      }
    }
    lastRem = new Date(startDate).getTime();
  }
};
//   // console.log(moment(startDate).format('LLLL'));
//   // console.log(instruction);
//   let offset = new Date().getTimezoneOffset() / 60;
//   startDate = startDate.split('');
//   endDate = endDate.split('');
//   let startDateHour = offset.toString();
//   let endDateHour = (offset - 1).toString();
//   if (startDateHour.length === 1) {
//     startDateHour = `0${startDateHour}`;
//   } else {
//     startDateHour = startDateHour.toString();
//   }
//   if (endDateHour.length === 1) {
//     endDateHour = `0${endDateHour}`;
//   } else {
//     endDateHour = endDateHour.toString();
//   }
//   startDate[11] = startDateHour[0];
//   startDate[12] = startDateHour[1];
//   startDate[14] = '0';
//   startDate[15] = '0';
//   startDate[17] = '0';
//   startDate[18] = '0';
//   startDate[20] = '0';
//   startDate[21] = '0';
//   startDate[22] = '0';
//   endDate[11] = endDateHour[0];
//   endDate[12] = endDateHour[1];
//   endDate[14] = '5';
//   endDate[15] = '9';
//   endDate[17] = '5';
//   endDate[18] = '9';
//   endDate[20] = '9';
//   endDate[21] = '9';
//   endDate[22] = '9';
//   let timeOnDeck = new Date(startDate.join('')).getTime();
//   let reminders = [];
//   while (timeOnDeck <= new Date(endDate.join('')).getTime()) {
//     if (frequency === 'daily') {
//       reminders.push(timeOnDeck);
//       // console.log(day);
//       // console.log(new Date(moment(timeOnDeck).format('LLLL')).getTime());
//       timeOnDeck += 86400000;
//     } else if (frequency === 'weekly') {
//       let day = moment(timeOnDeck).format('LLLL');
//       day = day.toString();
//       day = `${day}`;
//       day = day.split(' ');
//       if (day[0] === weekday) {
//         console.log(day);
//       }
//       reminders.push(timeOnDeck);
//       timeOnDeck += 86400000;
//       // timeOnDeck += 604800000;
//     } else if (frequency === 'monthly') {
//       // console.log(moment.format(timeOnDeck));
//       reminders.push(timeOnDeck);
//       timeOnDeck += 2419200000;
//     }
//   }
//   console.log(reminders);
//   return reminders;
// };
