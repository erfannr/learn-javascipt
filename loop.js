let numbers = [2, 100, 40, 6, 80, 5]

// Write your code down below! You can change the values inside above array

for (let i =0; i< numbers.length; i++){
    for(let j=0; j<numbers.length; j++){
        if(numbers[i] < numbers[j]){
        var secondHighest = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = secondHighest
      }
    }
  }
  console.log(secondHighest)
  

// let numbers = [3, 500, 140, 6000, 850, 50000]

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[i] < numbers[j]) {
//             var secondHighest = numbers[i]
           
//         }
//     }
// }

// // Create switch case expression, under the conditions below:
// // if clothes type is 'GAUN' and the color is 'MERAH', print 'SAYA SUKA GAUN MERAH'
// // if clothes type is 'KAOS' and the color is 'BIRU', print 'SAYA SUKA KAOS BIRU'
// // if clothes type is 'KEMEJA' and the color is 'KUNING', print 'SAYA SUKA KEMEJA KUNING'
// // and if the conditons other than the above, print 'SAYA SUKANYA PAKAI BAJU KEBAYA'
 

// let clothesType = 'GAUN';
// let color = 'MERAH';

// // write your code below this line, don't change this!

// switch()

// Create a loop to print numbers from 1 to 50 to the console, but:
// - If the number is multiples of 3, print "Love"
// - If the number is multiples of 5, print " You"
// - If the number is multiples of both 3 and five, print "Love You"

// Example:
// 1
// 2
// Love
// 4
// You
// Love
// 7
// 8
// Love
// You
// 11
// Love
// 13
// 14
// "Love You"
// .
// .
// .
// .
// .
// 49
// "You"


// for (let i = 1; i<50; i++ ){
//   if( i % 15 == 0){
//     console.log(' LOVE YOU')
//   }
//   else if(i % 3 == 0){
//     console.log('LOVE')
//   } else if(i % 5 == 0) {
//     console.log('YOU')
//   }  else {
//     console.log(i)
//   }
// }

// Create loops that can print triangle like this: 

// *
// **
// ***
// ****
// *****


// Hint: 
// Create the triangle using 2 level nested loops

// Example of 2 level nested loops:

// for(condition1){
//   for(condition2){program2}
//   program1
// }

// Note:
// - The number of  stars at the left side and bottom of the triangle should same as digit's value.

// Example 1:
// Input: 
// let digit = 5

// Output:
// *
// **
// ***
// ****
// *****

// Example 2:
// Input: 
// let digit = 6

// Output:
// *
// **
// ***
// ****
// *****
// ******

// Create loops that can print square like this:

// *****
// *****
// *****
// *****
// *****

// Hint: 
// - Create the rectangle using 2 level nested loops

//    Example of 2 level nested loops:

// for(condition1){
//   for(condition2){program2}
//   program1
// }

// - Use can use "\n" to make enter 

// Note:
// - The number of stars that be the sides of the rectangle should same as digit value

// Example 1:
// Input:
// let digit = 5

// Output: 
// *****
// *****
// *****
// *****
// *****

// Example 2:
// Input:
// let digit = 7

// Output: 
// *******
// *******
// *******
// *******
// *******
// *******
// *******

// let digit = 5

// // Write your code down below! You can change the value of digit

// for(let i=1; i<=digit; i++){
//   let star = ''
//   for(let j=1; j<=digit;j++){
//     star += '*'
//   }
//       console.log(star)

// }

// Create loop that can print:
// *
// *
// *
// *
// *

// Hint: use '\n' to create enter

// Note:
// - Stars printed should have the same amount of digit 

// let digit = 5


// // write your code down below! You can change the value of digit

// for( i=1; i<=digit; i++){
//   var star = ''
//   for(var j=1; j<=1;j++){
//     star += '*'
//   }
//       console.log(star)

// }

// Create switch case expression, under the conditions below:
// if clothes type is 'GAUN' and the color is 'MERAH', print 'SAYA SUKA GAUN MERAH'
// if clothes type is 'KAOS' and the color is 'BIRU', print 'SAYA SUKA KAOS BIRU'
// if clothes type is 'KEMEJA' and the color is 'KUNING', print 'SAYA SUKA KEMEJA KUNING'
// and if the conditons other than the above, print 'SAYA SUKANYA PAKAI BAJU KEBAYA'
 

// let clothesType = 'GAUN';
// let color = 'MERAH';

// // write your code below this line, don't change this!

// switch (true) {
//   case clothesType == 'GAUN' && color == "MERAH":
//     alert('SAYA SUKA GAUN MERAH')
//     break;
//   case clothesType == 'KAOS' && color == "BIRU":
//     alert('SAYA SUKA KAOS BIRU')
//     break;
//   case clothesType == 'KEMEJA' && color == "KUNING":
//     alert('SAYA SUKA KEMEJA KUNING')
//     break;
//   default:
//     alert('SAYA SUKANYA PAKAI BAJU KEBAYA')
// }