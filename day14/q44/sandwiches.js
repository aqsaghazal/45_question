function sandwiches(message, items) {
    console.log("".concat(message, " : ").concat(items));
}
sandwiches("making a sandwich with", "ham , cheese");
sandwiches("making a sandwich with", "mayo , lettuce , chicken");
sandwiches("making a sandwich with", "lettuce , cheese , turkey");
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(", "), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
