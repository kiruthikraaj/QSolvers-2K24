function rev(str) {
    let arr = str.split('');
    let i = 0;
    let j = arr.length - 1;

    while(i<j)
        {
        if(! ((arr[i]>='0' && arr[i]<='9') || (arr[i]>='A' && arr[i]<='Z') || (arr[i]>='a'&& arr[i]<='z') )){
            i++;
        }
        else if(! ((arr[j]>='0' && arr[j]<='9') || (arr[j]>='A' && arr[j]<='Z') || (arr[j]>='a'&& arr[j]<='z') )){
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
