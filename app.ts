//TYPE
//number
//string
//boolean

//array
//object

//any

//Literal type
// const myName = "Kesinee"

// let age = 20;

// //use ? for an optional
// const add = (num1: number, num2?: number) => {
//     if (!num2) {
//         return num1;
//     } else {
//         return num1 + num2;
//     }
// }

// const result = add(1, 4);

type Person = {
    name: string,
    age: number,
    // array of string, can write both below
    hobbies: string[]
    favColor: Array<string>
}
const person: Person = {
    name: "Kesinee",
    age: 30,
    hobbies: ['cooking', 'coding'],
    favColor: ['blue', 'green']
}
const person1: {} = {
    name: "Kesinee",
    age: 30,
}

//Union type
type Name = string | number;
const friend1: Name = "Bay";
const friend2: Name = 50;

//Intersection type
type Kid = {
    name: string;
    age: number;
};
type Nickname = {
    nickname: string;
}

const human: Kid & Nickname = {
    name: 'Kid',
    age: 5,
    nickname: 'KK'
};

type NestedObj = {
    mom: { name: string; age: number; children: string[] }
}

//Literal type
type Gender = "female" | "male";
const bay: Gender = "male";

//Skip Tuple and ENUM -- Can learn more on Youtube//

const greeting = (data: string | number): void => {
    console.log(data)
}
const logging = (data: string | number): never => {
    throw new Error('Error')
}
