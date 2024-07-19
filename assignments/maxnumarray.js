let number = [1, 2, 3, 4, 5, 6];
let largest = number[0];

for (let i = 0; i < number.length; i++) {
    if (number[i] > largest) {
        largest = number[i];
    } 
}
console.log("The largest number is: ", largest);
