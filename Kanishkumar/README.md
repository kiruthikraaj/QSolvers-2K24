## <span style="color:skyblue">Garbage Collection</span>

- The garbage collector is responsible for reclaiming memory that is no longer in use. 

- It identifies objects that are no longer reachable and frees up their memory.

Allocate Memory -> Use Memory -> Release Memory

## <span style="color:skyblue">Role of Garbage Collector</span>

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


## <span style="color:tomato">Reachability of Object</span>

- JavaScript employs a reachability concept. 
- If an object is reachable through any existing reference, it will not be garbage collected.

        let user = {
        name: “Kanish”             // User has reference to object 
        };

        user = Null;               // No reference. Hence it is inaccessible


<span style="color:lightgreen">Advantage of Garbage Collection</span>


<br >

- One of the advantages of JavaScript’s garbage collection is automatic memory management. 

- Developers do not need to explicitly deallocate memory; the garbage collector handles it for us. 

- This reduces the chances of memory leaks and simplifies memory management.

- Improves performance.

---







