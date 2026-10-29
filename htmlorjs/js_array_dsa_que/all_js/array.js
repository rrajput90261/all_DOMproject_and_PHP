// function biggestDifference(arr){
//     let max = arr[0];
//     let min = arr[0];
    
//     for(let i=1; i< arr.length;i++){
//         if(arr[i]>max)
//             max = arr[i]
//         if(arr[i]<min)
//             min = arr[i]
//     }

//         return max-min
// }
// console.log(biggestDifference([10,3,25,7,15]))



// function secondLargest(arr){
//     let max = arr[0]
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>max)
//             max = arr[i]-arr[i-1]
        
//     }
//     return max
// }
// console.log(secondLargest([10,5,20,8,15]));

// 5 movezero
    // let arr =[1,0,0,2,0,3]
    // let j = 0;
    // for(let i=0; i<arr.length;i++){
    //     if(j>=arr.length)
    //         return
    //     if(arr[i]==0){
    //         if(arr[j]!==0){
    //             Swap()
    //         }
    //         else{
    //             i--
    //         }
    //         j++
    //     }
    // }

    // or
    function removeZero(arr){
        let arr2=[]
        for(let i=0;i<arr.length;i++){
            if(arr[i]!=0){
                arr.push(arr[i])
            }
        }
        let a=arr.length-arr2.length
        for(let i=0; i<0;i++){
            arr2.push(0)
        }
        return arr2
    }
    console.log(removeZero([0,1,0,3,12,0]))