let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers = [];

// Primeira forma de adicionar no novo array numbers;
addMethod();

function addMethod() {
  for (let index = 0; index < array.length; index += 1) {
    if (!(array[index] === array[array.length - 1])) {
      numbers.push(array[index] * array[index + 1]);
    } else {
      numbers.push(array[index] * 2);
    }
  }
}

// Segunda forma de adicionar no novo array numbeers;
function addDiffMethod() {
  for (let index of array) {
    if (!(array.indexOf(index) === array.length - 1)) {
      numbers.push(array[array.indexOf(index)] * array[array.indexOf(index) + 1]);
    } else {
      numbers.push(array[array.indexOf(index)] * 2);
    }
  }
}


getElementsOfArray(numbers);
// Algoritmo bubble sort;
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

// Imprime os elementos da array;
getElementsOfArray(array);

// Algoritmo bubble sort;
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] > array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

// Imprime os elementos da array;
getElementsOfArray(array);

function getElementsOfArray(value) {
  for (let index of value) {
    console.log(index);
  }
  console.log("------------------------------");
}

