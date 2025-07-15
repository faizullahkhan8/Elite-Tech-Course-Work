const prompt = require("prompt-sync")();

// *******************
// [LOOPING EXERCISE]:
// *******************

// [1]: Print all natural numbers using while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// [2]: Print natural numbers in descending order using while loop
let descNum = 10;
while (descNum > 0) {
    console.log(descNum);
    descNum--;
}

// [3]: Print small alphabets a - z using while loop
let lowerChar = 97;
while (lowerChar <= 122) {
    console.log(String.fromCharCode(lowerChar));
    lowerChar++;
}

// [3.1]: Capital alphabets A - Z
let upperChar = 65;
while (upperChar <= 90) {
    console.log(String.fromCharCode(upperChar));
    upperChar++;
}

// [4]: Even numbers 1–100
let evenNum = 0;
while (evenNum <= 100) {
    if (evenNum % 2 === 0) {
        console.log(evenNum);
    }
    evenNum++;
}

// [5]: Odd numbers 1–100
let oddNum = 0;
while (oddNum <= 100) {
    if (oddNum % 2 !== 0) {
        console.log(oddNum);
    }
    oddNum++;
}

// [6]: Sum of natural numbers up to n
let sumLimit = Number(prompt("Enter number to find sum of natural numbers: "));
let sum = 0;
let j = 1;
while (j <= sumLimit) {
    sum += j;
    j++;
}
console.log("Sum is:", sum);

// [7]: Sum of even numbers up to n
let evenLimit = Number(prompt("Enter number to find sum of even numbers: "));
let evenSum = 0;
let k = 1;
while (k <= evenLimit) {
    if (k % 2 === 0) {
        evenSum += k;
    }
    k++;
}
console.log("Sum of even numbers:", evenSum);

// [8]: Sum of odd numbers up to n
let oddLimit = Number(prompt("Enter number to find sum of odd numbers: "));
let oddSum = 0;
let m = 1;
while (m <= oddLimit) {
    if (m % 2 !== 0) {
        oddSum += m;
    }
    m++;
}
console.log("Sum of odd numbers:", oddSum);

// *******************
// [IF-ELSE EXERCISE]:
// *******************

// [1]: Max of two numbers
let val1 = Number(prompt("Enter first number: "));
let val2 = Number(prompt("Enter second number: "));
console.log("Max is:", val1 > val2 ? val1 : val2);

// [2]: Max of three numbers
let n1 = Number(prompt("Enter first number: "));
let n2 = Number(prompt("Enter second number: "));
let n3 = Number(prompt("Enter third number: "));
if (n1 >= n2 && n1 >= n3) {
    console.log("Max is:", n1);
} else if (n2 >= n3) {
    console.log("Max is:", n2);
} else {
    console.log("Max is:", n3);
}

// [3]: Positive or Negative
let numCheck = Number(prompt("Enter a number: "));
console.log(numCheck >= 0 ? "Positive" : "Negative");

// [4]: Divisible by 5 and 11
let divCheck = Number(prompt("Enter a number to check divisible by 5 & 11: "));
if (divCheck % 5 === 0 && divCheck % 11 === 0) {
    console.log("Divisible by 5 and 11");
} else {
    console.log("Not divisible by both");
}

// [5]: Even or Odd
let evenCheck = Number(prompt("Enter number: "));
console.log(evenCheck % 2 === 0 ? "Even" : "Odd");

// [6]: Leap year
let leapYear = Number(prompt("Enter year: "));
if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// [7]: Check character type
let ch = prompt("Enter a single character: ");
let code = ch.charCodeAt(0);
if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    console.log("Alphabet");
} else if (code >= 48 && code <= 57) {
    console.log("Number");
} else {
    console.log("Special Character");
}

// [8]: Vowel or Consonant
let letter = prompt("Enter a letter: ");
let vowels = ["a", "e", "i", "o", "u"];
if (vowels.includes(letter.toLowerCase())) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// [10]: Lowercase or Uppercase
let letterCase = prompt("Enter a letter: ");
let lCode = letterCase.charCodeAt(0);
if (lCode >= 65 && lCode <= 90) {
    console.log("Uppercase");
} else if (lCode >= 97 && lCode <= 122) {
    console.log("Lowercase");
} else {
    console.log("Not an Alphabet");
}

// [11]: Day of week
let dayNum = Number(prompt("Enter day number (1–7): "));
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
console.log(dayNum >= 1 && dayNum <= 7 ? days[dayNum - 1] : "Invalid day");

// [12]: Days in month
let monthNum = Number(prompt("Enter month number (1–12): "));
let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
if (monthNum >= 1 && monthNum <= 12) {
    console.log(
        `${monthNames[monthNum - 1]} has ${monthDays[monthNum - 1]} days`
    );
} else {
    console.log("Invalid month");
}

// [14]: Triangle validity
let side1 = Number(prompt("Enter side 1: "));
let side2 = Number(prompt("Enter side 2: "));
let side3 = Number(prompt("Enter side 3: "));
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("Triangle is valid");
} else {
    console.log("Triangle is NOT valid");
}

// [15]: Triangle type
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral Triangle");
    } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        console.log("Isosceles Triangle");
    } else {
        console.log("Scalene Triangle");
    }
} else {
    console.log("Invalid triangle for type check");
}

// [17]: Profit and Loss Calculator
let cost = Number(prompt("Enter cost price: "));
let selling = Number(prompt("Enter selling price: "));
if (selling > cost) {
    console.log("Profit =", selling - cost);
    console.log(
        "Profit % =",
        (((selling - cost) / cost) * 100).toFixed(2) + "%"
    );
} else if (cost > selling) {
    console.log("Loss =", cost - selling);
    console.log("Loss % =", (((cost - selling) / cost) * 100).toFixed(2) + "%");
} else {
    console.log("No Profit No Loss");
}

// [18]: GPA Calculator
let totalSubjects = Number(prompt("How many subjects? "));
let marks = 0;
for (let i = 0; i < totalSubjects; i++) {
    marks += Number(prompt(`Enter marks for subject ${i + 1}: `));
}
let maxMarks = totalSubjects * 100;
let percentage = (marks / maxMarks) * 100;

if (percentage >= 90) console.log("Grade A");
else if (percentage >= 70) console.log("Grade B");
else if (percentage >= 60) console.log("Grade C");
else if (percentage >= 50) console.log("Grade D");
else if (percentage >= 40) console.log("Grade E");
else console.log("Grade F");

// [19]: Gross Salary
let basic = Number(prompt("Enter your basic salary: "));
let hra = 0,
    da = 0;
if (basic <= 10000) {
    hra = basic * 0.2;
    da = basic * 0.8;
} else if (basic <= 20000) {
    hra = basic * 0.25;
    da = basic * 0.9;
} else {
    hra = basic * 0.3;
    da = basic * 0.95;
}
let gross = basic + hra + da;
console.log("Gross Salary = Rs." + gross);

// [20]: Electricity Bill Calculator
let units = Number(prompt("Enter electricity units consumed: "));
let bill = 0;
if (units <= 50) {
    bill = units * 0.5;
} else if (units <= 150) {
    bill = 50 * 0.5 + (units - 50) * 0.75;
} else if (units <= 250) {
    bill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
} else {
    bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
}
console.log("Total Electricity Bill = Rs." + bill.toFixed(2));
