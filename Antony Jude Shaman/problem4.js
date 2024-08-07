function isLeapYear(year) {
  return year % 4 === 0;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const months = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

function daysInAMonth(month, year) {
  if (months[month] === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  if ([4, 6, 9, 11].includes(months[month])) {
    return 30;
  }
  return 31;
}

let days = daysInAMonth("May", 2016);
console.log(days);

let count = 0;
for (let i = 2; i <= days; i++) {
  if (isPrime(i)) {
    // console.log(i);
    count++;
  }
  // console.log(i);
}

console.log(count);
