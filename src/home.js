import initialPageImage from "./images/restImage.jpg";

function home() {
  const contentDiv = document.querySelector(".content");

  const headerElement = document.createElement("h1");
  headerElement.innerHTML = "testing home";
  contentDiv.appendChild(headerElement);

  const myImage = document.createElement("img");
  myImage.src = initialPageImage;
  myImage.classList.add("inicialImage");
  contentDiv.appendChild(myImage);

  return contentDiv;
}

export { home };
