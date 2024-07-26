let companyName="Neosoft";
console.log(companyName);
console.log(typeof companyName);//string


let branch=new String("Rabale");
console.log(branch);
console.log(typeof branch);//object

//Strings are immutable
let upperCase = companyName.toUpperCase();
console.log(companyName);
console.log(upperCase);

//arrays are mutable
let arr = ["Yamini","Richa"];
arr.sort();
console.log(arr);//Richa,Yamini


//If two literals have same value then their memeory
//location will be same.
let company = "Neosoft";
console.log(companyName==company);//true

//== : loose checking 
//=== : strict checking


let companyBranch = new String("Rabale");
console.log(branch==companyBranch);//false in case of string object

console.log(branch.valueOf()==companyBranch.valueOf());//true

//-----------------------------------------------------------------------

let num1 = 78;
let num2 = 78;
let num3 = "78";
console.log(num1==num2);//true
console.log(num1==num3);//true//because == ignores type,only check value
console.log(num1===num3);//false//because of type checking

//----------------------------------------------------------------------------
const country ="India is my country.I love my country"
console.log(country.substring(0,4));//Indi
console.log(country.substring(4));//a is my country.I love my country
console.log(country.substring(6,3));//(3,6)//ia_
console.log(country.substring(-6,3));//Ind

console.log(country.slice(0,4));
console.log(country.slice(4));
console.log(country.slice(6,3));//not working
console.log(country.slice(-6,3));//not working
console.log(country.slice(-10,-2));
console.log(country.slice(-37,10));


