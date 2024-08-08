arr = [10,7,9,3,2,1,15]
n = arr.length

arr2=[]
for(i=0; i<n; i++){
    flag =0
    for(j=i+1; j<n; j++){
        if(arr[i] > arr[j]){
            arr2.push(arr[j]);
            flag=1
            break;
        }
    }
    if(!flag){
        arr2.push(-1)
    }

}

console.log(arr2)

// time: O(n^2) x O(n)
// space: O(n)
