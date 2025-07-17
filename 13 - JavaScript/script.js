// 1. Read and print elements of array
function task1() {
    let arr = [];
    let n = parseInt(prompt("Task 1 - Enter number of elements:"));
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Element ${i + 1}:`));
    }
    console.log("Array elements:", arr);
}

// 2. Print all negative elements
function task2() {
    let numbers = [];
    let total = parseInt(prompt("Task 2 - Enter total elements:"));
    for (let i = 0; i < total; i++) {
        numbers[i] = parseInt(prompt(`Element ${i + 1}:`));
    }
    console.log("Negative elements:");
    numbers.forEach((num) => {
        if (num < 0) console.log(num);
    });
}

// 3. Find sum of all elements
function task3() {
    let elements = [];
    let size = parseInt(prompt("Task 3 - Enter number of elements:"));
    for (let i = 0; i < size; i++) {
        elements[i] = parseInt(prompt(`Element ${i + 1}:`));
    }
    let sum = elements.reduce((a, b) => a + b, 0);
    console.log("Sum:", sum);
}

// 4. Find max and min element
function task4() {
    let values = [];
    let length = parseInt(prompt("Task 4 - Enter number of elements:"));
    for (let i = 0; i < length; i++) {
        values[i] = parseInt(prompt(`Element ${i + 1}:`));
    }
    console.log("Max:", Math.max(...values));
    console.log("Min:", Math.min(...values));
}

// 5. Find second largest element
function task5() {
    let arr = [];
    let n = parseInt(prompt("Task 5 - Enter number of elements:"));
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Element ${i + 1}:`));
    }
    let first = -Infinity,
        second = -Infinity;
    arr.forEach((num) => {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    });
    console.log("Second largest:", second === -Infinity ? "Not found" : second);
}

// 6. Count even and odd elements
function task6() {
    let arr = [],
        even = 0,
        odd = 0;
    let n = parseInt(prompt("Task 6 - Total elements:"));
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Element ${i + 1}:`));
        arr[i] % 2 === 0 ? even++ : odd++;
    }
    console.log("Even:", even, "Odd:", odd);
}

// 7. Count negative elements
function task7() {
    let arr = [],
        count = 0;
    let n = parseInt(prompt("Task 7 - Total elements:"));
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Element ${i + 1}:`));
        if (arr[i] < 0) count++;
    }
    console.log("Negative count:", count);
}

// 8. Copy array to another array
function task8() {
    let original = [],
        copy = [];
    let n = parseInt(prompt("Task 8 - Total elements:"));
    for (let i = 0; i < n; i++) {
        original[i] = parseInt(prompt(`Element ${i + 1}:`));
        copy[i] = original[i];
    }
    console.log("Copied array:", copy);
}

// 9. Insert element
function task9() {
    let arr = [],
        n = parseInt(prompt("Task 9 - Total elements:"));
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Element ${i + 1}:`));
    }
    let value = parseInt(prompt("Enter value to insert:"));
    let position = parseInt(prompt("Enter position (0-based index):"));
    arr.splice(position, 0, value);
    console.log("Updated array:", arr);
}

// 10. Delete element at position
function task10() {
    let arr = [],
        n = parseInt(prompt("Task 10 - Total elements:"));
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Element ${i + 1}:`));
    }
    let pos = parseInt(prompt("Enter position to delete (0-based index):"));
    arr.splice(pos, 1);
    console.log("Array after deletion:", arr);
}

// 11. Frequency of each element
function task11() {
    let arr = [],
        freq = {};
    let n = parseInt(prompt("Task 11 - Total elements:"));
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Element ${i + 1}:`));
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    console.log("Frequencies:", freq);
}

// 12. Print unique elements
function task12() {
    let arr = [],
        count = {};
    let n = parseInt(prompt("Task 12 - Total elements:"));
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Element ${i + 1}:`));
        count[arr[i]] = (count[arr[i]] || 0) + 1;
    }
    console.log("Unique elements:");
    for (let key in count) {
        if (count[key] === 1) console.log(key);
    }
}

