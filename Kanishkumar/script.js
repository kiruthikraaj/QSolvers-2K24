// const d = new Date();
// console.log(d.getUTCFullYear()) // 20
// console.log(d.getUTCMonth()+1) 
// console.log(d.getUTCDay()) 
// console.log(d.getUTCDate()) 
// console.log(d.getUTCHours())
// console.log(d.getUTCMinutes())
// console.log(d.getUTCSeconds())
// console.log(d.getUTCMilliseconds())
// 2024
// 7
// 2
// 30
// 5
// 17
// 20
// 506

const { some } = require("bluebird")
const { months } = require("moment")

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const d = new Date();
// console.log(days[d.getDay()])

// const d = new Date(); 
// console.log(d.setFullYear(2020,11,2)) 
// console.log(d.setMonth(11))       
// console.log(d.setDate(23))       
// console.log(d.setHours(19))        
// console.log(d.setMinutes(54))       
// console.log(d.setSeconds(34))       
// console.log(d.setMilliseconds(232))  


// const today = new Date()
// const someday = new Date()

// someday.setFullYear(2200,8,11)

// console.log(someday - today)
// Install Moment.js using npm
// npm install moment

// const moment = require('moment')

// const now = moment('2012-09-12')
// console.log(now.format('DD / MM / YYYY'))  // 12 / 09 / 2012


// const date = new Date()
// console.log(date.toLocaleString()) // 7/30/2024, 11:29:23 AM
// console.log(date.toLocaleDateString())  // 7/30/2024
// console.log(date.toLocaleTimeString()) // 11:30:19 AM
// console.log(date.toDateString()) //Tue Jul 30 2024
// console.log(date.toTimeString()) // 11:31:22 GMT+0530 (India Standard Time)
// console.log(date.toISOString()) //2024-07-30T06:01:45.005Z
// console.log(date.toUTCString()) //Tue, 30 Jul 2024 06:02:03 GMT


// const utc = new Date() // current utc time // 06:06:26 GMT
// const local = new Date(utc);
// console.log(local.toLocaleTimeString())  // 11:35:38 AM

// const local = new Date()
// const utc = new Date(local)

// console.log(utc.toUTCString()) // Tue, 30 Jul 2024 06:08:46 GMT


    // // Epoch time in days
    // console.log(Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24))); 

    // // Epoch time in minutes
    // console.log(Math.floor(new Date().getTime() / (1000 * 60)));
    // console.log(Math.floor(new Date().getTime() / (1000 * 60 * 60)));

    // // Epoch time in seconds
    // console.log(Math.floor(new Date().getTime() / 1000)); 

    // // Epoch time in milliseconds
    // console.log(new Date().getTime()); 

    // Importing necessary functions from date-fns
// const {
//     format,
//     addDays,
//     subDays,
//     isToday,
//     isTomorrow,
//     isYesterday,
//     parseISO,
//     parse,
//     compareAsc,
//   } = require('date-fns');
  
//   const now = new Date();
//   console.log('Current Date:', now);
  
//   console.log(format(now, 'yyyy-MM-dd'));
  
//   console.log(addDays(now, 10));
  
//   console.log(subDays(now, 10));
  
//   console.log(isToday(now));
//   console.log(isTomorrow(addDays(now, 1)));
//   console.log(isYesterday(subDays(now, 1)));
  
//   2024-07-30
//   2024-08-09T06:58:47.494Z
//   2024-07-20T06:58:47.494Z
//   true
//   true
//   true



// const date = new Date()

// let date1 = date.getDate()
// let month = date.getMonth()
// let year = date.getFullYear()
// format = date1 +" / "+ month +" / "+year
// console.log(format)  // 30 / 6 / 2024


// function convert(date, timeZone){
//     const options = {
//         timeZone: timeZone,
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true
//     }
//     return date.toLocaleString(now, options)
// }

// const now = new Date()

// console.log(convert(now, 'AMERICA/New_York'))


// const d = new Date();

// // Convert to milliseconds since Jan 1, 1970
// const localTime = d.getTime();

// // Obtain local UTC offset in milliseconds
// const localOffset = d.getTimezoneOffset() * 60 * 1000;

// // Obtain UTC time in milliseconds
// const utcTime = localTime + localOffset;

// // Get time zone offset for NY, USA
// const getEstOffset = () => {
//     // Get standard time zone offset for EST (January)
//     const stdTimezoneOffset = () => {
//         const jan = new Date(Date.UTC(new Date().getFullYear(), 0, 1)); // January 1
//         const jul = new Date(Date.UTC(new Date().getFullYear(), 6, 1)); // July 1
//         return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()); // Standard offset
//     };

//     const today = new Date();

//     // Check if DST is observed
//     const isDstObserved = () => today.getTimezoneOffset() < stdTimezoneOffset();

//     // Return the offset for EST (-5) or EDT (-4)
//     return isDstObserved() ? -4 : -5;
// };

// // Obtain and add destination's UTC time offset (Eastern Time)
// const estOffset = getEstOffset();
// const usa = utcTime + (60 * 60 * 1000 * estOffset);

// // Convert milliseconds value to date string
// const nd = new Date(usa);

// // Output results
// console.log('Current local time:', d.toString());
// console.log('UTC time:', new Date(utcTime).toString());
// console.log('Eastern Time:', nd.toString());

// const moment = require('moment');
// const momentTimezone = require('moment-timezone');

// const convertDateToTimeZone = (date, timeZone) => {
//     return moment(date).tz(timeZone).format();
// }

// const isDSTObserved = (date, timeZone) => {
//     return moment(date).tz(timeZone).isDST();
// }

// const now = new Date();

// const nyTime = convertDateToTimeZone(now, 'America/New_York');
// console.log('New York Time:', nyTime);

// const dstStatus = isDSTObserved(now, 'America/New_York');
// console.log('Is DST Observed in New York?', dstStatus);
