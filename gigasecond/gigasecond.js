//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (moment) => {
  let mom = moment; //don't mutate
  let ms = new Date(mom).getTime() + 1000000000000; //convert date to milliseconds and add gigasecond
  let result = new Date();
  result.setTime(ms); //convert milliseconds to date
  return result;
}
