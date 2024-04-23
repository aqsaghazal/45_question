var guests = ['maheen', 'aqsa', 'ayan', 'anas'];
//for(let i=0; i<guest_list.length; i++){
//   console.log('requested sir/madam :'+guest_list[i]+ ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n')
// }
var nopresent = 'aqsa';
var Guests = 'rumaisa';
guests[1] = Guests;
//for(let i=0; i<guest_list.length; i++){
//  console.log('requested sir/madam :'+guest_list[i]+ ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n')
// }
console.log("miss. ".concat(nopresent, " will not comig on tomorrow dinner."));
guests.unshift('ghazala', 'afshan', 'salman');
//for(let i=0; i<guest_list.length; i++){
//   console.log('requested sir/madam :'+guest_list[i]+ ',\nwe inviting you on dinner tomorrow. we found big table so we decide to invite three more guest.\n\nthankyou.\n')
// }
console.log('\nUnfortunately we can not be able to arrange a big table for dinner.So, only two peoples are invited.');
while (guests.length > 2) {
    var Remove_guest = guests.pop();
    console.log("respeted sir/madam, ".concat(Remove_guest, "\nsorry, your are not invited on tomorrow dinner.\nthank you.\n"));
}
for (var i = 0; i < guests.length; i++) {
    console.log('respected sir/madam,' + guests[1] + '\nyes, you are still invited on tomorrow dinner.\nthankyou\n ');
}
guests.splice(0, 2);
console.log(guests);
