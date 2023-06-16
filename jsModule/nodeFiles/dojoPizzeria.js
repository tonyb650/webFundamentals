/* The Pizza Oven
Create a function called pizzaOven. We should feel free to customize what 
information we keep track of for our pizza, but let's make sure that we 
include the following: crustType, sauceType, cheeses, and toppings.

Create a function called pizzaOven that returns a JavaScript (Pizza) Object
Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
Create 2 more pizzas with any toppings we like!
*/

function pizzaOven (crustType, sauceType, cheeses, toppings, garnishes) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    pizza.garnishes = garnishes;
    return pizza;
}

let meatPie = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"], null);
console.log(meatPie);
let veggie = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"], ["basil", "Parmesan"]);
console.log(veggie);
let margherita = pizzaOven("hand tossed", "marinara", ["mozzarella"], ["tomatoes"], ["basil", "Pecorino"]);
console.log(margherita);
let combo = pizzaOven("thin crust", "marinara", ["mozzarella", "cheddar"], ["pepperoni", "onions", "bell peppers", "sausage"], ["olive oil", "Parmesan"]);
console.log(combo);


/* Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza! */

// 2D array to hold each option by type of option
let ingredientChoices = [
    ["deep dish", "hand tossed", "thin crust", "sourdough"],
    ["marinara", "pesto", "traditional", "alfredo"],
    ["mozzarella", "feta", "cheddar", "gorgonzola", "cotija"],
    ["pepperoni", "onions", "peppers", "mushrooms", "olives", "sausage", "tomatoes"],
    ["olive oil", "Parmesan", "basil", "pecorino"]
]

function randomPizza (ingredientChoices) {
    let randomPie = {}; // create empty object

    // dough choice: simple. minimum and maximum of one selection
    let doughChoice = Math.floor(Math.random()*ingredientChoices[0].length);
    randomPie.crustType = ingredientChoices[0][doughChoice];

    // sauce choice (maximum 1 choice, but no choice is an acceptable option)
    for (let i = 0; i < ingredientChoices[1].length; i++){
        if (Math.random()>.5) { //yes, include this topping
            randomPie.sauceType = ingredientChoices[1][i];
            i = ingredientChoices[i].length; // max one choice, end loop
        }
    }

    // cheeses choice
    let selectedIngredients = [];
    for (let i = 0; i < ingredientChoices[2].length; i++){
        if (Math.random()>.5) { //yes, include this topping
            selectedIngredients.push(ingredientChoices[2][i]);
        }
    }
    randomPie.cheeses = selectedIngredients;

    // toppings choice(s)
    selectedIngredients = [];
    for (let i = 0; i < ingredientChoices[3].length; i++){
        if (Math.random()>.5) { //yes, include this topping
            selectedIngredients.push(ingredientChoices[3][i]);
        }
    }
    randomPie.toppings = selectedIngredients;

    // garnishes choice(s)
    selectedIngredients = [];
    for (let i = 0; i < ingredientChoices[4].length; i++){
        if (Math.random()>.5) { //yes, include this topping
            selectedIngredients.push(ingredientChoices[4][i]);
        }
    }
    randomPie.garnishes = selectedIngredients;

    return randomPie;
}
let myPizza = randomPizza(ingredientChoices);
console.log("");
console.log("RANDOM PIE:");
console.log(myPizza.crustType);
console.log(myPizza.sauceType);
console.log(myPizza.cheeses);
console.log(myPizza.toppings);
console.log(myPizza.garnishes);
