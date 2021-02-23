//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n, count = 0) => {
  if (n == 1) return count;
  if (n <= 0) throw 'Only positive numbers are allowed';
  if (n % 2 == 0) 
    return steps(n / 2, ++count)
  else 
    return steps(n * 3 + 1, ++count)
}
