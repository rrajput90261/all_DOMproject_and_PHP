//count digits in a number
// function countdigit(num){
//     let count =0
//     while(num>0){
//         num= Math.floor(num/10)
//         count++
//     }
//     return count

import { cursorTo } from "node:readline"

// }
// console.log(countdigit(93438753409))

//count odd number
// function countdigit(num){
//     let count =0
//     while(num>0){
//         let rem = num%2
//         if(rem%2!==0)
//             count++

        
//         num= Math.floor(num/10)
        
//     }
//     return count

// }
// console.log(countdigit(93438))

//count even number in string
// function countdigit(str){
//     let count =0
//     while(str>0){
//         let rem = str%2
//         if(rem%2==0)
//             count++

        
//         str= Math.floor(str/10)
        
//     }
//     return count

// }
// console.log(countdigit("93438"))

//number even in arr
// function countdigit(arr){
//     let count =0
//     while(arr>0){
//         let rem = arr%2
//         if(rem%2==0)
//             count++

        
//         arr= Math.floor(arr/10)
        
//     }
//     return count

// }
// console.log(countdigit([93438]))


//reverse a number
// function reversenumber(num){
//     let rev = 0
//     while(num>0){
//         let rem = num%10
//        rev = rev*10+rem
//         num = Math.floor(num/10)


//     }
//     return rev
// }
// console.log(reversenumber(3657658678))

//reverse a string
// function reverstring(str){
//     let rev = ""
//    for(let i = str.length-1 ; i>=0;i--){
//     rev = rev+str[i]
//    }
//    return rev
// }
// console.log(reverstring("ritu"))

// frequance string
// function string(){
//     let freq={};
//     for(let i=0;i<string.length;i++){
//         if(!freq[str[i]]){
//             freq[str[i]]=1;
//         }
//         else{
//             freq[str[i]]++; // {t:1,r:2,e:2}
//         }
//     }
//     let arr=[]
//     arr = Object.keys(freq).short((a,b)=>freq[b]-freq[a]|| a.charCodeAt(0) - b.charCodeAt(0))
//     return arr;
// }
//     console.log(string('terrrr'))


//lagest common prefix

// function commonprefix(arr){
//    let i=0
//    let ans=""
//    let word = arr[0]
//    while(i<word.length){
//     ch=word[i]
//     for(j=1;j<arr.length;j++){
//         if(arr[j][i]!=ch){
//             return ans
//         }
//     }
//     ans += ch
//     i++
//    }
//    return ans
// }
// console.log(commonprefix(["pari","pariyanshi","palak","palvi","paridhi"]))

//revers string
// function resversting(str){
//     let rev = ""
//     for (let i=str.length-1;i>=0;i--){
//         rev = rev+str[i]
//     }
//     return rev
// }
// console.log(resversting('ritu'))

//GCD
// function gcd(a,b){
//     while(b>0){
//         let temp = b
//         b=a%b
//         a=temp
//     }
//     return a
// }
// console.log(gcd(2,6))


//lcm of two number
// function lcm(a,b){
//     let gcd = (a,b)=>{
//         while(b>0){
//             let temp=b
//             b=a%b
//             a=temp
//         }
//         return a
//     }
//     return Math.abs(a*b)/gcd(a,b)
// }
// console.log(lcm(12,25))

//difference in two elements
// function ismorphicstr(a,z){
//     if(a.length!=z.length){
//         return false
//     }
//     let diff = a.charCodeAt(0)-z.charCodeAt(0)
//     for(let i =1;i<a.length;i++){
//         if(a.charCodeAt(i)-z.charCodeAt(i)!=diff){
//             return false
//         }
//     }
//     return true
// }
// console.log(ismorphicstr('abc','pqr'))

//sum of all digit
// function allsum(num){
//     sum = 0
//     while(num>0){
//         sum += num%10
//         num = Math.floor(num/10)

//     }
//     return sum
// }
// console.log(allsum(204573409680))

