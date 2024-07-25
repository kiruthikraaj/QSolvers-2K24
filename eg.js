// // let date = new Date();

// // console.log(date);

// // // Create a new date object with a specific date and time

// // console.log(new Date("7"));

// // // Create a new date object with milliseconds

// // console.log(new Date(0));

// // // Create a new date object with a date string

// // console.log(new Date("2024-07-24T03:15:30Z"));

// // console.log(date.getDate());

// // console.log(date.getDay());

// // console.log(date.getFullYear());

// // console.log(date.getHours());

// // console.log(date.getMilliseconds());

// // console.log(date.getMinutes());

// // console.log(date.getMonth());

// // console.log(date.getSeconds());

// // console.log(date.getTime());

// // console.log(date.toString());

// let date = new Date("2024-07-24T10:18:11Z");

// console.log(date.toDateString());

// console.log(date.toISOString());

// console.log(date.toLocaleDateString());

// console.log(date.toLocaleTimeString());

// console.log(date.toTimeString());

// console.log(date.toUTCString());

// console.log(new Date().getTimezoneOffset());

// let date = new Date();

// console.log(date.toLocaleString());

// console.log(
//   date.toLocaleString("en-US", { dateStyle: "full", timeStyle: "long" })
// );

// console.log(
//   date.toLocaleString("en-GB", { dateStyle: "long", timeStyle: "medium" })
// );

// console.log(
//   date.toLocaleString("en-IN", { dateStyle: "short", timeStyle: "full" })
// );

// console.log(
//   date.toLocaleString("en-IN", {
//     weekday: "short",
//   })
// );

// console.log(
//   date.toLocaleString("ta-IN", { dateStyle: "long", timeStyle: "short" }) // t
// );

// const formatter = new Intl.DateTimeFormat("en-IN", {
//   day: "2-digit",
//   month: "2-digit",
//   year: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   weekday: "long",
//   timeZone: "IST",
// });

// console.log(formatter.format(date));

// console.log(
//   new Date().toLocaleDateString("en-us", {
//     weekday: "long",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     timeZone: "IST",
//   })
// );

// const formatter = new Intl.DateTimeFormat("en-IN", {
//   dateStyle: "full",
//   timeStyle: "long",
// });

// const formatter2 = new Intl.DateTimeFormat("en-IN", {
//   dateStyle: "short",
//   timeStyle: "short",
// });

// console.log(formatter.format(date));

// console.log(formatter2.format(date));

// const date = new Date();

// console.log(-date.getTimezoneOffset() / 1000);

// import {
//   format,
//   addDays,
//   subDays,
//   isToday,
//   isTomorrow,
//   isYesterday,
//   parseISO,
//   parse,
//   compareAsc,
// } from "date-fns";

// const dates = [
//   new Date(2005, 6, 2),
//   new Date(2018, 1, 11),
//   new Date(2023, 6, 10),
// ];
// dates.sort(compareAsc);

// console.log(dates);

// console.log(format(date, "yyyy-MM-dd"));

// console.log(format(date, "yyyy-MM-dd HH:mm:ss"));

// console.log(format(parseISO(date.toISOString()), "dd/MM/yyyy"));

// console.log(format(addDays(date, 5), "dd/MM/yyyy"));

// console.log(format(subDays(date, 2), "MM dd yyyy"));

// console.log(isToday(date));

// console.log(isTomorrow(date));

// console.log(isYesterday(date));

// console.log(parse("2024-07-24", "yyyy-MM-dd", new Date()));

// function subtractDays(date, days) {
//   const subDate = new Date(date);
//   subDate.setDate(subDate.getDate() - days); // subtracting days
//   return subDate;
// }

// function addDays(date, days) {
//   const addDate = new Date(date);
//   addDate.setDate(addDate.getDate() + days); // adding days
//   return addDate;
// }

// function isToday(date) {
//   const today = new Date();
//   return (
//     date.getDate() === today.getDate() &&
//     date.getMonth() === today.getMonth() &&
//     date.getFullYear() === today.getFullYear()
//   );
// }

// function isYesterday(date) {
//   const yesterday = subtractDays(new Date(), 1);
//   return (
//     date.getDate() === yesterday.getDate() &&
//     date.getMonth() === yesterday.getMonth() &&
//     date.getFullYear() === yesterday.getFullYear()
//   );
// }

// function compareAsc(date1, date2) {
//   if (date1 > date2) {
//     return 1;
//   } else if (date1 < date2) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function isTomorrow(date) {
//   const tomorrow = addDays(new Date(), 1);
//   return (
//     date.getDate() === tomorrow.getDate() &&
//     date.getMonth() === tomorrow.getMonth() &&
//     date.getFullYear() === tomorrow.getFullYear()
//   );
// }

// // function to format a date as "MM dd yyyy"
// function formatDate(date) {
//   const month = ("0" + (date.getMonth() + 1)).slice(-2);
//   const day = ("0" + date.getDate()).slice(-2);
//   const year = date.getFullYear();

//   return `${month} ${day} ${year}`;
// }

// const date = new Date();
// console.log(formatDate(subtractDays(date, 2)));
// console.log(formatDate(addDays(date, 2)));
// console.log(isToday(date));
// console.log(isYesterday(subtractDays(date, 2)));
// console.log(isTomorrow(addDays(date, 1)));

const date = new Date(); // Current date and time
console.log(
  "Local Time:",
  date.toLocaleString("en-US", { dateStyle: "full", timeStyle: "full" })
); // Local time with time zone info
console.log("UTC Time:", date.toUTCString()); // UTC time
