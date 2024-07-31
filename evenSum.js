// write a program to find the sum of even numbers
// let doc = { a: 1, b:{ c: 2, d: 6}, e: 4, f:{ g: 5, h:{ j: 6, k: 8}}, i: 9, j:10}

function evenSum(doc){
    let sum = 0

    for (let x in doc){
        if(typeof doc[x] === 'number'){
            if(doc[x]%2 === 0){
                sum +=doc[x]
            }
        }
        else{
            sum += evenSum(doc[x])
        }
    }
    return sum;
    }

let doc = {a: 1, 
           b:{ c: 2, d: 6}, 
           e: 4, 
           f:{ g: 5, h:{ j: 6, k: 8}}, 
           i: 9, 
           j:10
        }

console.log(evenSum(doc))