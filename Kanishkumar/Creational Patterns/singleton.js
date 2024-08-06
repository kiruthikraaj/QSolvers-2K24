class Singleton {
    constructor() {
        if(Singleton.instance){
            return Singleton.instance
        }
        this.value = 5
        Singleton.instance = this

    }
    getValue(){
        return this.value
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); 
console.log(instance1.getValue()); 
