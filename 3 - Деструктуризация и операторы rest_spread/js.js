"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [pleayersTeamOne, pleayersTeamTwo] = game.players;
// console.log(pleayersTeamOne);
// console.log(pleayersTeamTwo);

// const [goalKeeper, ...fieldPlayers] = game.players[0];
// console.log(goalKeeper);
// console.log(fieldPlayers);

// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// const newAllPlayers = [...allPlayers, "Дима", "Вася", "Иван"];
// console.log(newAllPlayers);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1);
console.log(draw);
console.log(team2);
