function isalpha(char){
    return /^[a-zA-Z0-9]$/.test(char);
}

function rev(str) {
    let arr = str.split('');
    let i = 0;
    let j = arr.length - 1;

    while(i<j)
        {
        if(! (isalpha(arr[i]))){
            i++;
        }
        else if(! (isalpha(arr[j]))){
            j--;
        }
        else{
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return arr.join('')
}

let str = "A man, in the boat says; I see 1-2-3 in the sky";
str = rev(str);
console.log(str); 

// Time: O(n)
// Space: O(n)
