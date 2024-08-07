let a = ['Jan','Mar','May','Jul','Aug','Oct','Dec']
let b = ['April','June','Sep','Nov']

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function countPrimes(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

let month = 'Feb'
let year = 2015
let x

function isLeapYear(year) {
    return (year % 4 === 0);
}

if(a.includes(month)){
    x = 31
}
else if(b.includes(month)){
    x = 31
}
else{
    if(isLeapYear(year)){
        x = 29
    }
    else{
        x = 28;
    }

}

console.log(countPrimes(x)); 
console.log()