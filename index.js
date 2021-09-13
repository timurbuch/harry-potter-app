import { fetchData } from "./fetch.js";
import { renderCards } from "./createCard.js";

const init = () => {
  fetchData();
};

init();
const characters = fetchData();
