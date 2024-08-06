const numbers = [10, 13, 20, 25, 38, 35, 40];

const result = numbers.filter((num) => {
  if (num >= 25) {
    return true;
  }
});

const result2 = numbers.filter((num) => {
  if (num % 5 == 0) {
    return true;
  }
});

const result3 = numbers.map((num) => {
  return num * num;
});

const result4 = numbers.map((num) => {
  return num * 2;
});

let es = [];

let result5 = numbers.filter((num) => {
  return num >= 20;
});

let result6 = result5.map((num) => {
  return num * num;
});

let result7 = numbers.filter((num) => {
  return num % 5 == 0;
});

let result8 = result7.map((num) => {
  return num * 3;
});

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result6);
console.log(result8);
