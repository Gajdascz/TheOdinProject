const networkError = (response) =>
  new Error(`Network Response Error: ${response.status} ${response.text}`);

const POKEAPI = "https://pokeapi.co/api/v2";

const maxId = await (async () => {
  const url = `${POKEAPI}/pokemon-species`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw networkError(response);
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error(`MaxId Fetch Error: ${error}`);
  }
})();

const getRandomId = () => Math.floor(Math.random() * maxId) + 1;

async function fetchPokemonById(id) {
  const url = `${POKEAPI}/pokemon/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw networkError(response);
    const data = await response.json();
    return {
      id: data.id - 1,
      name: data.name,
      type: data.types[0].type.name,
      img: data.sprites.front_default,
    };
  } catch (error) {
    console.error(`Pokemon Fetch Error: ${error}`);
  }
}

async function fetchRandomPokemonData(quantity) {
  const pokemon = new Map();
  while (pokemon.size < quantity) {
    const data = await fetchPokemonById(getRandomId());
    pokemon.set(data.id, data);
  }
  return Array.from(pokemon.values());
}

export { fetchRandomPokemonData, maxId };
