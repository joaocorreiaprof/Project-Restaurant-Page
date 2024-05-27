function about() {
  const contentDiv = document.querySelector(".content");

  const headerElement = document.createElement("h1");
  headerElement.innerHTML = "Testing About ";

  contentDiv.appendChild(headerElement);

  return contentDiv;
}

export { about };
