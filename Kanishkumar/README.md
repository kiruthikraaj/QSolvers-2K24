## JS Date Object

- Date Objects used to work with date and time.

`new Date() Constructor`:

Date objects are created with new Date().

        - new Date()
        - new Date(date string)
        - new Date(year,month)
        - new Date(year,month,day)
        - new Date(year,month,day,hours)
        - new Date(year,month,day,hours,minutes)
        - new Date(year,month,day,hours,minutes,seconds)
        - new Date(year,month,day,hours,minutes,seconds,ms)
        - new Date(milliseconds)

Example:

const d = new Date("2022-03-25");

### Date Get Methods:

            const d = new Date(); 
            console.log(d.getFullYear())      // 2024
            console.log(d.getMonth()+1)       // 7
            console.log(d.getDay())           // 2 
            console.log(d.getDate())          // 30
            console.log(d.getHours())         // 10
            console.log(d.getMinutes())       // 32 
            console.log(d.getSeconds())       // 46
            console.log(d.getMilliseconds())  // 583


            const d = new Date("2021-03-25");
            d.getFullYear();  // 2021


To get Weekday name, we can pass array of names.

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const d = new Date();
        console.log(days[d.getDay()]); // Tuesday

### Date.now()

This returns the current date in milliseconds since 01-01-1970
        
         console.log(Date.now()) // 17223162436854

---

### UTC Times:

The methods will give UTC Time standards. (-5hr 30min IST)

        const d = new Date(); 
        console.log(d.getUTCHours())    // 5
        console.log(d.getUTCMinutes())  // 17
        console.log(d.getUTCSeconds())  // 20
        console.log(d.getUTCMilliseconds())  // 506


### Set date Methods:

const d = new Date(); 
console.log(d.setFullYear(2020,11,2)) 
console.log(d.setMonth(11))       
console.log(d.setDate(23))       
console.log(d.setHours(19))        
console.log(d.setMinutes(54))       
console.log(d.setSeconds(34))       
console.log(d.setMilliseconds(232))  

When you use the setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, and setMilliseconds methods on a Date object, these methods `return the number of milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC)` representing the updated date and time.


>
> setDay() is not a predefined function, whereas getDay() is a predefined function

---

## Format Dates

### 1. moment js

Moment.js is a JavaScript date and time library that you can use to quickly format your dates without handling the logic with so many lines of code.

Example-1

        const moment = require('moment')

        const now = moment()
        console.log(now.format('YYYY-MM-DD HH:mm:ss')) //2024-07-30 11:16:33
        console.log(now.format('YYYY-MM-DD')) //2024-07-30


Example-2

        const moment = require('moment')

        const now = moment('2012-09-12')
        console.log(now.format('DD / MM / YYYY'))  // 12 / 09 / 2012


### Format date without libraries

            let date = new Date()

            date1 = date.getDate()
            month = date.getMonth()
            year = date.getFullYear()

            format = date1 + "/ "+ month +"/ " + year
            console.log(format)      // 30 /6 /2024

---

### Date locale methods

            const date = new Date()
            console.log(date.toLocaleString()) // 7/30/2024, 11:29:23 AM
            console.log(date.toLocaleDateString())  // 7/30/2024
            console.log(date.toLocaleTimeString()) // 11:30:19 AM
            console.log(date.toDateString()) //Tue Jul 30 2024
            console.log(date.toTimeString()) // 11:31:22 GMT+0530 (India Standard Time)
            console.log(date.toISOString()) //2024-07-30T06:01:45.005Z
            console.log(date.toUTCString()) //Tue, 30 Jul 2024 06:02:03 GMT


- toDateString() - Returns the date as a string (e.g., Wed Jul 24 2024)

- toISOString() - Returns the date as a string in ISO format (e.g., 2024-07-24T10:18:11.000Z)

- toUTCString() - Returns the date as a string in UTC format (e.g., Wed, 24 Jul 2024 10:18:11 GMT)

`Parameters:`

- locales : Example: en-US, ja-JP
- options : Example:  year: 'numeric', month: 'long', day: 'numeric', hour, minute, second, timezone Name.


    const today = new Date();

    console.log('US format:', today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));

---

## Date comparison:

We can compare the date objects and see the difference.

        const today = new Date()
        const someday = new Date()

        someday.setFullYear(2200,8,11)

        console.log(someday - today)  // 5557680000000 (in ms)

---

Comparing getTime()  will return "Both are equal"


        let date1 = new Date();
        let date2 = new Date();

        if (date1.getTime() === date2.getTime()) {
        console.log("Both  are equal");
        } else {
        console.log("Not equal");
        }

But if we compare, date1 === date2 directly, it returns false.


---

## Convert UTC To Local Time


        const utc = new Date() // current utc time // 06:06:26 GMT
        const local = new Date(utc);
        console.log(local.toLocaleTimeString())  // 11:35:38 AM

