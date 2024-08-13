// console.log("Hellow world");

// let age: number = 20;

// if (age < 50) age += 10;
// console.log(age);

let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;
// level = 1;
// level = "a";

//arrays
function render(document: any) {
  console.log(document);
}

let numbers: number[] = [];

//tuples
let user: [number, string, boolean, number] = [1, "Vaishnavi", true, 0];

//enums: is a list of related constants
// const small = 1;
// const medium = 2;
// const large = 3;
//grouping all these concepts into an enum
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

//functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000);

//objects
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "Vaishnavi",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Type aliases
//in the above code, if we want to create a new employee we have to rewrite the employee object again

//Union Types
function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10");

//Intersection Types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//Literal(exact or a specific value) types
type Quantity = 50 | 100;
let quantity = (Quantity = 100);
