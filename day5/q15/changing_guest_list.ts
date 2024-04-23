let guestlist: string []=['maheen','aqsa','ayan','anas'];
for(let i=0; i<guestlist.length; i++){
    console.log('requested sir/madam :'+guestlist[i]+ ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n')
}
let not_present: string = 'aqsa';
let new_guest: string= 'rumaisa';
guestlist[1]=new_guest;
for(let i=0; i<guestlist.length; i++){
    console.log('requested sir/madam :'+guestlist[i]+ ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n')
}
console.log(`miss. ${not_present} will not comig on tomorrow dinner.`);