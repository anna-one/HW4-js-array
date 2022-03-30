console.log("-------#5");

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);

console.log("-------#6");

let string = "my-short-string";
let arrString = string.split("-");

console.log(arrString);

console.log("-------#7");

let array = ["JavaScript", 2015];
let arrayString = array.join(" ");
console.log(arrayString);

console.log("--------#8");

let users = [
  { id: 1, name: "Vic", age: 21 },
  { id: 2, name: "Petya", age: 30 },
  { id: 3, name: "Jon", age: 5 },
];

let ageUp = users.filter(function (item) {
  return item.age > 20;
});
console.log(ageUp);

console.log("--------#9");

let usersArr = [
  { id: 1, name: "Vic", age: 21 },
  { id: 2, name: "Petya", age: 30 },
  { id: 3, name: "Jon", age: 5 },
];

let names = users.map(item => item.name)


console.log(names);


console.log('-------#10')

let arr = [5, 3, 8, 1, 7, 15];

function filterRangeInPlace(arr, a, b){
  arr.splice(0, arr.indexOf(a));
  arr.splice(arr.indexOf(b) + 1);

}

filterRangeInPlace(arr, 8, 7)

console.log(arr)


console.log("-------#11");

function convertStringToArray(string, delimiter){
  
  const array = string.split(delimiter)

  return array;
}



console.log(convertStringToArray('hello how are you', ' '))


console.log('-----------#12')

let arrOne = [5, 3, 8, 1, 15, 133];

function slArray(arr, startIndex, endIndex){
  return arr.slice(startIndex, endIndex)
}

let arrTwo = slArray(arrOne, 1, 4)

console.log(arrOne + ' ' + 'Без изменений')
console.log(arrTwo + ' ' + 'С Изменениями')



console.log('---------#13')

function sum(...array){
  const reduceResult = array.reduce(
    
    function(sumResult, number){
      return sumResult + number;
    }, 
    
    0
  
  )
  return reduceResult
}
console.log(sum(1, 2, 44, 55, 0))
