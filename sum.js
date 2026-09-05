
// Sums an array of numbers.
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// Calculates the average of an array of numbers.
function average(numbers) {
  if (!numbers || numbers.length === 0) {
    return 0;
  }
  return sum(numbers) / numbers.length;
}

module.exports = { sum, average };
