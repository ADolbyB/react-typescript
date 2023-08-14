// Type Aliases: Creating aliases for TypeScript types
type stringOrNumber = string | number // Type Alias

type stringOrNumberArray = (string | number)[] // Type Alias

type Guitarist = {
    name?: string,
    active?: boolean, // Optional with ?
    albums: stringOrNumberArray // Type Alias inside a type alias
}

type userId = stringOrNumber // Valid Aliasing

// Literal Types
let myName: "Joel"
let userName: "Josh" | "Jules" | "Joel"
userName = "Jules"