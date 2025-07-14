// *******************
// [LOOPING EXERCISE]:
// *******************

// [1]: Print all natural number using while loop

// let i = 1;
// while (i > 0) {
//     console.log(i);
//     i++;
// }

//[2]: Print natural number in decending order using while loop
// let n = 100;
// while (n > 0) {
//     console.log(n);
//     n--;
// }

// [3] : print alphabates from small alphabates a - z using while loop
// let small_charCode = 97;

// while (small_charCode < 123) {
//     console.log(String.fromCharCode(small_charCode));
//     small_charCode++;
// }

// // [3.1] : print alphabates from small alphabates a - z using while loop
// let capital_charCode = 65;

// while (capital_charCode < 91) {
//     console.log(String.fromCharCode(capital_charCode));
//     capital_charCode++;
// }

// [4] : even numbers between 1 - 100;

// let range_even = 100;
// while (range_even >= 0) {
//     console.log(range_even);
//     range_even -= 2;
// }

// while (range_even >= 0) {
//     if (range_even % 2 === 0) {
//         console.log(range_even);
//     }
//     range_even--;
// }

// [5] : print odd numbers in range 1 - 100

// let range_odd = 100;

// while (range_odd >= 0) {
//     if (range_odd % 2 !== 0) {
//         console.log(range_odd);
//     }
//     range_odd--;
// }

// [6] : print sum natural numbers
// let sum_range = 100;
// let total = 0;

// while (sum_range > 0) {
//     total = total + sum_range;
//     sum_range--;
// }

// console.log(total);

// [7] : sum of even numbers
// let sum_range = 10;
// let total = 0;

// while (sum_range > 0) {
//     if (sum_range % 2 === 0) {
//         total = total + sum_range;
//     }
//     sum_range--;
// }

// console.log(total);

// [7] : sum of odd numbers
// let sum_range = 10;
// let total = 0;

// while (sum_range > 0) {
//     if (sum_range % 2 !== 0) {
//         total = total + sum_range;
//     }
//     sum_range--;
// }

// console.log(total);

// *******************
// [IF-ELSE EXERCISE]:
// *******************

// [1]: maximum number in two values
// let num_1 = 10;
// let num_2 = 15;

// if (num_1 > num_2) {
//     console.log(num_1);
// } else {
//     console.log(num_2);
// }

// [2]: maximum number in three values
// let num_1 = 10;
// let num_2 = 15;
// let num_3 = 20;

// if (num_1 > num_2 && num_1 > num_3) {
//     console.log(num_1);
// } else if (num_2 > num_1 && num_2 > num_3) {
//     console.log(num_2);
// } else {
//     console.log(num_3);
// }

// [3]: maximum number in three values
// let num = 10;

// if (num > 0) {
//     console.log("Number is positive.");
// } else {
//     console.log("Number is Negative.");
// }

// [4]: is num divisible by 5 and 11
// let num = 10;

// if (num % 5 === 0 && num % 11 === 0) {
//     console.log("Number is divisible by 5 and 11");
// } else {
//     console.log("Number is not divisible by 5 and 11");
// }

// [5]: is number is even or odd
// let num = 20;
// if (num % 2 === 0) {
//     console.log("Number is even");
// } else {
//     console.log("Number is odd");
// }

// [6]: is leap year or not
// let year = 2024;
// if (year % 4 === 0) {
//     console.log("Year is leap.");
// } else {
//     console.log("Year is not leap");
// }

// [7]: is the given input is number,character or special character
// let char = "1";
// if (char.length === 1) {
//     let code = char.charCodeAt(0);

//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         console.log(char + " is an Alphabet.");
//     } else if (code >= 48 && code <= 57) {
//         console.log(char + " is a Number.");
//     } else {
//         console.log(char + " is a Special Character.");
//     }
// } else {
//     console.log("Please enter only a single character.");
// }

// [8]: is vowel or consonant
// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// let char = "a";
// let isVowel = false;

// for (let i = 0; i < vowels.length; i++) {
//     if (char === vowels[i]) {
//         isVowel = true;
//     }
// }

// if (isVowel) {
//     console.log("character is vowel");
// } else {
//     console.log("character is consonant");
// }

// [10]: is lower or upper case alphabate
// let char = "10";
// let charCode = char.charCodeAt(0);
// if (charCode >= 65 && charCode <= 90) {
//     console.log("Character is Uppercase.");
// } else if (charCode >= 97 && charCode <= 122) {
//     console.log("Character is lower");
// } else {
//     console.log("Something else");
// }

// [11]: print day of the week from the number;
// let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
// ];

// let number = 1;

// if (number <= 7 && number >= 1) {
//     console.log(days[number - 1]);
// } else {
//     console.log("Invalid Choice");
// }

// [12]: Enter month number and display the number days in it
// let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// let monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ];
// let number = 12;
// if (number >= 1 && number <= 12) {
//     console.log(
//         monthNames[number - 1] + " has " + daysInMonth[number - 1] + " days"
//     );
// } else {
//     console.log("Invalid Choice");
// }

// [13]: did'nt understand
// [14]: check triangle angles for validation
let a = 5;
let b = 7;
let c = 10;

if (a + b > c && a + c > b && b + c > a) {
    console.log("Triangle is valid");
} else {
    console.log("Triagle is invalid");
}
// [15]:
// [16]:
// [17]:
// [18]:
// [19]:
// [20]:
// [21]:
