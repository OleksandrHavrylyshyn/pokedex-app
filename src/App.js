import { useEffect, useState } from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import CardDescription from "./components/CardDescription";

import { CardGrid } from "./components/styles/CardGrid.styled";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

import {
  urlListRequest,
  pokemonListRequest,
  pokemonRequest,
} from "./service/pokedex-service";
import { StyledLoading } from "./components/styles/Loading.styled";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=12"
  );
  const [description, setDescription] = useState();
  const [isLoading, setLoading] = useState(true);

  const fetchList = async (url) => {
    try {
      setLoading(true);
      const response = await urlListRequest(url);
      setSearch(response.loadmore);
      const pokemonList = await pokemonListRequest(response.searchList);
      setPokemons(pokemonList);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchPokemon = async (id) => {
    try {
      const response = await pokemonRequest(id);
      setDescription(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchList(search);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      {isLoading && <StyledLoading />}
      <Header />
      <Container>
        <CardGrid className={description ? "" : "descHidden"}>
          {pokemons.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                handleClick={fetchPokemon}
                id={pokemon.id}
                name={pokemon.name}
                sprite={pokemon.sprite}
                types={pokemon.types}
              />
            );
          })}
          {pokemons.length !== 0 && (
            <button onClick={() => fetchList(search)}>Load More</button>
          )}
        </CardGrid>
        {description && <CardDescription description={description} />}
      </Container>
    </div>
  );
}

export default App;
