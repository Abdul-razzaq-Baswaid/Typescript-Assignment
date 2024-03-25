
let Guest_List :string[] = ['Father','Imran Khan','Mother'];

// for(let i=0; i<Guest_List.length; i++){
//      console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')   
// }

let absent_Guest :string = "Imran Khan";
let new_Guest :string = "Asif Ali Zardari";
Guest_List[1] =  new_Guest; 

// for(let i=0; i<Guest_List.length; i++){
//      console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')   
// }

//console.log(`Mr. ${absent_Guest} is not coming to the party.`);
//console.log("Good News! We find big table so we are inviting 3 more guests.")

// array mai 3 Guest add kiyay hain.
Guest_List.unshift("Sir Zia Khan");
Guest_List.splice(2 , 0, "Fatima");
Guest_List.push("Abdullah");

// yahn pr mai nai 6 guest k array ko print karaya hai.
// for(let i=0; i<Guest_List.length; i++){
//      console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')  
// }

// Sorry message to guest for not inviting.
// console.log("\nSorry we can not arrange big table, Only Two Peoples will be invited.");

//yahn pr mai nai Guest remove kiyay hain
while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
//    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
 }

// hamaray 2 bachay hoay invited guest
// for(let i=0; i<Guest_List.length; i++){
//      console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')  
// }

//mai nay saary guest arra sayy remove kar diyay.
Guest_List.splice(0, 2);
console.log(Guest_List);


// Exercise 19

// print a message indicating the number of people you are inviting to 
// dinner.

console.log(`Total number of Guest Are: ${Guest_List.length}`);

