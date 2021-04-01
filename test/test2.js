


const text = prompt("test pour mocha")
numbers = [1, 2, 3, 4, 3, 2, 1, 34, 4];
console.log(text)
numbers.push (text);

for (let number of numbers) {
  if (typeof number == 'string') {
    i = numbers.indexOf (number);
    number = numbers[i].length;
  }
  console.log (typeof number);
  console.log (number);
}


