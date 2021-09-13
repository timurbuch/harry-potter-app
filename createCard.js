export const renderCards = (arr, section) => {
  section.innerHTML = "";
  arr.forEach((character) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const name = document.createElement("h2");
    name.classList.add("card-name");
    name.innerText = character.name;

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src", character.image);

    const house = document.createElement("p");
    house.classList.add("card-p");
    house.innerText = character.patronus;

    const birthday = document.createElement("p");
    birthday.classList.add("card-p");
    birthday.innerText = character.dateOfBirth;

    cardDiv.appendChild(name);
    cardDiv.appendChild(image);
    cardDiv.appendChild(house);
    cardDiv.appendChild(birthday);
    section.appendChild(cardDiv);
  });
};
