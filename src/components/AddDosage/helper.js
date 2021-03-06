import moment from 'moment';

export const makeReminders = ({
  startDate,
  endDate,
  doses,
  frequency,
  data
}) => {
  startDate = moment(startDate)
    .startOf('day')
    .format('LLLL');
  endDate = moment(endDate)
    .endOf('day')
    .format('LLLL');

  let lastRem = new Date(startDate).getTime();

  let reminders = [];

  for (let i = 0; i < doses; i++) {
    const setRemTime = rem => {
      rem[4] = data[i].time;
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

    if (frequency === 'weekly') {
      data[i].value = data[i].value.split('');
      data[i].value[0] = data[i].value[0].toUpperCase();
      data[i].value.push(',');
      data[i].value = data[i].value.join('');
    } else if (frequency === 'monthly') {
      if (data[i].value.length === 3) {
        data[i].value = parseInt(data[i].value[0]);
      } else if (data[i].value.length === 4) {
        data[i].value = parseInt(data[i].value[0] + data[i].value[1]);
      }
    }

    while (lastRem < new Date(endDate).getTime()) {
      if (frequency === 'daily') {
        let newRem = moment(lastRem).format('LLLL');
        newRem = newRem.split(' ');
        newRem = setRemTime(newRem);
        newRem = newRem.join(' ');
        newRem = new Date(newRem).getTime();
        reminders.push(newRem);
        lastRem += 86400000;
      } else if (frequency === 'weekly') {
        let newRem = moment(lastRem).format('LLLL');
        newRem = newRem.split(' ');
        if (newRem[0] === data[i].value) {
          newRem = setRemTime(newRem);
          newRem = newRem.join(' ');
          newRem = new Date(newRem).getTime();
          reminders.push(newRem);
        }
        lastRem += 86400000;
      } else if (frequency === 'monthly') {
        let newRem = moment(lastRem).format('LLLL');
        newRem = newRem.split(' ');
        if (newRem[2].length === 3) {
          if (parseInt(newRem[2][0] + newRem[2][1]) === data[i].value) {
            newRem = setRemTime(newRem);
            newRem = newRem.join(' ');
            newRem = new Date(newRem).getTime();
            reminders.push(newRem);
          }
        } else if (newRem[2].length === 2) {
          if (parseInt(newRem[2][0]) === data[i].value) {
            newRem = setRemTime(newRem);
            newRem = newRem.join(' ');
            newRem = new Date(newRem).getTime();
            reminders.push(newRem);
          }
        }
        lastRem += 86400000;
      }
    }
    lastRem = new Date(startDate).getTime();
  }
  return reminders;
};
