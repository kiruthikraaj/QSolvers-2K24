const x = 10;

function one(){
        const y = 20;

        function two(){
                console.log(x); // searches for x in current scope -> parent scope -> global scope
                console.log(y); // finds y in parent scope
            }

        two();
}

one();