//rotate a string by k to left
// function rotate(s,k){
//     let ans = ""
//     for(let i= s.length-k;i<s.length;i++){
//         ans+=s[i]
//     }
//     for( i=0;i<s.length-k;i++){
//         ans+=s[i]
//     }
//     return ans
// }
// console.log(rotate("priyanshi",2))

//anargam string
// function anargam(elm1,elm2){
//     if(elm1.length!=elm2.length){
//         return false
//     }
//     return elm1.split("").sort().join()==elm2.split("").sort().join()
// }
// console.log(anargam("dog","god"))

//linearsearch
// function linearsearch(arr,targat){
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===targat){
//         return i
//     }
// }
// console.log("not found")
// }
// console.log(linearsearch([2,3,5,65,7,6,8,9],7))

//maximum consiutive ones(max element in arr)
// function consecutive(arr){
//     let count = 0
//     let max = 0
//     arr.forEach(el => {
//         if(el===5){
//             count++
//             max = Math.max(count,max)
//         }
//         else{
//             count=0
//         }
        
//     });
//     return max
// }
// console.log(consecutive([1,2,3,4,1,1,1,1,5,5,5,5,5]))

//move zero to end
// function movezero(arr){
//   let j=1
//   for(let i=0;i<arr.length;i++){
//     if(j>=arr.length){
//         return arr
//     }
//     if(arr[i]==0){
//         if(arr[j]!=0){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//         else{
//             i--
//         }
//     }
//     j++
//   }
//   return arr
// }
// console.log(movezero([0,0,0,2,3,4,5,5,0,0]))

//remove duplicate from sorted arr
// function removeduplicate(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==arr[i+1]){
//             arr.splice(i,2)
//             i--
//         }
//     }
//     return arr
// }
// console.log(removeduplicate([1,1,1,1,2,2,3,5,5,6,7,8,7,7,]))

//majority element
// function majorityelememt(arr){
    
// let curMaj = null
// let majCnt = 0
// for(const n of arr){
//     if(curMaj===null||majCnt===0){
//         curMaj=n
//     }
//     if(n===curMaj){
//         majCnt++
//     }
//     else{
//         majCnt--
//     }
// }
// return curMaj
// }
// console.log(majorityelememt([1,1,1,1,2,3,4,5]))

//three sum
// function threeSum(nums){
//  let ans = [];
//   let i = 0;
//   let left = i + 1,
//     right = nums.length - 1;
//   nums = nums.sort();
//   while (i < nums.length - 2) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       i++;
//       continue;
//     }

//     while (left < right) {
//       if (
//         nums[left] + nums[right] == -nums[i] &&
//         !ans.some(
//           (triplet) =>
//             triplet[0] === nums[i] &&
//             triplet[1] === nums[left] &&
//             triplet[2] === nums[right],
//         )
//       ) {
//         ans.push([nums[i], nums[left], nums[right]]);
//         left++;
//         right--;
//       } else if (nums[left] + nums[right] > -nums[i]) {
//         right--;
//       } else {
//         left++;
//       }
//     }
//     i++;
//     left = i + 1;
//     right = nums.length - 1;
//   }

//   return ans;
// }
                 
                 //or
// let ans = []
// let i = 0
// let j = 0
// let k = 0
// nums = nums.sort()
// for(i=0;i<nums.length-2;i++){
//     if( i>0 && nums[i]===nums[i-1])
//         continue
//     for(j=i+1;j<nums.length-1;i++){
//         if(j>i+1 && nums[j]===nums[j-1])
//             continue
//         for(k = j+1;k<nums.length;k++){
//             if(k> j+1 && nums[k]===nums[k-1])
//                 continue
//                 if(nums[i], nums[j], nums[k] === 0){
//                     ans.push(nums[i],nums[j],nums[k])
//                     break
//                 }
//         }
        
//     }
        

// }
// return ans

// }
// console.log(threeSum([1,2,0,-1,-1,0,0,0,0]

