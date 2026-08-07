// Sums an array of numbers.
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return sum(numbers) / numbers.length;
}

module.exports = { sum, average };
