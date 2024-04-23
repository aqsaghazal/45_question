let usernames : string [] = ['admin','anaya','areeba','areeb','ayan','aqsa','aera']
usernames.forEach((username) => {
    if (username == "admin"){
        console.log("hello admin, would you like to see my report status?")
    }
    else {
        console.log(`hello ${username}! thanks for loggin in.`)
    }
});