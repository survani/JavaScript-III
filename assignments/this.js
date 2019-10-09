/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding = Using the global scope for example console.log(this);.
* 2. Implicit Binding = For the .this keyword it means using the dot notation to invoke a function.
* 3. New Binding = A constructor function that is being used to refer to a specific object that will be created and returned by that constructor function. 
* 4. Explicit Binding = Using .call(), .apply(), .bind() on a function and explicitly passing it in a this. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

// console.log(this);

// Principle 2
// code example for Implicit Binding

const animal = {
    name: "Max",
    fullName: function() {
        return`${this.name} Garfias`
    }
};
console.log(animal.fullName());


// Principle 3
// code example for New Binding

let animals = function(name, favoriteFood){
    this.name = name;
    this.favoriteFood = favoriteFood; 
};

let lion = new animals("Ron", "Meat");
console.log(lion.favoriteFood)


// Principle 4
// code example for Explicit Binding

function sayFavoriteFood() {
    return `My favorite animal is ${this.name} the lion.`;
}
console.log(sayFavoriteFood.call(lion));