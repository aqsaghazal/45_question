var usernames = ['admin', 'anaya', 'areeba', 'areeb', 'ayan', 'aqsa', 'aera'];
usernames.forEach(function (username) {
    if (username == "admin") {
        console.log("hello admin, would you like to see my report status?");
    }
    else {
        console.log("hello ".concat(username, "! thanks for loggin in."));
    }
});
