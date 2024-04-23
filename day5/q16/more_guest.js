var list = ['maheen', 'aqsa', 'ayan', 'anas'];
//for(let i=0; i<guest_list.length; i++){
//   console.log('requested sir/madam :'+guest_list[i]+ ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n')
// }
var notpresent = 'aqsa';
var guest = 'rumaisa';
list[1] = guest;
for (var i = 0; i < list.length; i++) {
    console.log('requested sir/madam :' + list[i] + ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n');
}
console.log("miss. ".concat(notpresent, " will not comig on tomorrow dinner."));
list.unshift('ghazala', 'afshan', 'salman');
for (var i = 0; i < list.length; i++) {
    console.log('requested sir/madam :' + list[i] + ',\nwe inviting you on dinner tomorrow. we found big table so we decide to invite three more guest.\n\nthankyou.\n');
}
