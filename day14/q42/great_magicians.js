function magician(show_magicians, make_great) {
    console.log("".concat(show_magicians, " is ").concat(make_great));
}
magician("alice", "the great.");
magician("david", "the great.");
magician("cedric", "the great.");
// let magicians: string[] = ["Alice", "David", "Chris"];
// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//   }
// }
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