## Local to UTC time:

        const local = new Date()
        const utc = new Date(local)

        console.log(utc.toUTCString()) // Tue, 30 Jul 2024 06:08:46 GMT

---

### getTimezoneOffset()

This returns diffference between local and UTC timezone (in minutes).

        const d = new Date();
        d.getTimezoneOffset(); // -330

---

## Epoch Time:

- Epoch time, also known as Unix time or POSIX time, is a system for tracking time by counting the number of seconds that have elapsed since a specific starting point. 

- The epoch time starts at 00:00:00 Coordinated Universal Time (UTC) on January 1, 1970.

    ` January 1, 1970, 00:00:00 UTC `


    // Epoch time in days
    console.log(Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24))); 

    // Epoch time in hours
    console.log(Math.floor(new Date().getTime() / (1000 * 60 * 60)));

    // Epoch time in minutes
    console.log(Math.floor(new Date().getTime() / (1000 * 60)));

    // Epoch time in seconds
    console.log(Math.floor(new Date().getTime() / 1000)); 

    // Epoch time in milliseconds
    console.log(new Date().getTime()); 

---

### DST - Daylight Time Savings

- Daylight Saving Time (DST) is a practice of setting the clock forward by one hour during the warmer months to extend evening daylight and conserve energy. 

- The handling of DST can vary by locale and affects date and time calculations.


- Moving the clock forward during Daylight Saving Time (DST) does indeed involve setting the clock ahead by one hour. 

- It’s designed to shift the available daylight to better match our waking hours.

![alt text](image.png)


`Examples of DST Usage`

Countries That Use DST:

- Many countries in North America, Europe, and parts of the Middle East and Australia use DST.

Countries That Do Not Use DST:

- India: India has consistent daylight throughout the year and does not use DST.
- China: China has opted for a single time zone for the entire country and does not use DST.
- Japan: Japan discontinued DST after World War II and has not reintroduced it.

---

## date-fns library:

The `date-funs` library provides predefined methods to format,addDays,subDays and check (isToday,isTomorrow,isYesterday) 

        const { format,addDays,subDays,isToday,isTomorrow,isYesterday,} = require('date-fns');
  
        const now = new Date();

        console.log('Current Date:', now);  //   2024-07-30
        
        console.log(format(now, 'yyyy-MM-dd'));
        
        console.log(addDays(now, 10)); //2024-08-09T06:58:47.494Z
        
        console.log(subDays(now, 10));  //2024-07-20T06:58:47.494Z
        
        console.log(isToday(now));  // true

        console.log(isTomorrow(addDays(now, 1)));  // true

        console.log(isYesterday(subDays(now, 1)));  // true

---

## Convert various time zones including day light time savings

To convert a date to a different time zone while accounting for DST, we can use `toLocaleString()` with the timeZone option. `This method automatically handles DST for the specified time zone.`


        function convertToTimeZone(date, timeZone) {
            const options = {
            timeZone: timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
            };
        
            return date.toLocaleString('en-US', options);
        }
        
        const now = new Date();
        
        const newYorkTime = convertToTimeZone(now, 'America/New_York');
        const tokyoTime = convertToTimeZone(now, 'Asia/Tokyo');
        
        console.log('New York Time:', newYorkTime);
        console.log('Tokyo Time:', tokyoTime);
  

The above code uses timeZone parameter which autmatically deals with DST.

---

### moment.js isDST() function:

moment.js has a function called `isDST()` which can be used to check if a timeZone observes DST or not.

        const moment = require('moment');
        const momentTimezone = require('moment-timezone');

        const convertDateToTimeZone = (date, timeZone) => {
            return moment(date).tz(timeZone).format();
        }

        const isDSTObserved = (date, timeZone) => {
            return moment(date).tz(timeZone).isDST();
        }

        const now = new Date();

        const nyTime = convertDateToTimeZone(now, 'America/New_York');
        console.log('New York Time:', nyTime);

        const dstStatus = isDSTObserved(now, 'America/New_York');
        console.log('Is DST Observed in New York?', dstStatus);


## Date conversion without using any third party libraries

    const date = new Date()

    console.log(date.toLocaleDateString()) // 30/7/2024

Date String:

    console.log(date.toDateString()) // Tue Jul 30 2024

ISO String:

    console.log(date.toISOString()) // 2024-07-30T07:05:23.314Z

UTC String:

    console.log(date.toUTCString()) // Tue, 30 Jul 2024 07:05:43 GMT

Difference:

    console.log(date.getTimezoneOffset()) // -330


Date Formatting:

        const date = new Date()

        let date1 = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        format = date1 +" / "+ month +" / "+year
        console.log(format)  // 30 / 6 / 2024

---

