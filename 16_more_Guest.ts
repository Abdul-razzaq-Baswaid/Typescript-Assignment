

let Guest_List :string[] = ['Father','Imran Khan','Mother'];

// for(let i=0; i<Guest_List.length; i++){

//      console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
// }

let absent_Guest :string = "Imran Khan";

let new_Guest :string = "Asif Ali Zardari";

Guest_List[1] =  new_Guest; 

for(let i=0; i<Guest_List.length; i++){

     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
     
}


console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log("Good News! We find big table so we are inviting 3 more guests.")

Guest_List.unshift("Sir Zia Khan");
Guest_List.splice(2 , 0, "Fatima");
Guest_List.push("Abdullah");

for(let i=0; i<Guest_List.length; i++){

     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
     
}
