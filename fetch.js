import { renderCards } from "./createCard";

export const fetchData = () => {
  fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const slytherin = data.filter(
        (character) => character.house === "Slytherin"
      );
      const gryffindor = data.filter(
        (character) => character.house === "Gryffindor"
      );
      const hufflepuff = data.filter(
        (character) => character.house == "Hufflepuff"
      );
      const ravenclaw = data.filter(
        (character) => character.house == "Ravenclaw"
      );
      // section variables
      const slySection = document.querySelector(".section-slytherin");
      const grySection = document.querySelector(".section-gryffindor");
      const hufSection = document.querySelector(".section-hufflepuff");
      const ravSection = document.querySelector(".section-ravenclaw");
      // function calls to render
      renderCards(slytherin, slySection);
      renderCards(gryffindor, grySection);
      renderCards(hufflepuff, hufSection);
      renderCards(ravenclaw, ravSection);
    });
};
