// 1. List properties of a JavaScript object
function task1() {
    const student = { name: "David Rayy", sclass: "VI", rollno: 12 };
    console.log(Object.keys(student).join(","));
}

// 2. Delete the rollno property
function task2() {
    const student = { name: "David Rayy", sclass: "VI", rollno: 12 };
    console.log("Before deletion:", student);
    delete student.rollno;
    console.log("After deletion:", student);
}

// 3. Get the length of a JavaScript object
function task3() {
    const student = { name: "David Rayy", sclass: "VI", rollno: 12 };
    console.log("Number of properties:", Object.keys(student).length);
}

// 4. Display reading status of books
function task4() {
    const library = [
        { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
        { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
        {
            author: "Suzanne Collins",
            title: "Mockingjay: The Final Book of The Hunger Games",
            readingStatus: false,
        },
    ];
    library.forEach((book) => {
        console.log(
            `${book.title} by ${book.author} - ${
                book.readingStatus ? "Already read" : "Not read yet"
            }`
        );
    });
}

// 5. Volume of a Cylinder
function task5() {
    class Cylinder {
        constructor(radius, height) {
            this.radius = radius;
            this.height = height;
        }
        volume() {
            return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(
                4
            );
        }
    }
    const r = parseFloat(prompt("Enter radius:"));
    const h = parseFloat(prompt("Enter height:"));
    const cyl = new Cylinder(r, h);
    console.log("Volume of cylinder:", cyl.volume());
}

// 6. Bubble Sort
function task6() {
    let arr = [6, 4, 0, 3, -2, 1];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log("Sorted array:", arr);
}

// 7. Subset of a string
function task7(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    console.log("Subsets:", result);
}

// 8. Create a Clock
function task8() {
    setInterval(() => {
        const now = new Date();
        console.log(now.toLocaleTimeString());
    }, 1000);
}

// 9. Circle area and perimeter
function task9() {
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        area() {
            return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        }
        perimeter() {
            return (2 * Math.PI * this.radius).toFixed(2);
        }
    }
    const r = parseFloat(prompt("Enter radius:"));
    const c = new Circle(r);
    console.log("Area:", c.area(), "Perimeter:", c.perimeter());
}

// 10. Sort array of objects by libraryID
function task10() {
    const library = [
        { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
        { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
        {
            title: "Mockingjay: The Final Book of The Hunger Games",
            author: "Suzanne Collins",
            libraryID: 3245,
        },
    ];
    library.sort((a, b) => b.libraryID - a.libraryID);
    console.log("Sorted library:", library);
}

// 11. Print all methods in an object
function task11() {
    function all_methods(obj) {
        return Object.getOwnPropertyNames(obj).filter(
            (item) => typeof obj[item] === "function"
        );
    }
    console.log("Array methods:", all_methods(Array));
}

// 12. Parse a URL
function task12() {
    const url = new URL(prompt("Enter a full URL:"));
    console.log("Host:", url.host);
    console.log("Path:", url.pathname);
    console.log("Params:", url.searchParams);
}

// 13. Retrieve all own and inherited property names
function task13() {
    function getAllProperties(obj) {
        let props = [];
        for (let prop in obj) {
            props.push(prop);
        }
        return props;
    }
    console.log("Properties:", getAllProperties([])); // test with array
}

// 14. Retrieve all values of an object's properties
function task14() {
    const obj = { a: 1, b: 2, c: 3 };
    console.log("Values:", Object.values(obj));
}

// 15. Convert object into [key, value] pairs
function task15() {
    const obj = { a: 1, b: 2 };
    console.log("Entries:", Object.entries(obj));
}

// 16. Invert object keys and values
function task16() {
    const obj = { a: "1", b: "2", c: "3" };
    const inverted = {};
    for (let key in obj) {
        inverted[obj[key]] = key;
    }
    console.log("Inverted:", inverted);
}

// 17. Check if object contains a property
function task17() {
    const obj = { name: "Faiz", age: 22 };
    const prop = prompt("Enter property name to check:");
    console.log(`Contains "${prop}":`, obj.hasOwnProperty(prop));
}
