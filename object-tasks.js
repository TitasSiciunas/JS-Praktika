console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  function sortDrinksByPrice(a, b) {
    return a.price - b.price;
  }
  const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "cola", price: 90 }
  ];

  drinks.sort(sortDrinksByPrice);
  console.log(drinks);
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, name, value) {
    obj[name] = value;
    return obj;
  }

  console.log(addName({}, "Brutus", 300));
  console.log(addName({ piano: 500 }, "Brutus", 400));
  console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  function createGeneration(x, y) {
    const generations = {
      '-3': { f: 'great grandmother', m: 'great grandfather' },
      '-2': { f: 'grandmother', m: 'grandfather' },
      '-1': { f: 'mother', m: 'father' },
      '0': { f: 'me!', m: 'me!' },
      '1': { f: 'daughter', m: 'son' },
      '2': { f: 'granddaughter', m: 'grandson' },
      '3': { f: 'great granddaughter', m: 'great grandson' }
    };
    return generations[x][y];
  };

  console.log(createGeneration(2, "f"));
  console.log(createGeneration(-3, "m"));
  console.log(createGeneration(1, "f"));

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  function maximumScore(tileHand) {
    return tileHand.reduce((previousScore, {score}) => previousScore += score, 0);
  }
  console.log(
    maximumScore([
      { tile: "N", score: 1 },
      { tile: "K", score: 5 },
      { tile: "Z", score: 10 },
      { tile: "X", score: 8 },
      { tile: "D", score: 2 },
      { tile: "A", score: 1 },
      { tile: "E", score: 1 }
    ]));
  console.log(
    maximumScore([
      { tile: "B", score: 2 },
      { tile: "V", score: 4 },
      { tile: "F", score: 4 },
      { tile: "U", score: 1 },
      { tile: "D", score: 2 },
      { tile: "O", score: 1 },
      { tile: "U", score: 1 }
    ]))
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {
    return Object.values(obj).reduce((pV, cV) => pV + cV) - limit;
  }

  console.log(calculateDifference({ "baseball bat": 20 }, 5));
  console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
  console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

  function toArray(obj) {
    return Object.entries(obj);
  }

  console.log(toArray({ a: 1, b: 2 }));
  console.log(toArray({ shrimp: 15, tots: 12 }));
  console.log(toArray({}));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    return Math.min(...Object.values(inks));
  }

  console.log(inkLevels({
      "cyan": 23,
      "magenta": 12,
      "yellow": 10
    }));

  console.log(inkLevels({
      "cyan": 432,
      "magenta": 543,
      "yellow": 777
    }));

  console.log(inkLevels({
      "cyan": 700,
      "magenta": 700,
      "yellow": 0
    }));
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  function calculateLosses(obj) {
    return Object.values(obj).reduce((pV, cV) => pV + cV, 0) || "Lucky you!";
  }
  console.log(calculateLosses({
      tv: 30,
      skate: 20,
      stereo: 50,
    }));
  console.log(calculateLosses({
      painting: 20000,
    }));
  console.log(calculateLosses({}));
}
console.groupEnd();
