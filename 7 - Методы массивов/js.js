"use strict";
///1
const dogs = [
  { weight: 22, curFood: 250, owners: ["Anna", "Viktor"] },
  { weight: 8, curFood: 200, owners: ["Masha"] },
  { weight: 13, curFood: 275, owners: ["Marina", "Ivan"] },
  { weight: 32, curFood: 340, owners: ["Dima"] },
];

dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  console.log(dog.recommendedFood);
});
console.log(dogs);

///2
const dogMarina = dogs.find(function (dog) {
  return dog.owners.includes("Marina");
});
console.log(dogMarina);
console.log(
  `Собака Марины ест слишком ${
    dogMarina.curFood > dogMarina.recommendedFood ? "много" : "мало"
  }`
);
///3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatTooLittle);

///4
console.log(`${ownersEatTooMuch.join(" и ")} собаки едят слишком много`);
console.log(`${ownersEatTooLittle.join(" и ")} собаки едят слишком много`);

///5

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

///6

console.log(
  dogs.some(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

////7
console.log(
  dogs.filter(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);
/// 8

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSorted);
