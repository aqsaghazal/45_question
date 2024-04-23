var guestlist = ['maheen', 'aqsa', 'ayan', 'anas'];
for (var i = 0; i < guestlist.length; i++) {
    console.log('requested sir/madam :' + guestlist[i] + ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n');
}
var not_present = 'aqsa';
var new_guest = 'rumaisa';
guestlist[1] = new_guest;
for (var i = 0; i < guestlist.length; i++) {
    console.log('requested sir/madam :' + guestlist[i] + ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n');
}
console.log("miss. ".concat(not_present, " will not comig on tomorrow dinner."));
