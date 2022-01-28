const inpt = document.getElementById("write-title");
const movieTitle = document.getElementById("movie-title");
const releaseYear = document.getElementById("release-year");
const movieActors = document.getElementById("movie-actors");
const countryName = document.getElementById("country-name")
const flagCurrency = document.getElementById("flag-currency");
const date = new Date();
const currentYear = date.getFullYear();

const omdbApiKey = "f6a5b808";
const apiUrl = `http://www.omdbapi.com/?&apikey=${omdbApiKey}&t=`;
const countryApi = `https://restcountries.com/v3.1/name/`;


async function getMovieInfo() {
  try {
    const searchedTitle = inpt.value;
    const omdbApiUrl = `${apiUrl}${searchedTitle}`;
    const response = await fetch(omdbApiUrl);
    const jsonData = await response.json();
    const { Title, Year, Actors, Country } = jsonData;
    movieTitle.innerText = Title;
    releaseYear.innerHTML = (currentYear == Year) ? `This Year` : `${currentYear - Year} years ago`;
    movieActors.innerHTML = actorsNames(Actors);
    countryName.innerHTML = Country;
    const arrOfcountry = Country.split(",");
    getFlagAndCurrency(arrOfcountry);
  } catch (error) {
    movieTitle.innerHTML = "OOPS, Wrong Title";
    releaseYear.innerHTML = "";
    movieActors.innerHTML = "";
    countryName.innerHTML = "";
    console.log(error);
  }
}

function actorsNames(str) {
  const fullArr = str.split(" ");
  let nameArr = [];
  for (let i = 0; i < fullArr.length; i++) {
    if (i % 2 == 0) {
      nameArr.push(fullArr[i]);
    }
  }
  return nameArr.toString();
}

async function getFlagAndCurrency(arr) {
  for (let i = 0; i < arr.length; i++) {
    const apiResponse = await fetch(`${countryApi}${arr[i]}`);
    const givenData = await apiResponse.json();
    const currencyKey = Object.keys(givenData[0].currencies)
    const countryFlag = document.createElement('img');
    const countryCurrancy = document.createElement('span');

    flagCurrency.append(countryFlag, countryCurrancy);
    countryFlag.src = givenData[0].flags.png;
    countryCurrancy.innerHTML = givenData[0].currencies[currencyKey].name;
  }
}

export { getMovieInfo,getFlagAndCurrency, flagCurrency, omdbApiKey, apiUrl, countryApi };