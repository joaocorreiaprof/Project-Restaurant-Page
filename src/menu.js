function menu() {
  const contentDiv = document.querySelector(".content");

  const headerElement = document.createElement("h1");
  headerElement.innerHTML = "Testing home ";

  contentDiv.appendChild(headerElement);

  return contentDiv;
}

export { menu };
