class User {									 
    constructor(name , age , weight , address , gender) {						 
        this.name = name; 
        this.age = age; 
        this.weight = weight; 
        this.address = address; 
        this.gender = gender; 
    } 
    printUser() { 
        return `User: { name: ${this.name}, age: ${this.age}, weight: ${this.weight}, address: ${this.address}, gender: ${this.gender} }`; 
    } 
    } 
    
    const user = new User('Abhishek' , 22 , 55 , 'India' , 'Male' ); 
    console.log(user.printUser());
    