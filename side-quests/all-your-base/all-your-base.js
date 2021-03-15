export const convert = (nums, b1, b2) => {
  if (b1 <= 1) throw new Error('Wrong input base');
  if (b2 <= 1) throw new Error('Wrong output base');
  if (nums.length == 0 ||  
     (nums[0] == 0 && nums.length > 1) ||
      nums.some(n => n < 0 || n >= b1)) 
    throw new Error('Input has wrong format');
  let decimal = nums.reduce((acc, num) => acc * b1 + num);
  let result = [];
  do {
      result.unshift(decimal % b2);
      decimal = Math.floor(decimal / b2);
  } while (decimal > 0);
  return result;
}
