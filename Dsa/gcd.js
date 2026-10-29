// const Gcd = (a,b)=>{
//     while(b>0){
//         let temp =b
//         b = a%b
//         a = temp
//     }
//     return a;
// }
// console.log(Gcd(12,45))

// function countDigits(num){
//     let count = 0
//     while(num>0){
//         num = Math.floor(num/10);
//         count++
//     }
//     return count;
// }
// console.log(countDigits(3454645))



// arr is shorted
// function issorted(arr){
//     for(let i=0;i<arr.length-1;i++){
//           if(arr[i]>arr[i+1]){
//               return "unsorted";
//         }
//     }
//     return "sorted";
// }
// console.log(issorted([2,4,16,9]))

// reverse 
// function reverse(arr){
//     let j = arr.length-1
//     for(let i=0;i<arr.length/2;i++){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j--
//     }
//     return arr
// }
// console.log(reverse([1,7,3,4,5,3]))
 
//max or add in string

    // let str = "3487589759"
    // let arr =  str.split('')
    // let max = arr[0]
    // for(let i=0; i<arr.length;i++){
    //     if(arr[i]%2!=0){
    //         if(arr[i]>max){
    //             max=arr[i]
    //         }
    //     }
    // }
    // console.log(max)


// move zero to end
// function moveZero(arr){
//     let j=1
//     for( let i=0;i<arr.length;i++){
//         if(j>=arr.length){
//             return arr
//         }
//         if(arr[i]==0){
//             if(arr[j]!=0){
//                 let temp = arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }else{
//                 i--;
//             }
//         }
//         j++
//     }
//     return arr
// }
// console.log(moveZero([0,0,0,2,3,4,5,0,0,]))



//interesection of two array
// let arr1 =[1,2,4,5,7,8,9]
// let arr2 = [2,3,4,7,9,4]
// let arr3 = []
// for(let i=0;i<arr1.length;i++){
//     if(arr2.includes(arr1[i])){
//         arr3.push(arr1[i])
//     }
// }
// console.log (arr3)

// union of two array

// let arr1 = [1,3,4,5,7,8,]
// let arr2 = [4,5,7,8,9,2]
// let arr3 = []

// arr1.forEach((item)=>{
//     if(!arr3.includes(item)){
//         arr3.push(item)
//     }
// })
// arr2.forEach((item)=>{
//     if(!arr3.includes(item)){
//         arr3.push(item)
//     }
// })
// console.log(arr3)





//rearrange of array

// let arr = [3,4,6,8,-4,-5,8,-5,2,-7,-7,-8]
// let j = 1
// for(let i=0;i<arr.length;i++){
//      if(i%2==0){
//         if(arr[i]<0 && arr[j]>0){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp  
//         }else{
//             i--;
//         }  
//     }else{
//         if(arr[i]>0 && arr[j]<0){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }else{
//             i--;
//         }
//     }
//     j++;
// }
// console.log(arr)


// let arr  = [2,3,4,5,6,-4,-6,-7,-8,-3]
// let pos = []
// let neg =[]
// let result =[]

// for(i=0;i<arr.length;i++){
//     if (arr[i]>0){
//         pos.push(arr[i])
//     }
//     else{
//         neg.push(arr[i])
//     }
// }

// for (i=0;i<pos.length;i++){
//     result.push(pos[i])
//     result.push(neg[i])
// }

// console.log(result)