const poke_container = document.getElementById("poke_container");
const pokemons_number = 36;
const colors = {
  grass: "#8dd694",
  water: "#8dc6e6",
  fire: "#e69d8d",
  bug: "#bddd7a",
  normal: "#b1b1b1",
  flying: "#c9adec",
  rock: "#b99d72",
  ground: "#efbe85",
  psychic: "#D053BC",
  ghost: "#835e94",
  dark: "#686868",
  steel: "#598fa3",
  poison: "#a55db1",
  electric: "#e7c859",
  fairy: "#eea1e2",
  fighting: "#e07f60",
  dragon: "#8859d5",
  ice: "#71d8de",
};
const borders = {
  grass: "#5dad65",
  water: "#6f9eca",
  fire: "#c67d6d",
  bug: "#a2c170",
  normal: "#959595",
  flying: "#a485cc",
  rock: "#957d59",
  ground: "#d0a068",
  psychic: "#a44094",
  ghost: "#684c79",
  dark: "#434343",
  steel: "#517c8b",
  poison: "#8a4a95",
  electric: "#d0b34a",
  fairy: "#c77fbc",
  fighting: "#b1664f",
  dragon: "#724cae",
  ice: "#65c1c6",
};

const main_types = Object.keys(colors);
const branch_types = Object.keys(borders);
console.log(main_types);
console.log(branch_types);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  createPokemonCard(pokemon);
};

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const poke_types = pokemon.types.map((el) => el.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  const poke_types_2 = pokemon.types.map((el) => el.type.name);
  const type_2 = branch_types.find((type) => poke_types_2.indexOf(type) > -1);
  const border = borders[type];

  pokemonEl.style.backgroundColor = color;
  pokemonEl.style.border = "medium solid" + border;

  const pokeInnerHTML = `
    <p>${pokemon.id}: ${pokemon.name}</p>
    <div class="img-container">
    <img src="${pokemon.sprites.front_default}"
    </div>
    <p>Type: ${pokemon.types[0].type.name}</p>
  `;

  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.style.display = "none";
  poke_container.appendChild(pokemonEl);
}

function detail() {
  document.getElementById("poke_container").style.display = "flex";
}
