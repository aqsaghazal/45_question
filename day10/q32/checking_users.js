var current_user = ['admin', 'anaya', 'areeba', 'AREEB', 'ayan', 'aqsa', 'aera'];
var new_user = ['Admin', 'nysa', 'narmeen', 'Aqsa', 'ibrahim'];
new_user.forEach(function (newUser) {
    if (current_user.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
