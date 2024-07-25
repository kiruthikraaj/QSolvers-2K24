## Milestone - 9

## Table of Contents

- [Date Object in JavaScript](#date-object-in-javascript)
- [Date Methods](#date-methods)
- [Date Formats](#date-formats)
- [toLocaleString()](#tolocalestring)
  - [Optional Parameters for toLocaleString()](#optional-parameters-for-tolocalestring)
- [Intl.DateTimeFormat()](#intldatetimeformat)
- [timeZoneOffset](#timezoneoffset)
- [Epoch Time](#epoch-time)
- [Date Comparison](#date-comparison)
- [date-fns](#date-fns)
- [Formatting Dates without 3rd party libraries](#formatting-dates-without-3rd-party-libraries)

### Date Object in JavaScript

The Date object is a data type built into the JavaScript language. Date objects are created with the new Date() constructor.

There are four ways of instantiating a date object:

> [!TIP]
>
> - new Date()
>
> - new Date(year, month, day, hours, minutes, seconds, milliseconds)
>
> - new Date(milliseconds)
>
> - new Date(date string)

```javascript
// Create a new date object

let date = new Date();

console.log(date);

// Create a new date object with a specific date and time

let date = new Date(2024, 07, 24, 03, 15, 30, 0);

console.log(date);

// Create a new date object with milliseconds

let date = new Date(0);

console.log(date);

// Create a new date object with a date string

let date = new Date("2024-07-24T03:15:30Z");

console.log(date);
```

The Date object has several methods for working with dates and times. Some of the most commonly used methods are:

**1. getDate()** - Returns the day of the month (1-31)

**2. getDay()** - Returns the day of the week (0-6)

**3. getFullYear()** - Returns the year (four digits)

**4. getHours()** - Returns the hour (0-23)

**5. getMilliseconds()** - Returns the milliseconds (0-999)

**6. getMinutes()** - Returns the minutes (0-59)

**7. getMonth()** - Returns the month (0-11)

**8. getSeconds()** - Returns the seconds (0-59)

**9. getTime()** - Returns the number of milliseconds since January 1, 1970

**10. toString()** - Returns the date as a string

```javascript
let date = new Date();

console.log(date.getDate());

console.log(date.getDay());

console.log(date.getFullYear());

console.log(date.getHours());

console.log(date.getMilliseconds());

console.log(date.getMinutes());

console.log(date.getMonth());

console.log(date.getSeconds());

console.log(date.getTime());

console.log(date.toString());

// Output
// 24
// 3
// 2024
// 15
// 701
// 22
// 6
// 40
// 1721814760701
// Wed Jul 24 2024 15:22:40 GMT+0530 (India Standard Time)
```

> [!IMPORTANT]
>
> To get the date string in separate parts, you can use the following code:
>
> ```javascript
> const date = new Date("2024-07-24T03:15:30Z").toDateString();
> console.log(date.split(" ")); // [ 'Wed', 'Jul', '24', '2024' ]
> ```

### Date Methods

The Date object has several methods for working with dates and times. Some of the most commonly used methods are:

**1. setDate()** - Sets the day of the month (1-31)

**2. setFullYear()** - Sets the year (four digits)

**3. setHours()** - Sets the hour (0-23)

### Date Formats

The Date object has several methods for formatting dates. Some of the most commonly used methods are:

**1. toDateString()** - Returns the date as a string (e.g., `Wed Jul 24 2024`)

**2. toISOString()** - Returns the date as a string in ISO format (e.g., `2024-07-24T10:18:11.000Z`)

**3. toLocaleDateString()** - Returns the date as a string based on locale settings (e.g., `07/24/2024`)

**4. toLocaleTimeString()** - Returns the time as a string based on locale settings (e.g., `10:18:11 AM`)

**5. toTimeString()** - Returns the time as a string with time zone information (e.g., `10:18:11 GMT+0000 (Coordinated Universal Time)`)

**6. toUTCString()** - Returns the date as a string in UTC format (e.g., `Wed, 24 Jul 2024 10:18:11 GMT`)

```javascript
let date = new Date("2024-07-24T10:18:11Z");

console.log(date.toDateString());

console.log(date.toISOString());

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

console.log(date.toTimeString());

console.log(date.toUTCString());

// Output

// Wed Jul 24 2024
// 2024-07-24T10:18:11.000Z
// 24/7/2024
// 3:48:11 pm
// 15:48:11 GMT+0530 (India Standard Time)
// Wed, 24 Jul 2024 10:18:11 GMT
```

### toLocaleString()

The toLocaleString() method returns the date and time as a string, using the current locale settings.

#### Optional Parameters for toLocaleString()

The toLocaleString() method takes an optional parameters object as a parameter. The options object can have the following properties:

**1. dateStyle** - The date style to use (full, long, medium, short)

**2. timeStyle** - The time style to use (full, long, medium, short)

**3. weekday** - Whether to include the weekday (true, false)

**4. year** - The year format to use (numeric, 2-digit)

**5. month** - The month format to use (numeric, 2-digit, long, short, narrow)

**6. day** - The day format to use (numeric, 2-digit)

**7. hour** - The hour format to use (numeric, 2-digit)

**8. minute** - The minute format to use (numeric, 2-digit)

**9. second** - The second format to use (numeric, 2-digit)

**10. timeZone** - The time zone to use (UTC, GMT)

```javascript
let date = new Date();

console.log(date.toLocaleString());

console.log(
  date.toLocaleString("en-US", { dateStyle: "full", timeStyle: "long" })
);

console.log(
  date.toLocaleString("en-GB", { dateStyle: "long", timeStyle: "medium" })
);

console.log(
  date.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })
);

console.log(
  date.toLocaleString("ta-IN", { dateStyle: "long", timeStyle: "short" }) // t
);

// 24/7/2024, 4:02:24 pm
// Wednesday, July 24, 2024 at 4:02:24 PM GMT+5:30
// 24 July 2024 at 16:02:24
// 24/07/24, 4:02:24 pm India Standard Time
// Wed
// 24 ஜூலை, 2024 அன்று பிற்பகல் 4:02
```

### Intl.DateTimeFormat()

The Intl.DateTimeFormat object is a built-in object that provides a way to format dates and times according to the user's locale.

The Intl.DateTimeFormat object takes two parameters: the locale and an options object. The options object can have the following properties:

```javascript
const formatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "full",
  timeStyle: "long",
});

const formatter2 = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "short",
  timeStyle: "short",
});

console.log(formatter.format(date)); // Wednesday 24 July, 2024 at 4:23:43 pm IST

console.log(formatter2.format(date)); // 24/07/24, 4:23 pm
```

> [!TIP]
>
> You can use the `toLocaleString` and `Intl.DateTimeFormat` methods to display a date in any format.
>
> ```javascript
> const formatter = new Intl.DateTimeFormat("en-IN", {
>   day: "2-digit",
>   month: "2-digit",
>   year: "numeric",
>   hour: "2-digit",
>   minute: "2-digit",
>   second: "2-digit",
>   weekday: "long",
>   timeZone: "IST",
> });
>
> console.log(formatter.format(date)); // Wednesday, 24/07/2024, 04:14:10 pm
>
> console.log(
>   new Date().toLocaleDateString("en-us", {
>     weekday: "long",
>     year: "numeric",
>     month: "short",
>     day: "numeric",
>     hour: "2-digit",
>     minute: "2-digit",
>     second: "2-digit",
>     timeZone: "IST",
>   }) // Wednesday, Jul 24, 2024, 04:14:10 PM
> );
> ```

### timeZoneOffset

The timeZoneOffset property returns the minutes difference between the UTC and the locale time.

```javascript
const date = new Date();

console.log(-date.getTimezoneOffset()); // 330 is the minutes time difference between UTC and IST
// negating the value to get the positive value

console.log(-date.getTimezoneOffset() / 60); // 5.5 is the hours time difference between UTC and IST
```

### Epoch Time

The epoch time is the number of milliseconds that have elapsed since January 1, 1970. You can get the epoch time using the getTime() method.

```javascript
// Epoch time in milliseconds
console.log(new Date().getTime()); // 1721889358760 ms

// Epoch time in seconds
console.log(Math.floor(new Date().getTime() / 1000)); // 1721889358 s

// Epoch time in minutes
console.log(Math.floor(new Date().getTime() / (1000 * 60))); // 28698155 mins

// Epoch time in days
console.log(Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24))); // 19929 days
```

### Date Comparison

You can compare two dates using the comparison operators. The comparison operators return true if the condition is true and false if the condition is false.

```javascript
const date1 = new Date("2024-07-24T10:18:11Z");

const date2 = new Date("2024-07-24T10:18:11Z");

console.log(date1 === date2); // false

if (date1.getTime() === date2.getTime()) {
  console.log("Dates are equal");
} else if (date1.getTime() > date2.getTime()) {
  console.log("Date1 is greater than Date2");
} else {
  console.log("Date1 is less than Date2");
}
```

### date-fns

`date-fns` is a third-party library that provides a set of functions for working with dates and times in JavaScript.

```javascript
import {
  format,
  addDays,
  subDays,
  isToday,
  isTomorrow,
  isYesterday,
  parseISO,
  parse,
  compareAsc,
} from "date-fns";

const date = new Date();

console.log(format(date, "yyyy-MM-dd")); // 2024-07-25

console.log(format(date, "yyyy-MM-dd HH:mm:ss")); // 2024-07-25 12:45:12

console.log(format(parseISO(date.toISOString()), "dd/MM/yyyy")); // 25/07/2024

console.log(format(addDays(date, 5), "dd/MM/yyyy")); // 30/07/2024

console.log(format(subDays(date, 2), "MM dd yyyy")); // 07 23 2024

console.log(isToday(date)); // true

console.log(isTomorrow(date)); // false

console.log(isYesterday(date)); // false

console.log(parse("2024-07-24", "yyyy-MM-dd", new Date())); // 2024-07-23T18:30:00.000Z

const dates = [
  new Date(2005, 6, 2),
  new Date(2018, 1, 11),
  new Date(2023, 6, 10),
];
dates.sort(compareAsc); // [ 2005-07-02T18:30:00.000Z, 2018-02-10T18:30:00.000Z, 2023-07-10T18:30:00.000Z ]
```

### Formatting Dates without 3rd party libraries

```javascript
function subtractDays(date, days) {
  const subDate = new Date(date);
  subDate.setDate(subDate.getDate() - days); // subtracting days
  return subDate;
}

function addDays(date, days) {
  const addDate = new Date(date);
  addDate.setDate(addDate.getDate() + days); // adding days
  return addDate;
}

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function isYesterday(date) {
  const yesterday = subtractDays(new Date(), 1);
  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
}

function isTomorrow(date) {
  const tomorrow = addDays(new Date(), 1);
  return (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  );
}

// function to format a date as "MM dd yyyy"
function formatDate(date) {
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const year = date.getFullYear();

  return `${month} ${day} ${year}`;
}

const date = new Date();
console.log(formatDate(subtractDays(date, 2))); // 07 23 2024
console.log(formatDate(addDays(date, 2))); // 07 27 2024
console.log(isToday(date)); // true
console.log(isYesterday(subtractDays(date, 2))); // false
console.log(isTomorrow(addDays(date, 1))); // true
```

> [!IMPORTANT]
>
> The above code demonstrate on custom date formatting without using any libraries.
>
> It includes functions to _**subtract days, add days, check if a date is today, yesterday, or tomorrow, and format a date**_ as "MM dd yyyy".
