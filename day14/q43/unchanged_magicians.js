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
console.log("Original Magicians:");
function magicians(show_magic) {
    console.log("".concat(show_magic));
}
magicians("Alice");
magicians("David");
magicians("Cedric");
console.log("Great Magicians:");
function magiciansthegreat(show_magicians, make_great) {
    console.log("".concat(show_magicians, " is ").concat(make_great));
}
magiciansthegreat("Alice", "The Great.");
magiciansthegreat("David", "The Great.");
magiciansthegreat("Cedric", "The Great.");
