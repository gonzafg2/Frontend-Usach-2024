// Funciones nativas asíncronas
// setTimeout
// setInterval
// clearInterval

// Web API - Fetch

const URL = "https://pokeapi.co/api/v2/pokemon/";
/*
const getPokemons = () => {
  console.log("Invocando a getPokemons");

  return fetch(URL);
};

const pokemones = getPokemons()
  .then((response) => response.json().then((data) => data))
  .catch((error) => console.error(error));

// Async / Await

const getPoke = async () => {
  try {
    const response = await fetch(URL);
    const dataRaw = await response.json();
    const status = dataRaw.status;
    if (status === 404) console.error("Error 404");
    else if (status === 500) console.error("Error 500");
    return dataRaw.results;
  } catch (error) {
    console.error(error);
  }
};

getPoke();
*/
import axios from "axios";
// const axios = require("axios");

const getPokeAxios = async () => {
  try {
    const response = await axios(URL);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

const data = (async () => {
  const res = await getPokeAxios();
  console.log("res: ", res);
})();
