// function range(a,b){

//     if(a>=b){
//         return []
//     }

//     else{
//         return [a].concat(range(a+1,b))
//     }
// }

// console.log(range(2,8)) //2,8 output 3 4 5  6 7  


// function reverseString(str){
//     if(str == ''){
//             return str;
//     }
//     else{
//             return reverseString(str.substr(1))+ str.charAt(0);
//     }
//     }

//     console.log(reverseString('Hello'))

// function sum(arr){
//     if(arr.length==1){
//         return arr[0];
//     }

//     else{
//         return arr.pop() + sum(arr);
//     }

// }
// arr = [1,2,3,4,5]
// console.log(sum(arr))

// const arr = [1,2,3,4,5,6,7]

// arr.splice(2, 5, 8,9,10,11,12)

// console.log(arr)
// console.log(arr.filter(x => x>5))


// const arr = [1,2,3,4,5]
// console.log(arr.map(x => x*x*x))


// function gcd(a,b){
//     if(b==0){
//         return a;
//     }
//     else{
//         return gcd(b, a%b)
//     }
// }

// console.log(gcd(120, 200))

// function isPrime(num){
//     if(num<=1){
//         return "Not prime";
//     }

//     else{
//         for (i=2; i< Math.sqrt(num); i++){
//             if(num%i == 0){
//                 return "Not prime";
//             }
//         }
//     }
//     return "Prime";
// }

// console.log(isPrime(97))


// arr = [1,2,3,4,5]

// function arrsum(arr){
//     return arr.reduce((sum , curr) => sum+curr, 0)
// }

// console.log(arrsum(arr))

// !function(a,b){
//     console.log(a+b)
// }(2,3);

// for(i=0; i<10; i++){
//     console.log(Math.random())
// }


// console.log("Hi")

// setTimeout(() => {
// console.log("Hi")
// }, 3000)

// console.log("Bye")


// arr = [1,2,3,4,5,6]

// arr.splice(2,  0,0,0,0)

// console.log(arr)


// function one(){
//     console.log("one");

//     function two(){
//         console.log("two");
//     }
//     two();
// }

// one();


// function one(){
//     setTimeout(() => {
//         console.log("One");
//     }, 4000);
//     function two(){
//         console.log("two");
//     }
//     two();
// }

// one();


// function myDisplayer(){
//     console.log()
// }

// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   mySecond();
//   myFirst();

// function display(name, callback){
//     callback();
//     console.log(name);
// }

// function callme(){
//     console.log("Hello")
// }

// display('Kanish', callme)

//  program that shows the delay in execution

// context = {
//     greet : 'Welcome'
// }

// function display(name, callback) { // function
//     callback();
//     console.log(name);
//   }
  
//   function callMe() { // callback function
//     console.log(this.greet);
//   }

//   const bound = callMe.bind(context)
  
//   display('Kanish', bound); // function call
  

// function firstFunction(callback){
//     setTimeout(() => {
//         console.log("First function");
//         callback();
//     }, 1000);
// }

// function secondFunction(callback){
//     setTimeout(() => {
//         console.log("Second Function");
//         callback();
//     }, 1000);
// }

// function thirdFunction(callback){
//     setTimeout(() => {
//         console.log("Third function");
//         callback();    
//     }, 1000);
// }

// function fourthFunction(callback){
//     setTimeout(() => {
//         console.log("Fourth Function");
//         callback();
//     }, 1000);
// }


// firstFunction(() =>{
//     secondFunction(() => {
//         thirdFunction(() => {
//             fourthFunction(() => {
//                 setTimeout(() => {
//                     console.log("Done");
//                 }, 1000);
//             })
//         })
//     })
// })

// let count = 0

// let countVar = new Promise(function(resolve, reject){
    
//     if(count === 0){
//         resolve(count);
//     }
//     else{
//         reject("Error");
//     }
// })

// countVar
// .then(function(){
//     setTimeout(() => {
//         console.log(count+1)     
//     }, 1000);
//     return count;
// })

// .then(function(){
//     setTimeout(() => {
//         console.log(count+2)    
//     }, 2000);
//     return count;
// })

// .then(function(){
//     setTimeout(() => {
//         console.log(count+3)      
//     }, 3000);
//     return count;
// })

// .then(function(){
//     setTimeout(() => {
//         console.log(count+4)
//     }, 4000);
//     return count;
// })

// .catch(function(){
//     console.log("Error");
// })

// function promise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = Math.random() > 0.5; // Randomly decide success or failure
//         if (success) {
//           resolve("Promise is resolved");
//         } else {
//           reject("Promise is rejected");
//         }
//       }, 1000);
//     });
//   }
  
//   promise()
//     .then((result) => {
//       console.log(result); // Promise is resolved
//     })
//     .catch((error) => {
//       console.error(error); // Promise is rejected
//     });
 

// function promise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const rand = Math.random();
  
//         if (rand > 0.5) {
//           resolve("Success");
//         } else {
//           reject("Fail");
//         }
//       }, 1000);
//     });
//   }
  
//   promise()
//     .then(function(result) {
//       console.log(result); // Success
//     })
//     .catch(function(error) {
//       console.error(error); // Fail
//     });
  


// p1 = Promise.reject(50);
// p2 = 200
// p3 = new Promise(function(resolve, reject) {
// 	setTimeout(reject, 100, 'geek');
// });

// Promise.race([p1, p2, p3]).then(function (values) {
// 	console.log(values);
// });
// const Promise = require('bluebird')

// const resolved = Promise.resolve("Resolved")

// resolved .then( value => {
//     console.log(value)
// })

// const Promise1 = require('bluebird')

// const rejected = Promise1.reject("Rejected")

// rejected .then( value => {
//     console.log(value)
// })


