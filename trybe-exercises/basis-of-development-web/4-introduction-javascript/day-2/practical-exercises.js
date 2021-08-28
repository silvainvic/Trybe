let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let sum = 0, 
    media, 
    message,
    biggest = 0,
    countOdd = 0,
    small = 99999999999;

for (let index of numbers) {
  sum += index;
  console.log(index);
  if (biggest < index)
    biggest = index;
  if (small > index) {
    small = index;
  }
  if (index % 2 == 1)
    countOdd += 1;
}

for (let index = 0; index <= 25; index += 1) {
  newNumbers.push(index);
}

media = sum / numbers.length;
if (media > 20) {
  message = "valor maior que 20";
} else {
  message = "valor menor ou igual a 20";
}

console.log("\n\n-------------------");
console.log("Meessage: %s", media);
console.log(message);
console.log("Maior: %s", biggest);
console.log("Soma: %s", sum);
console.log("Quantidade impares: %s", countOdd);
console.log("Menor: %s", small);
console.log("-----------------------");
console.log("Dividindo elementos da array por 2");
for (let index of newNumbers) {
  let result = index / 2
  console.log("%s / 2 = %s", index, result);
}

