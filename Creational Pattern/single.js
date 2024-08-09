class Singleton {
    
    static #instance;

    constructor() {
        if (Singleton.#instance) {
            throw new Error("Singleton instance already exists. Use getInstance method.");
        }
  
        this.data = Math.random(); 
    }

    static getInstance() {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance;
    }
}

try {
    const singletonInstance1 = Singleton.getInstance();
    console.log(singletonInstance1);
    const singletonInstance2 = new Singleton(); 
} catch (error) {
    console.error(error.message); 
}
