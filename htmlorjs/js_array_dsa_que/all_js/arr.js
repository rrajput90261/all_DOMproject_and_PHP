arr = [3,5,7,8,11,21,14]
function twosum(arr,res){
for(i=0;i<=arr.length; i++){
    for(j=i+1;j<=arr.length;j++){
        if(arr[i]+arr[j]==res){
            return [i,j]
        }
    }
}
}

console.log(twosum(arr,17))