// 13. Count duplicate elements
function task13() {
    let arr = [],
        count = {},
        duplicates = 0;
    let n = parseInt(prompt("Task 13 - Total elements:"));
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Element ${i + 1}:`));
        count[arr[i]] = (count[arr[i]] || 0) + 1;
    }
    for (let key in count) {
        if (count[key] > 1) duplicates++;
    }
    console.log("Duplicate element count:", duplicates);
}

// 14. Delete duplicates
function task14() {
    let arr = [],
        unique = [];
    let n = parseInt(prompt("Task 14 - Total elements:"));
    for (let i = 0; i < n; i++) {
        let val = parseInt(prompt(`Element ${i + 1}:`));
        if (!unique.includes(val)) unique.push(val);
    }
    console.log("Array without duplicates:", unique);
}

// 15. Merge two arrays
function task15() {
    let a = [],
        b = [],
        c = [];
    let n1 = parseInt(prompt("Task 15 - Elements in array A:"));
    for (let i = 0; i < n1; i++) a[i] = parseInt(prompt(`A[${i + 1}]:`));
    let n2 = parseInt(prompt("Elements in array B:"));
    for (let i = 0; i < n2; i++) b[i] = parseInt(prompt(`B[${i + 1}]:`));
    c = a.concat(b);
    console.log("Merged array:", c);
}

// 16. Reverse array
function task16() {
    let arr = [],
        n = parseInt(prompt("Task 16 - Total elements:"));
    for (let i = 0; i < n; i++) arr[i] = parseInt(prompt(`Element ${i + 1}:`));
    console.log("Reversed array:", arr.reverse());
}

// 17. Split even and odd into two arrays
function task17() {
    let arr = [],
        even = [],
        odd = [];
    let n = parseInt(prompt("Task 17 - Total elements:"));
    for (let i = 0; i < n; i++) {
        let val = parseInt(prompt(`Element ${i + 1}:`));
        val % 2 === 0 ? even.push(val) : odd.push(val);
    }
    console.log("Even array:", even);
    console.log("Odd array:", odd);
}

// 18. Search for an element
function task18() {
    let arr = [],
        found = false;
    let n = parseInt(prompt("Task 18 - Total elements:"));
    for (let i = 0; i < n; i++) arr[i] = parseInt(prompt(`Element ${i + 1}:`));
    let key = parseInt(prompt("Enter element to search:"));
    arr.forEach((val, index) => {
        if (val === key) {
            console.log("Found at index:", index);
            found = true;
        }
    });
    if (!found) console.log("Element not found.");
}

// 19. Sort ascending or descending
function task19() {
    let arr = [],
        n = parseInt(prompt("Task 19 - Total elements:"));
    for (let i = 0; i < n; i++) arr[i] = parseInt(prompt(`Element ${i + 1}:`));
    let order = prompt("Enter 'asc' for ascending or 'desc' for descending:");
    arr.sort((a, b) => (order === "asc" ? a - b : b - a));
    console.log(`Sorted (${order}):`, arr);
}

// 20. Sort even and odd separately
function task20() {
    let arr = [],
        even = [],
        odd = [];
    let n = parseInt(prompt("Task 20 - Total elements:"));
    for (let i = 0; i < n; i++) {
        let val = parseInt(prompt(`Element ${i + 1}:`));
        val % 2 === 0 ? even.push(val) : odd.push(val);
    }
    even.sort((a, b) => a - b);
    odd.sort((a, b) => a - b);
    console.log("Sorted even:", even);
    console.log("Sorted odd:", odd);
}

// 21. Left rotate array
function task21() {
    let arr = [],
        n = parseInt(prompt("Task 21 - Total elements:"));
    for (let i = 0; i < n; i++) arr[i] = parseInt(prompt(`Element ${i + 1}:`));
    let rotate = parseInt(prompt("Rotate left by how many positions?"));
    for (let i = 0; i < rotate; i++) {
        arr.push(arr.shift());
    }
    console.log("Left rotated array:", arr);
}

// 22. Right rotate array
function task22() {
    let arr = [],
        n = parseInt(prompt("Task 22 - Total elements:"));
    for (let i = 0; i < n; i++) arr[i] = parseInt(prompt(`Element ${i + 1}:`));
    let rotate = parseInt(prompt("Rotate right by how many positions?"));
    for (let i = 0; i < rotate; i++) {
        arr.unshift(arr.pop());
    }
    console.log("Right rotated array:", arr);
}
