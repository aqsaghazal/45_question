// function make_car(
//     manufacturer: string,
//     model: string,
//     ...options: [string , any][]
//   ) {
//     let car = { manufacturer, model };
//     options.forEach(([key, value]) => (car[key] = value));
//     return car;
//   }
//   console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
//   console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
function make_car(name, model, manufacture, place) {
    console.log("{ NAME : ".concat(name, " , MODEL : ").concat(model, " , YEAR : ").concat(manufacture, " , PLACE : ").concat(place, " }"));
}
make_car("Mercedes Benz ", "AMG-S", "2024", "Germany");
make_car("Cadillac Escalade", "Luxury SUV", "2022", "Arlington Texas");
make_car("Hyundai ", "Tucson ", "2019", "south korea");
