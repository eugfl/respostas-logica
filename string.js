// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula,
//além de informar a quantidade de vezes em que ela ocorre.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countAInString(str) {
  let count = 0;
  for (let char of str) {
    if (char.toLowerCase() === "a") {
      count++;
    }
  }
  return count;
}

rl.question("Informe uma string: ", (str) => {
  let count = countAInString(str);
  console.log(`A letra 'a' aparece ${count} vezes na string.`);

  rl.close();
});
