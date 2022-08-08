import axios from "axios";

export const urlListRequest = (url) => {
  return axios.get(url).then((res) => {
    return {
      loadmore: res.data.next,
      searchList: res.data.results,
    };
  });
};

export const pokemonListRequest = (list) => {
  let promiseArray = list.map((url) => axios.get(url.url));
  return Promise.all(promiseArray).then((res) =>
    res.map((pokemon) => ({
      id: pokemon.data.id,
      name: pokemon.data.name,
      sprite: pokemon.data.sprites.front_default,
      types: pokemon.data.types,
    }))
  );
};

export const pokemonRequest = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.data);
}
