

// Equality and Inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
// Equality and Inequality Test 2
console.log("Inequality test with strings: ", ("Apple" as string) != "Orange");

//Test 3 Using the Lower case function
console.log("Lower case function test: ","HELLO".toLowerCase() === "hello");
 
//Numerical tests involving equality and inequality //test 4
console.log("Equality test with numbers: ", 26 === 26);
//Numerical tests involving inequality //test 5
console.log("Inequality test with numbers: ", (26 as number) != 35);

//greater than test
console.log("Greater than test: ", 10 > 5);
//less than test
console.log("Less than test: ", 10 > 2);

//greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
//less than or equal to
console.log("Less than or equal to test: ", 5 <= 10);

//Test using "and" operator
console.log("And operator test: ", 5===5 && 10 > 5);
//Test using "or" operator
console.log("or operator test: ", (5===5 as number) || (10===5 as number));

// Test whether an item is in a array
const fruits :string[] = ["Mango","Banana","Orange"];
console.log('Test "Mango" in the array: ', fruits.includes("Mango"));

// Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));
