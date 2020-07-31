const carMakers: string[] = ["ford", "toyota", "chevy"];
// array 안에 stirng만 들어갈 것이라고 예상

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// push, map 을 할 때, 우리가 어떤 것들을 돌릴지 알 수 있음

// Multiple types in Array

const imporantDates: (Date | string)[] = [new Date()];

imporantDates.push("2020-09-19"); // already wrote string before.

// Tuples

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
// 미리 타입을 지정해놓는다.

const pepsi: Drink = ["brown", true, 40];

// 이것의 목적은 무엇일까? 우리는 Number 이고 이 두가지가 들어온다는 것을 안다.
// 이것이 무엇이 의미하는 것인지에 대해서 알 수 없다.

const carSpecs: [number, number] = [300, 253];
// 하지만 object를 사용하면, 이것이 어떤것을 의미하는 것인지를 한번에 이해하고 알 수 있다.

const carStats = {
  horseposer: 400,
  weight: 3354,
};
