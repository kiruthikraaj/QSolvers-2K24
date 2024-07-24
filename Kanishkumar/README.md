## Garbage Collection

- The garbage collector is responsible for reclaiming memory that is no longer in use. 

- It identifies objects that are no longer reachable and frees up their memory.

Allocate Memory -> Use Memory -> Release Memory

## Role of Garbage Collector

- The garbage collector is responsible for reclaiming memory that is no longer in use. 
- It identifies objects that are no longer reachable and frees up their memory.


        let obj1 = { name: 'Kanish' };
        let obj2 = { name: 'Kumar' };

        obj1 = null;

<br>

> - In this code snippet, two objects, obj1 and obj2, are created on the heap. 
> - Initially, both objects are referenced. 
>
> However, when obj1 is set to null, it no longer references the object.
>
> At this point, the garbage collector identifies that there are no remaining references to > that object, making it eligible for garbage collection.
> - The garbage collector frees up the memory occupied by the object, making it available for future use.


## Reachability of Object

- JavaScript employs a reachability concept. 

>If an object is reachable from the root, it is considered reachable and is not >garbage collected.

- If an object is reachable through any existing reference, it will not be garbage collected.

        let user = {
        name: “Kanish”             // User has reference to object 
        };

        user = Null;               // No reference. Hence it is inaccessible


## Advantage of Garbage Collection


<br >

- One of the advantages of JavaScript’s garbage collection is automatic memory management. 

- Developers do not need to explicitly deallocate memory; the garbage collector handles it for us. 

- This reduces the chances of memory leaks and simplifies memory management.

- Improves performance.

---
<br >

Garbage Collection in JavaScript works by tracking references to objects in memory and removing objects that are no longer referenced by the application.

### 1. Reference Counting Algorithm
### 2. Mark Sweep Algorithm

---


## 1. Reference Counting Algorithm

- In this method, the program keeps track of the number of references to each object or variable. 
- When an object or variable is no longer being used, its reference count drops to zero, and enables the garbage collector to safely remove it from memory.


| Case | Description                                                       |
|------|-------------------------------------------------------------------|
| 1    | Create object; set reference count to 1.                          |
| 2    | Increment count when referenced by another object.                |
| 3    | Decrement count when dereferenced.                                |
| 4    | Collect object when count reaches 0.                              |


> ⚠️ If reference count is 0, garbage collector will remove the object or variable.

        let test1 = "Sample text";

        test1 = 2;

        // Reference count of "Sample text" is now 0, and it can be garbage collected. Since test1 is updated and "String text" is no longer referenced.

Another example:

        let Obj = { key : 10 , key1 : 20 };
        Obj.key = 30;

        // Here key: 10 is no longer referenced, but still the refernece value for Obj is not 0. Hence, it wont get removed by garbage collector.
<br>

But , 

        let Obj = { key : 10 , key1 : 20 };
        Obj = 30;

        // This case will remove the Object which is no longer referenced. 

<br >

>*Limitation:*
>
> - It cannot detect `cyclic references`, where two or more objects   reference each other in a loop. <br>
>
>        function demo(){
>        let Obj1 = {}
>        let Obj2 = {}
>
>        // circular reference
>
>        Obj1.key = Obj2;        
>        Obj2.key = Obj1;
>        return "Hello";
>       } 
>
>       demo();
>

## Advantages Of Reference Counting:

- It can reclaim memory as soon as it becomes unreachable, without waiting for a garbage collection cycle

- Can be faster than mark-and-sweep for programs that create and destroy numerous small objects frequently. 

## Disadvantages Reference Counting:

- Reference Counting cannot handle cyclic references as it can’t determine whether an object is no longer used, when it is referenced in a loop. 

- Can result in memory leaks if the reference counts are not managed appropriately. 

---

Strong Reference:
        
- Strong reference prevent an object from being garbage-collected.

Weak Reference:

- weak reference doesn't prevent an object from being garbage-collected.

![alt text](image.png)


>WeakMap and WeakSet:
>
>WeakMap and WeakSet are special data structures in JavaScript that allow >objects to be weakly referenced.

## 2. Mark and Sweep Algorithm:

-  The mark-and-sweep algorithm works by starting with a set of “roots” (typically the global object). 

- The algorithm then recursively traverses the object graph, marking all objects and variables that are still in use.

- Once all live objects and variables have been marked, the garbage collector then safely removes any objects and variables that have not been marked, as they are no longer required.

- The Reachable objects are marked, Rest are sweeped.

