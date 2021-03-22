const WEEKDAYS = ['Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday']

const ORDINALS = ['first', 'second', 'third', 'fourth', 'fifth']

export const meetup = (year, month, ordinal, dayOfWeek) => {
  for (let i = WEEKDAYS.indexOf(dayOfWeek); i < 31; i++) {
    for (let j = 0; j < 31; j++) {
      if (WEEKDAYS[i] == dayOfWeek && ORDINALS[j] == ordinal)
        return new Date(year, month - 1, new Date(year, month -1, i).getDate())
    }//TRY RECURSION
  }
};


//first, second, third, fourth, fifth, last,
//monteenth, tuesteenth, wednesteenth, thursteenth, 
//friteenth, saturteenth, sunteenth