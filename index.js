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