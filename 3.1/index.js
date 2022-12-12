function tabuada(numero: number): void {
  let tabuada = [],
    próximasTabuada = [];
  for (let index = 0; index < 10; index++) {
    tabuada.push(numero * index);
  }
  for (let index = 0; index < 10; index++) {
    próximasTabuada.push((numero + 1) * index);
    próximasTabuada.push((numero + 2) * index);
  }
  console.log(tabuada, próximasTabuada);
}

function pontoDeÔnibus(pares: object[]): number {
  if (pares[0][1] !== 0) {
    console.log("Valor Invalido, na primeira parada ninguém sai");
  } else {
    let pessoas = 0;
    for (let index = 0; index < pares.length; index++) {
      pessoas += pares[index][0];
      pessoas -= pares[index][1];
    }
    return pessoas;
  }
}
function Bingo(array: object[]): void {
  let Bingo = 0;
  array.array.forEach((element) => {
    element === 2 && Bingo++;
    element === 9 && Bingo++;
    element === 14 && Bingo++;
    element === 7 && Bingo++;
    element === 15 && Bingo++;
  });
  Bingo === 5 ? console.log("Bingo") : console.log("Perdeu");
}
