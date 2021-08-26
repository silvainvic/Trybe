const x = 26;
const y = 14;
const z = 8;

/** Atividade - 1 */
calculadora("subtrair");
/** Atividade - 2 */
console.log("\n\nO numero %s é o maior!", oMaiorDeDois(x, y));
/** Atividade - 3 */
console.log("\n\nO numero %s é o maior!", oMaiorDeTres(x, y, z));
/** Atividade - 4 */
console.log("\n\nO valor é: " + isTrueOrFalse(false));
/** Atividade - 5 */
console.log("\n\nSão angulos de um triângulo? " + angleTriangle(60, "40", 60));
/** Atividade - 6 */
console.log("\n\nMovimentos das peças no xadrez: " + movXadrez("bishop"));
/** Atividade - 7 */
console.log("\n\nNota convertida: " + convertScore(90));
/** Atividade - 8 */
console.log("\n\nPossui algum numero par?? " + isPair(4, 1, 9));
/** Atividade - 9 */
console.log("\n\nPossui algum numero impar?? " + isOdd(2, 6, 6));
/** Atividade - 10 */
console.log("\n\nLucro de vendas: " + product(600, 800));
/** Atividade - 11 */
console.log("\n\nSalario liquido: " + netSalary(3000));

function calculadora(value) {
  switch (value) {
    case "addition":
    case "adicao":
    case "somar":
    case "+":
      console.log("\n\nResultado: %s : ", (x + y));
      break;
    case "subtraction":
    case "subtracao":
    case "subtrair":
    case "-":
      console.log("\n\nResultado: %s : ", (x - y));
      break;
    case "multiplication":
    case "multiplicacao":
    case "multiplicar":
    case "vezes":
    case "x":
    case "*":
      console.log("\n\nResultado: %s : ", (x * y));
      break;
    case "division":
    case "divisao":
    case "dividir":
    case "/":
      console.log("\n\nResultado: %s : ", (x / y));
      break;
    case "modulo":
    case "%":
      console.log("\n\nResultado: %s : ", (x % y));
      break;
  }
}

function oMaiorDeDois(x, y) {
  if ( x > y ) {
    return x;
  } else {
    return y;
  }
}

function oMaiorDeTres(x, y, z) {
  if ( x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}

function isTrueOrFalse(value) {
  const cValue = value;
  if (cValue == true) {
    return "positive";
  } else if (cValue == false) {
    return "negative";
  } else {
    return 0;
  }
}

function angleTriangle(vx, vy, vz) {
  const angle = vx + vy + vz;
  let message;
  if (vx >= 1 && vy >= 1 && vz >= 1 && typeof angle === "number") {
    message = (angle === 180) ? true : false;
  } else {
    message = "Erro, erro!";
  }
  return message;
}

function movXadrez(value) {
  const nValue = value.toLowerCase();
  let moviment;
  switch(nValue) {
    case "pawn":
      moviment = "moviment forward and capture diagonals";
      break;
    case "tower":
      moviment = "moviment vertical and horizontal and dont skip other pieces";
      break;
    case "horse":
      moviment = "moviment is in an L. Only piece that can skip others. ";
      break;
    case "bishop":
      moviment = "moviment diagonals";
      break;
    case "queen":
      moviment = "moviment horizontals, verticals and diagonals";
      break;
    case "king":
      moviment = "All directions but only square at a time";
      break;
  }
  return moviment
}

function convertScore(value) {
  let letter;
  if (value > 0 && (typeof value) === "number") {
    if (value >= 90) {
      letter = "A";
    } else if (value >= 80 && value < 90) {
      letter = "B";
    } else if (value >= 70 && value < 80) {
      letter = "C";
    } else if (value >= 60 && value < 70) {
      letter = "D";
    } else if (value >= 50 && value < 60) {
      letter = "E";
    } else {
      letter = "F";
    }
    return letter;
  } else {
    return "Erro, você digitou um valor inválido.";
  }
}

function isPair(vx, vy, vz) {
  const x = vx;
  const y = vy;
  const z = vz;

  return (x % 2 == 0 || y % 2 == 0 || z % 2 == 0) ? true : false;
}

function isOdd(vx, vy, vz) {
  const x = vx;
  const y = vy;
  const z = vz;

  return (x % 2 == 1 || y % 2 == 1 || z % 2 == 1) ? true : false;
}

function product(c, v) {
  if (!(v < 0 || c < 0)) {
    const cost = c;
    const value = v;
    const inssPercent = (20 / 100) * cost;
    return ((value - (cost + inssPercent)) * 1000);
  } else {
    return "Erro, um dos valores é invalido.";
  }
}

function netSalary(value) {
  if (!(value < 0) && (typeof value) === "number") {
    let inssPercent, irPercent, salaryBase;
    // INSS
    if (value <= 1556.94) {
      inssPercent = (8 / 100) * value;
    } else if (value > 1556.94 && value <= 2594.92) {
      inssPercent = (9 / 100) * value;
    } else if (value > 2594.92 && value <= 5189.82) {
      inssPercent = (11 / 100) * value;
    } else {
      inssPercent = 570.88;
    }

    salaryBase = value - inssPercent;

    // IR
    if (salaryBase > 1903.98 && salaryBase <= 2826.65) {
      irPercent = ((7.5 / 100) * salaryBase) - 142.80;
    } else if (salaryBase > 2826.65 && salaryBase <= 3751.05) {
      irPercent = ((15 / 100) * salaryBase) - 354.80;
    } else if (salaryBase > 3751.05 && salaryBase <= 4664.68) {
      irPercent = ((22.5 / 100) * salaryBase) - 636.13;
    } else {
      irPercent = ((27.5 / 100) * salaryBase) - 869.36;
    }
    return salaryBase - irPercent;
  }
}

