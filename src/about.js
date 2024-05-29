import oldCouple from "./images/oldCouple.jpg";
function about() {
  const contentDiv = document.querySelector(".content");
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("aboutContent");
  contentDiv.appendChild(aboutContent);

  //left div

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftDiv");
  aboutContent.appendChild(leftDiv);

  const img = document.createElement("img");
  img.src = oldCouple;
  img.classList.add("oldCouple");
  leftDiv.appendChild(img);

  const aboutText = document.createElement("div");
  aboutText.classList.add("aboutText");
  leftDiv.appendChild(aboutText);
  const message = document.createElement("p");
  message.classList.add("message");
  message.innerHTML = `
  In the heart of a charming Portuguese village, "Fado e Sabores" was born—a place where tradition and passion meet. Founded by Dona Maria and Mr. António, the restaurant is a tribute to Portugal's rich cultural heritage.
  
  Dona Maria, known for her melodious fado voice and recipes passed down through generations, teamed up with António, a talented guitarist. Together, they decided to create a welcoming space where music and gastronomy blend seamlessly.
  
  On Friday nights, the sound of fado fills the air as patrons enjoy typical dishes like bacalhau à brás and pastéis de nata, prepared with fresh ingredients and love. Every meal at "Fado e Sabores" is a celebration of Portuguese traditions and flavors.
  
  Come and feel at home at "Fado e Sabores," where every moment is a unique and unforgettable experience.
`;
  aboutText.appendChild(message);

  //right div
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("rightDiv");
  aboutContent.appendChild(rightDiv);

  const rightInfo = document.createElement("div");
  rightInfo.classList.add("rightInfo");
  rightDiv.appendChild(rightInfo);

  const contactInfo = document.createElement("h2");
  contactInfo.classList.add("contactInfo");
  contactInfo.innerHTML = "Contact Information";

  const phoneInfo = document.createElement("p");
  phoneInfo.innerHTML = "Phone Number: +351 000 000 000";
  phoneInfo.classList.add("phoneInfo");

  const emailInfo = document.createElement("p");
  emailInfo.innerHTML = "Email: fachada@fado&sabores.com";
  emailInfo.classList.add("emailInfo");

  const addressInfo = document.createElement("p");
  addressInfo.innerHTML =
    "Address: Rua da Melodia, nº 7, Aldeia do Fado Feliz, 3720-123, Portugal";

  rightInfo.appendChild(contactInfo);
  rightInfo.appendChild(phoneInfo);
  rightInfo.appendChild(emailInfo);
  rightInfo.appendChild(addressInfo);
}

export { about };
