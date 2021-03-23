const WEEKDAYS = ['Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday']

const ORDINALS = ['first', 'second', 'third', 'fourth', 'fifth']


export const meetup = (year, month, ordinal, dayOfWeek) => {
  let ordinalCount = 0;
  let dayOfWeekCount = new Date(year, month).getDay();
  const test = () => {
    if (ordinalCount == 4) ordinalCount == 0;
    if (dayOfWeekCount == 6) dayOfWeekCount == 0;
    if (WEEKDAYS[dayOfWeekCount] == dayOfWeek && ORDINALS[ordinalCount] == ordinal)
      return new Date(year, month);
    }
  return test(year, month, ordinal, dayOfWeek);
};
