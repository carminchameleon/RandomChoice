import IPerson from "./Person/IPerson";
import Person, { makePerson } from "./Person/Person";
import Chance from "chance";
import * as R from "ramda";

const chance = new Chance();
let persons: IPerson[] = R.range(0, 2).map(
  (n: number) => new Person(chance.name(), chance.age())
);
console.log(persons);

class Person1 {
  constructor(public name: string, public age: number) {}
}

let jack1: Person1 = new Person1("jack", 32);
jack1.name = "jack";
jack1.age = 32;

console.log(jack1);

class Person3 {
  name: string;
  age?: number;
  constructor(name: string, age?: number) {
    (this.name = name), (this.age = age);
  }
}

let jack3: Person3 = new Person3("jack", 35);
console.log(jack3);

class Person {}

let apples = 5;

// 1 ) function that return that 'any' type

const json = '{"x" : 10, "y" : 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// JSON.parse() 로 했을 때 타입스크립트는 그것에 대한 예상을 할 수 없다.  -> 'any' 가 등장하게 되는 배경
// any로 되어있을 때 타입스크립트는 그것이 맞는 것인지 틀린것인지에 대해서 잡아낼 수가 없음

// 보통은 type inference로 하지만 annotation이 필요할 때가 있음

//  2) When we declare a variable on one line and initializa it later

let word = ["red", "green", " blue"];
let foundWord: boolean; // 선언을 할 때 이 변수가 어떤 타입이 될지에 대해서 선언 해줌
// 이후 할당을 할 때에는 이 타입에 맞춰서 할당 되어야함

for (let i = 0; i < word.length; i++) {
  if (word[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
// 원래는 false라서 boolean 이었는데, 이후에 조건에 따라서 숫자를 넣게될 것이기 때문에

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// type annotation / inference with Function
// they will just check the type not about is it right as logic

const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  //   a - b; // void -> 우리는 아무것도 리턴하지 않을 것이다.
  // 적어놓지 않으면 타입스크립트는 아무것도 리턴하지 않을 것이라고 inference
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multifly = function (a: number, b: number): number {
  return a * b;
};

/// objects

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// const age = profile.age
//const { age } = profile;

/// 디스트럭쳐링

// const { age }: { age: number } = profile;
const { age, name }: { age: number; name: string } = profile;

// object 경우
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

// Array 여러가지의 경우가 있을 수 있음.
