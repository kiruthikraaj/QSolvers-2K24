function isPrime(n){
    if(n <= 1){
        return false;
    }
    else{
        for(var i = 2; i <=Math.sqrt(n); i++){
            if(n % i == 0){
                return false;
            }
        }
    }
    return true;
}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  
function calculatedays(monthName, year) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthIndex = monthNames.indexOf(monthName) + 1; 
    
    const days = getDaysInMonth(monthIndex, year);
  
    let count = 0;
    for (let day = 1; day <= days; day++) {
      if (isPrime(day)) {
        count++;
      }
    }
  
    return count;
  }
  
  const monthName = "May";
  const year = 2016;
  console.log(calculatedays(monthName, year)); 
