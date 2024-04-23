let current_user : string [] = ['admin','anaya','areeba','AREEB','ayan','aqsa','aera']
let new_user : string [] = ['Admin','nysa','narmeen','Aqsa','ibrahim']

new_user.forEach((newUser) => {
    if (
      current_user.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
      )
    ) {
      console.log(`${newUser} will need to enter a new username.`);
    } else {
      console.log(`${newUser} is available.`);
    }
  });