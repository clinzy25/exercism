const GIGASECOND_IN_MS = (10 ** 9) * 1000;

export const gigasecond = (moment) => {
  return new Date(moment.getTime() + GIGASECOND_IN_MS);
}
