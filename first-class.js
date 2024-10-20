// Function to a variable

const foo = () => {
  console.log("foo");
};
foo(); // Can only be called after the function is defined

// Passing function as an argument


sayHello(); // Can be called before the function is defined
function sayHello() {
    return "Hello, ";
}

function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}

greeting(sayHello, "JavaScript!");


// Returning a function

function anotherHello() {
    return () => {
        console.log("Hello, JavaScript!");
    };
}

anotherHello()();

// Different ways to return a function

function helloAnotherWay() {
    return function() {
        console.log("Hello, JavaScript!");
    };
}

helloAnotherWay()();