//Create an Object
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
}
  
// Create a copy
const x = person;

// Change Age in both
x.age = 10;

console.log(person.age)
console.log(x.age)  

const anotherPerson = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};


console.log(anotherPerson.fullName())