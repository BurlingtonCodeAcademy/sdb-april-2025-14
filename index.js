let fruitOne = "apple";
let fruitTwo = "banana";
let fruitThree = "cherry";

let fruits = ["orange", "grape", "raspberry"];

console.log(fruitOne);
console.log(fruitTwo);
console.log(fruitThree);

console.log(fruits[0])

let data = ["chris", 39, true, null, ["river", "tess", "pineapple", ["blueberry", "kiwi", ["cups", "plates", ["fish", "plants"]]]], "zach"];

console.log(data[4][3][2][2][0])

console.log("should be zach: ", data[5])

console.log("length of data: ", data.length)

console.log("last element of data array: ", data[data.length - 1])

let furniture = ["table", "chair", "sofa", "bed", "desk"];
console.log("our furniture: ", furniture);

furniture.push("lamp")
console.log("our furniture after push: ", furniture);

furniture.pop()
console.log("our furniture after pop: ", furniture);

furniture.unshift("shelf")
console.log("our furniture after unshift: ", furniture);

furniture.shift()
console.log("our furniture after shift: ", furniture);

let cars = ["honda", "toyota", "ford", "chevy", "nissan"];
console.log("our cars: ", cars);

let domesticCars = cars.slice(2, 4)
console.log("our domestic cars: ", domesticCars);

let someWords = ["this", "class", "is", "a", "great", "way", "to", "learn"]
console.log("some words: ", someWords);

let someSentence = someWords.join(" ")
console.log("some sentence: ", someSentence);

let someFruits = ["apple", "banana", "cherry", "date"]
console.log("some fruits: ", someFruits);

someFruits.splice(1, 2)
console.log("some fruits after splice: ", someFruits);

someFruits.splice(1, 0, "blueberry", "kiwi")
console.log("AGAIN some fruits after splice: ", someFruits);

someFruits.splice(2, 1, "mango", "pear", "pineapple")
console.log("AGAIN AGAIN some fruits after splice: ", someFruits);

let listOfFamousPeople = "George Washington and Nicolas Cage and Superman"
console.log("list of famous people: ", listOfFamousPeople);

let famousPeopleList = listOfFamousPeople.split(" and ")
console.log("famous people list: ", famousPeopleList);

let scores = [85, 32, 32, 64, 48, 78, 32]
console.log("scores: ", scores);
console.log("index of 32: ", scores.indexOf(32))
console.log("last index of 32: ", scores.lastIndexOf(32))
console.log("is it included?: ", scores.includes(100))
let result = scores.find(score => score > 70);
console.log("results: ", result)
let moreResults = scores.filter(score => score == 32);
console.log("scores greater than 32: ", moreResults)

function findAllIndices(array, element) {
    const indices = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            indices.push(i);
        }
    }
    return indices;
}

let indices = findAllIndices(scores, 32);
console.log("indices of 32: ", indices)

// basic Fibonacci function taking n as input for the number of elements
function generateFibonacciArray(n) {
    // create array with initial fibonacci numbers
    let fibArray = [0, 1];

    // generate the fibonacci seuqeunce up to the nth number
    for (let i = 2; i < n; i++) {
        // each new element is the sum of the previous two elements
        fibArray.push(fibArray[i - 1] + fibArray[i - 2])
    }

    return fibArray;
}

const fibSequence = generateFibonacciArray(100);
console.log("Fibonacci sequence: ", fibSequence);