>        function demo(){
>        let Obj1 = {}
>        let Obj2 = {}
>
>        // circular reference
>
>        Obj1.key = Obj2;        
>        Obj2.key = Obj1;
>        return "Hello";
>       } 
>
>       demo();

Here, once the function gets executed, the function is not used again. Hence, they are no longer reachable objects. (Not reachable after function execution).

Now, the garbage collector will remove these from memory.


Consider the case,
Here both obj1 and obj2 are reachable even after function execution. Hence they will be marked and not sweeped.

        let globalRef; // Global reference

        function demo() {
        let obj1 = {};     // Object 1
        let obj2 = {};     // Object 2

        obj1.ref = obj2;   // Circular reference
        obj2.ref = obj1;   // Circular reference

        globalRef = obj1;  // Make obj1 reachable globally
        }

        demo();

        // obj1 and obj2 are reachable via globalRef
        console.log(globalRef);        
        console.log(globalRef.ref);   


### Best Practices:

 Best practices to optimize JavaScript garbage collection performance, such as 

- Avoiding circular references
- Minimizing the use of global variables 
- Using the delete keyword to remove properties from objects. 

`Object Pooling:`

- For frequently created and destroyed objects, consider implementing object pooling. 

- Object pooling reuses existing objects instead of creating new ones, reducing memory allocation and garbage collection overhead.



## Which algorithm is suitable?

In general, Mark-and-sweep is considered to be a more robust and flexible technique than reference counting.

- `Mark-Sweep Algorithm` is better suited for applications with large object graphs.

- It can handle circular references, but can cause noticeable pauses during garbage collection. 

- `Reference Counting` is faster and more efficient for smaller applications.
- It cannot handle circular references and this can lead to memory leaks.



- **Garbage Collection Triggers**:


  - **Automatic**: Periodically or when memory pressure is detected.


  - **Explicit Cleanup**: Developers can set unused references to `null` or `undefined`.



>Reference:
>
> https://www.calibraint.com/blog/garbage-collection-in-javascript#:~:text=JavaScript%20relies%20on%20a%20mechanism,in%20dynamically%20managing%20the%20memory.

## Generational Garbage Collection:

- Generational garbage collection is a technique used by many modern JavaScript engines to manage memory more efficiently. 

- The core idea is to divide objects into different generations based on their lifespan and collect garbage more frequently from the younger generation.

`Young Generation:`

 - This includes objects that have been recently created. 

 - The garbage collector assumes that most objects in this generation are short-lived.

`Old Generation:` 

- This consists of objects that have survived several garbage collection cycles in the young generation. 

- These objects are assumed to be long-lived.


---

### Memory Management

Memory management refers to the process of allocating, utilizing, and releasing memory resources in a computer system. 

### Lifecycle of Memory:

The memory life cycle follows the following stages:

<p style="border: 2px solid white; padding: 10px;">
Allocates the memory &rarr; Use the allocated memory &rarr; Release the memory
</p>


`1. Allocates the memory`: 

JavaScript allocates memory to the object created.

`2. Use the allocated memory.`

`3. Release the memory when not in use: `

Once the allocated memory is released, it is used for other purposes. It is handled by a JavaScript engine.

## Memory Allocation

## Stack vs. Heap

- **Stack**:

  - Used for static memory allocation (e.g., function call frames, local variables).
  - Fast and follows a Last-In-First-Out (LIFO) order.

- **Heap**:
  - Used for dynamic memory allocation (e.g., objects and arrays).
  - More flexible but involves complex memory management.


        Why are functions stored in the heap while local variables and parameters are kept on the stack in JavaScript?

        - Functions are stored in the heap because they need to be accessible throughout the program, even after they are created. 

        - Local variables and parameters are kept on the stack because they are only needed while the function is running and can be discarded once the function finishes.
---

# Memory Leaks

- A situation where memory is not released properly, causing a program to consume more memory over time and potentially leading to performance degradation or crashes.

## Common Causes of Memory Leaks

1. **Global Variables**

   - Storing data in global variables can lead to memory leaks if the variables are not cleaned up.

   - Assign global variables to `null` when no longer needed.

   ```javascript
   let globalVar = "20";

   // Clean up
   globalVar = null;


2. **Remove Timers and Callbacks**

- Timers (setInterval, setTimeout) and callbacks that are not cleared can cause memory leaks, especially in Single Page Applications (SPAs).

        clearInterval(timerId); // clear them

3. **Remove Event Listeners**

-  Event listeners that are not removed can accumulate and cause memory leaks.

        element.removeEventListener('click', onClick);


---
