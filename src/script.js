import "./style.css";
import { getMovieInfo, flagCurrency } from "./first.js";
import { runtimeAndPopulation, runtimesArr, populationArr } from "./second.js";

const movieSearchBnt = document.getElementById("movie-search-btn");
const sumSearchBtn = document.getElementById("population-search-btn");

movieSearchBnt.addEventListener("click", (event) => {
  event.preventDefault();
  getMovieInfo();
  flagCurrency.innerHTML = "";
});

sumSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  runtimeAndPopulation();
  runtimesArr = [];
  populationArr = [];
});