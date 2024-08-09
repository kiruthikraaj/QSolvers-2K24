class User {									 
    constructor(name) {						 
        this.name = name; 
        this.age = null; 
        this.weight = null; 
        this.address = null; 
        this.gender = null; 
    } 
    
}

class userbuilder{
    constructor(name){
        this.user = new User(name);
    }
    setAge(age) {								 
        this.user.age = age; 
        return this; 
        } 
        
    
    setWeight(weight) {						 
        this.user.weight = weight; 
        return this; 
    } 
    
  
    setAddress(address) { 
        this.user.address = address; 
        return this; 
    } 
   
    setGender(gender) { 
        this.user.gender = gender; 
        return this; 
    } 
    
   
    build() { 
        if (!this.user.name) { 
        throw Error('Name is required'); 
        } 
        return this; 
    } 

}
     
    
    
    const userinfo = new userbuilder('Cliff').setAge(50).setAddress('Hollywood Hills').setGender('Male').setWeight(70).build();
    
    console.log(userinfo);
    