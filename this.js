// Object method context

const obj = {
    name: 'JavaScript',
    greet: function() {
        console.log(this.name);
    }
};

obj.greet(); // Outputs: JavaScript


// Constructor Function Context

function Person(name) {
    this.name = name;
}

const person = new Person('Alice');
console.log(person.name); // Outputs: Alice


// Arrow Function Context

const object = {
    name: 'Arrow Function',
    regularFunction: function() {
        console.log(this.name); // Outputs: Arrow Function
    },
    arrowFunction: () => {
        console.log(this.name); // Outputs undefined or the value from the global scope
    }
};

object.regularFunction();  // Works as expected
object.arrowFunction();    // `this` does not refer to obj, so it outputs undefined
