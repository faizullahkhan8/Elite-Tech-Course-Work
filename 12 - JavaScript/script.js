// *************
// [FUNCTION]
// *************

// [1] : FIND CUBE OF THE NUMBER
function FindCube(number) {
    console.log(number * number * number);
}

// [2] : FIND CIRCUMFERENCE,DIAMETER AND AREA OF CIRCLE
function calculateCircle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    console.log("Radius: ", radius);
    console.log("Diameter: ", diameter);
    console.log("Circumference: ", circumference.toFixed(2));
    console.log("Area: ", area.toFixed(2));
}

// [3] : FIND MAXIMUM AND MINIMUM B/W TWO NUMBERS
function findMinAndMax(num_1, num_2) {
    if (num_1 > num_2) {
        console.log(num_1, "is greater");
        console.log(num_2, "is smaller");
    } else {
        console.log(num_2, "is greater");
        console.log(num_1, "is smaller");
    }
}

// [4] : CHECK FOR EVEN OR ODD
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(num, "is even number");
    } else {
        console.log(num, "is odd number");
    }
}

// [5] : CHECK FOR PRIME, ARMSTRONG OR PERFECT NUMBER
function checkNumberType(n) {
    // Prime Check
    let isPrime = true;
    if (n < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    // Armstrong Check
    let sum = 0;
    let temp = n;
    let digits = n.toString().length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    let isArmstrong = sum === n;

    // Perfect Number Check
    let divisorSum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            divisorSum += i;
        }
    }
    let isPerfect = divisorSum === n;

    // Print results
    console.log(`Number: ${n}`);
    console.log(`Prime: ${isPrime}`);
    console.log(`Armstrong: ${isArmstrong}`);
    console.log(`Perfect: ${isPerfect}`);
}

// [6] : ALL STORNG NUMBER BETWEEN GIVEN INTERVAL
function printStrongNumbers(start, end) {
    console.log(`Strong numbers between ${start} and ${end} are:`);

    for (let i = start; i <= end; i++) {
        let num = i;
        let sum = 0;

        while (num > 0) {
            let digit = num % 10;

            // Calculate factorial manually
            let fact = 1;
            for (let j = 2; j <= digit; j++) {
                fact *= j;
            }

            sum += fact;
            num = Math.floor(num / 10);
        }

        if (sum === i) {
            console.log(i);
        }
    }
}

// [7] : ALL ARMSTRONG NUMBERS BETWEEN GIVEN INTERVAL
function printArmstrongNumbers(start, end) {
    console.log(`Armstrong numbers between ${start} and ${end} are:`);

    for (let i = start; i <= end; i++) {
        let num = i;
        let sum = 0;
        let digits = num.toString().length;
        let temp = num;

        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }

        if (sum === i) {
            console.log(i);
        }
    }
}

// [8] : ALL PERFECT NUMBER BETWEEN GIVEN INTERVAL
function printPerfectNumbers(start, end) {
    console.log(`Perfect numbers between ${start} and ${end} are:`);

    for (let i = start; i <= end; i++) {
        let sum = 0;

        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                sum += j;
            }
        }

        if (sum === i) {
            console.log(i);
        }
    }
}

// [9] : FIND POWER OF ANY NUMBER
function findPower(base, exponent) {
    let result = 1;

    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }

    console.log(`${base}^${exponent} = ${result}`);
}

// [10] : PRINT ALL NATURAL NUMBER BETWEEN 1 TO N
function printAllNaturalNumbers(limit) {
    for (let i = 0; i < limit; i++) {
        console.log(i);
    }
}
// [11] : ALL EVEN NUMBER OR ODD
function printAllOddOOrEvenNumber(isEven = false, limit) {
    if (isEven) {
        for (let i = 0; i < limit; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    } else {
        for (let i = 0; i < limit; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
}

// [12] : SUM OF ALL NATURAL NUMBER BETWEEN 1 TO N
function sumOfAllNaturalNumbers(limit) {
    let total = 0;
    for (let i = 0; i < limit; i++) {
        total += i;
    }
    console.log(total);
}

// [13] : PRINT ODD AND EVEN IN GIVEN RANGE
function addAllOddOOrEvenNumber(isEven = false, limit) {
    let total = 0;
    if (isEven) {
        for (let i = 0; i < limit; i++) {
            if (i % 2 === 0) {
                total += i;
            }
        }
    } else {
        for (let i = 0; i < limit; i++) {
            if (i % 2 !== 0) {
                total += i;
            }
        }
    }
}

// [16] : FIND THE REVERSE OF ANY NUMBER
function findReverse(num) {
    let reversed = 0;
    let original = num;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    console.log(`Reverse of ${original} is ${reversed}`);
}

// [17] : CHECK FOR PALINDROME
function isPalindrome(num) {
    let reversed = 0;
    let original = num;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    if (reversed === original) {
        console.log(num, "is palindrome");
    } else {
        console.log(num, "is not palindrome");
    }
}
// [18] : SUM OF DIGITS OF A GIVEN NUMBER
function SumOfGivenNumber(num) {
    let totalSum = 0;

    while (num > 0) {
        console.log(num);
        let digit = num % 10;
        totalSum += digit;
        num = Math.floor(num / 10);
    }

    console.log(totalSum);
}

// [19] : GENERATE NTH FIBONACCI TERM
function printFibonacciSequence(limit) {
    let sequence = [0, 1];
    for (let i = 2; i < limit; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    console.log(sequence);
}

// [20] : FIND GCD(HCF) OF TWO NUMBERS
function printGDCOfTwoNumbers(num_1, num_2) {
    while (num_2 !== 0) {
        let temp = num_2;
        num_2 = num_1 % num_2;
        num_1 = temp;
    }

    console.log("GDC is:", num_1);
}

// [21] : FIND LCM OF TWO NUMBERS
function printLCMOfTwoNumbers(num_1, num_2) {
    let temp_num_1 = num_1;
    let temp_num_2 = num_2;
    while (temp_num_2 !== 0) {
        let temp = temp_num_2;
        temp_num_2 = temp_num_1 % temp_num_2;
        temp_num_1 = temp;
    }

    console.log((num_1 * num_2) / temp_num_1);
}

// [22] : DISPLAY ALL ARRAY ELEMENTS
function displayAllElementsOfArray(array = []) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

// [23] : DISPLAY SUM OF ALL ARRAY ELEMENTS
function displayAllElementsOfArray(array = []) {
    let total = 0;
    for (let index = 0; index < array.length; index++) {
        total = total + array[i];
    }

    console.log(total);
}
// [24] : FIND MAXIMUM AND MINIMUM ELEMENTS IN ARRAY
function findMaximumNumberInArray(array = []) {
    let maximum = array[0];

    for (let i = 1; i < array.length; i++) {
        if (maximum < array[i]) {
            maximum = array[i];
        }
    }

    console.log(maximum);
}
