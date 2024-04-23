
// let magicians: string[] = ["Alice", "David", "Chris"];

// function make_great(magicians: string[]): string[] {
//   let greatMagicians : any = [];
//   magicians.forEach((magician) => {
//     greatMagicians.push(`${magician} the Great`);
// });
// return greatMagicians;
// }

// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }

// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows modified names


console.log("Original Magicians:")
function magicians(show_magic : string){
    console.log(`${show_magic}`)
}
magicians("Alice")
magicians("David")
magicians("Cedric")

console.log("Great Magicians:")
function magiciansthegreat(show_magicians : string , make_great : string ){
    console.log(`${show_magicians} is ${make_great}`)
}
magiciansthegreat("Alice","The Great.")
magiciansthegreat("David","The Great.")
magiciansthegreat("Cedric","The Great.")

// we can use both ways.















