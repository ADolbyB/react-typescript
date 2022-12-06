let myName: string = "Joel" // TypeScript strong language
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number; // Special Union Type


myName = "Andrew"
meaningOfLife = 42
isLoading = true
album = "Van Halen"
album = 1984

const sum = (a: number, b: string) => {
    return a + b
}

let postId: string | number // Union type for a postID
let isActive: number | boolean // Union type for 0/1 true/false

let re: RegExp = /\w+/g