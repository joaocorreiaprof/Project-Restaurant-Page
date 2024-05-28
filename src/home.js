function home() {
  const contentDiv = document.querySelector(".content");
  const homeContent = document.createElement("div");
  homeContent.classList.add("homeContent");
  contentDiv.appendChild(homeContent);

  const welcomeMessage = document.createElement("h1");
  welcomeMessage.classList.add("welcomeMessage");
  welcomeMessage.innerHTML = "Welcome";

  homeContent.appendChild(welcomeMessage);
}
export { home };
