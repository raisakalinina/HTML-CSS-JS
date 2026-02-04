"use strict";

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.dir(gameEvents);
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `Каждое событие в матче появлялось в среднем раз в ${
    90 / gameEvents.size
  } минут`
);

for (let [min, event] of gameEvents) {
  const half = min <= 45 ? "ПЕРВАЯ ПОЛОВИНА" : "ВТОРАЯ ПОЛОВИНА";
  console.log(`[${half}] ${min}: ${event}`);
}
