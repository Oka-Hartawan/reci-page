// PREPARATION

let preparationList = document.querySelector("ul");

const preparations = [
  {
    Total: "Approximately 10 minutes",
  },
  {
    preparation: "5 minutes",
  },
  {
    Cooking: "5 minutes",
  },
];

const preparationItems = preparations
  .map((item) => {
    const [key, value] = Object.entries(item)[0];
    return `<li><strong>${key}</strong>: ${value}</li>`;
  })
  .join("");

preparationList.innerHTML = preparationItems;

// INGREDIENT

let Ingredient = document.getElementById("Ingredients");
let ingredientsList = Ingredient.querySelector("ul");

const ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

ingredientsItem = ingredientsList;
ingredientsList.innerHTML = ingredients
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join("");
// console.log(ingredientsList);

// Instructions

let instructions = document.getElementById("Instructions");
let instructionsList = instructions.querySelector("ol");

const instruction = [
  {
    "Beat the eggs":
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    "Heat the pan":
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    "Cook the omelette":
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    "Add fillings (optional)":
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    "Fold and serve":
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    Enjoy: "Serve hot, with additional salt and pepper if needed.",
  },
];

const instructionsItems = instruction
  .map((item) => {
    const [key, value] = Object.entries(item)[0];
    return `<li><strong>${key}</strong>: ${value}</li>`;
  })
  .join("");

instructionsList.innerHTML = instructionsItems;

// nutrition
let nutrition = document.getElementById("nutrition");
let nutritionList1 = nutrition.querySelectorAll("li.nutrition-style1");
let nutritionList2 = nutrition.querySelectorAll("li.nutrition-style2");

const nutritions = [
  {
    Calories: "277kcal",
  },
  {
    Carbs: "0g",
  },
  {
    Protein: "20g",
  },
  {
    Fat: "22g",
  },
];

const nutritionItem1 = nutritions
  .map((item1) => {
    const [key] = Object.entries(item1)[0];
    return `<li>${key}</li>`;
  })
  .join("");

const nutritionItem2 = nutritions
  .map((item2) => {
    const [, value] = Object.entries(item2)[0];
    return `<li>${value}</li>`;
  })
  .join("");

nutritionList1.forEach((element, index) => {
  element.innerHTML = nutritionItem1.split("</li>")[index] + "</li>";
});

nutritionList2.forEach((element, index) => {
  element.innerHTML = nutritionItem2.split("</li>")[index] + "</li>";
});
