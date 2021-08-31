// Atividade 1.
let player = {
    firstName: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        gold: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

// Atividade 2.
console.log("A jogadora, %s %s tem %s anos.", player.firstName, player.lastName, player.age);

// Atividade 3 ~ 4
for (let data in player.bestInTheWorld) {
    if (Number(data) + 1 === player.bestInTheWorld.length) {
        console.log("A jogadora %s %s, foi eleita a melhor do mundo por %s",
        player.firstName, player.lastName, Number(data) + 1);
    }
}

// Atividade 5.
console.log("A jogadora possui %s medalhas de ouro e %s de prata.", player.medals['gold'], player.medals['silver']);
