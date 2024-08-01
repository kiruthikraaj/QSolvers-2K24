
// // class Person{
// //     constructor(name, age){
// //         this.name = name,
// //         this.age = age
// //     }

// //     display(){
// //         console.log(this.name+" is "+this.age + " years old")
// //     }
// // }

// // let p1 = new Person("kanish", 22)
// // p1.display()

// // class Animal{
// //     constructor(name){
// //         this.name = name
// //     }

// //     speak(){
// //         console.log(this.name + " makes a sound")
// //     }
// // }

// // class Cat extends Animal{
// //     constructor(name, color){
// //         super(name)
// //         this.color = color
// //     }

// //     speak(){
// //         console.log(this.name , this.color)
// //     }
// // }

// // let cat1 = new Cat("Orange car", "Orange")
// // cat1.speak()

// // class Math{
// //     static Pi(){
// //         return 22/7
// //     }
// // }
// // console.log(Math.Pi())

// // class Person{
// //  #age;

// //     constructor(name, age){
// //         this.name = name;
// //         this.#age = age
// //     }

// //     display(){
// //         console.log(this.name+" is "+this.#age + " years old")
// //     }


// // }

// // var p1 = new Person("Kanish", 22)
// // p1.display()

// // class Person{
// //     #name;

// //     constructor(name){
// //         this.#name = name
// //     }

// //     get name(){
// //         return this.#name
// //     }

// //     set name(name){
// //         if(typeof name === 'string'){
// //             this.#name = name
// //         }
// //         else{
// //             console.error("Invalid name")
// //         }
// //     }
// // }


// // let p1 = new Person("Kanish")
// // p1.name = 'Akash'
// // console.log(p1.name) 


// class Animal{
//     constructor(name){
//         this.name = name
// }

// display(){
//     console.log(this.name + " is an animal")
// }
// }

// class Dog extends Animal{
//     constructor(name, breed){
//         super(name)
//         this.breed = breed
// }
// info1(){
//     console.log(this.name + " is a " + this.breed + " dog")
// }
// }

// class Cat extends Animal{
//     constructor(name, color){
//         super(name)
//         this.color = color
// }

// info2(){
//     console.log(this.name + " is a " + this.color + " cat")
// }
// }


// p1 = new Cat("Cat","orange")
// p1.display()
// p1.info2()

// p2 = new Dog("Dog","labrador")
// p2.display()
// p2.info1()


 