let list: string []=['maheen','aqsa','ayan','anas'];
//for(let i=0; i<guest_list.length; i++){
 //   console.log('requested sir/madam :'+guest_list[i]+ ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n')
// }
let notpresent: string = 'aqsa';
let guest: string= 'rumaisa';
list[1]=guest;
for(let i=0; i<list.length; i++){
    console.log('requested sir/madam :'+list[i]+ ',\nwe inviting you on dinner tomorrow. \n\nthankyou.\n')
}
console.log(`miss. ${notpresent} will not comig on tomorrow dinner.`);
list.unshift('ghazala','afshan','salman');
for(let i=0; i<list.length; i++){
    console.log('requested sir/madam :'+list[i]+ ',\nwe inviting you on dinner tomorrow. we found big table so we decide to invite three more guest.\n\nthankyou.\n')
}