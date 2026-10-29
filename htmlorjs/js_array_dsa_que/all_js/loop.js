// function findcommon(arr) {

//   let size = [];
//   let min = arr[0].length;
//   let result = "";
//   let i = 0;
//   let k = 0;
//   let word = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     size.push(arr[i].length);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < min) {
//       min = arr[i].length;
//     }
//   }
//   while (i < min) {
//     let char = word[k];
//     for (let j = 1; j < arr.length; j++) {
//       if (char != arr[j][k]) {
//         // console.log(result);
//         return result;
//       }
//     }
//     result += char;
//     i++;
//     k++;
//   }
//   return result;
// }
// console.log(findcommon(["Batman","BadBoy","Bat"]))





//Anargam Strings - cat,act  dog,god thi si anagam , battle=batlle this is not anargam
 function Anagam(str1,str2){
    if(str1.length!==str2.length){
        return false
    }
    let a = str1.split('').sort().join("")
    let b = str2.split('').sort().join("")
     return a==b
}

console.log(Anagam('cat','act'))
console.log(Anagam('man','nam'))
console.log(Anagam('dog','goj'))