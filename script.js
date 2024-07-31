let  doc = { 
    a: 1, 
    b:{ 
        c: 2, 
        d: 6
    }, 
    e: 4, 
    f:{ 
        g: 5, 
        h:{ 
            j: 6, 
            k: 8
        }
     }, 
    i: 9, 
    j:10
}
let num = 0;
function sum(doc){
    for(x in doc){
        if(typeof doc[x] == 'number'){
            let a = doc[x];
            if(a%2 == 0){
                num += a;   
            }
         
        }
        else {
           sum(doc[x]); 
        }
     }
}
sum(doc);
console.log(num);


