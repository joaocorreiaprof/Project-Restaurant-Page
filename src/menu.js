import appetizersImageSrc from "./images/appetizers.jpg";
import mainDishImageSrc from "./images/feijoada.jpg";
import dessertImageSrc from "./images/dessert.jpg";
import coffeeImageSrc from "./images/coffee.jpg";

function menu() {
  const contentDiv = document.querySelector(".content");

  // Create menuContent div
  const menuContent = document.createElement("div");
  menuContent.classList.add("menuContent");

  contentDiv.appendChild(menuContent);

  // Appetizers
  const appetizers = document.createElement("div");
  appetizers.classList.add("plateDiv"); // Add plateDiv for appetizers

  const appetizersImage = document.createElement("img");
  appetizersImage.src = appetizersImageSrc;
  appetizersImage.classList.add("menuPhoto");
  appetizers.appendChild(appetizersImage);

  const appetizersName = document.createElement("p");
  appetizersName.classList.add("menuName");
  appetizersName.innerHTML = "Appetizers";
  appetizers.appendChild(appetizersName);

  menuContent.appendChild(appetizers);

  // Main Dish
  const mainDish = document.createElement("div");
  mainDish.classList.add("plateDiv"); // Add plateDiv for main dish

  const mainDishImage = document.createElement("img");
  mainDishImage.src = mainDishImageSrc;
  mainDishImage.classList.add("menuPhoto");
  mainDish.appendChild(mainDishImage);

  const mainDishName = document.createElement("p");
  mainDishName.classList.add("menuName");
  mainDishName.innerHTML = "Feijoada";
  mainDish.appendChild(mainDishName);

  menuContent.appendChild(mainDish);

  // Dessert
  const dessert = document.createElement("div");
  dessert.classList.add("plateDiv"); // Add plateDiv for dessert

  const dessertImage = document.createElement("img");
  dessertImage.src = dessertImageSrc;
  dessertImage.classList.add("menuPhoto");
  dessert.appendChild(dessertImage);

  const dessertName = document.createElement("p");
  dessertName.classList.add("menuName");
  dessertName.innerHTML = "Natas do Céu";
  dessert.appendChild(dessertName);

  menuContent.appendChild(dessert);

  // Coffee
  const coffee = document.createElement("div");
  coffee.classList.add("plateDiv"); // Add plateDiv for coffee

  const coffeeImage = document.createElement("img");
  coffeeImage.src = coffeeImageSrc;
  coffeeImage.classList.add("menuPhoto");
  coffee.appendChild(coffeeImage);

  const coffeeName = document.createElement("p");
  coffeeName.classList.add("menuName");
  coffeeName.innerHTML = "Coffee";
  coffee.appendChild(coffeeName);

  menuContent.appendChild(coffee);
}

export { menu };
