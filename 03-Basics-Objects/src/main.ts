let stringArray = ["one", "hey", "Joel"] // String[] type

let guitars = ["Strat", "Les Paul", 5150] // Union Type array

let mixedData = ["EVH", 1984, true] // Union type

stringArray[0] = "42"
stringArray.push("turd")

guitars[0] = 1984
guitars.unshift("Jimmy") // add array index

let test = []
let bands: string[] = []
bands.push("Van Halen")

// Tuple

let myTuple: [string, number, boolean] = ["Joel", 40, false] // tuple type with initialized data

let mixed = ["Joel", 35, false] // Union Type Array definition: NOT A TUPLE

mixed = myTuple // This is OK since the array variable accepts those types

myTuple[1] = 55
myTuple[0] = "Andrew"
myTuple[2] = true // All legal assignments

// Objects
let myObject: object
myObject = []
console.log(typeof myObject)

myObject =  bands
myObject = {}

const exampleObj = {
    property1: "Joel",
    property2: "Ashley",
    property3: "Andrew"
}

exampleObj.property1 = "Baby Boy"

type Guitarist = {
    name?: string,
    active?: boolean, // Optional with ?
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
}

let jp: Guitarist = {
    name: "Jimmy",
    albums: ["I", "II", "IV"]
}

let jb: Guitarist = {
    active: false,
    albums: ["None"]
}

//evh = jp // legal since they are equal types

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!!`
    }
    return "Hey-odiley-doodily!!!"
}

console.log(greetGuitarist(evh))
console.log(greetGuitarist(jp))
console.log(greetGuitarist(jb))

// Enums:

enum Grade {
    U = 5,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)