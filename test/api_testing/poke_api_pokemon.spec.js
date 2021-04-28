const supertest = require('supertest');
const expect = require('chai').expect;

const baseUrl = supertest('https://pokeapi.co');
const apiEndPoint = '/api/v2/pokemon/1';

let response;
let bulbasaur;

const callPokeApi = async function (requestBody) {
  return baseUrl
    .get(apiEndPoint)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(requestBody);
};
describe(`Let's learn more about bulbasaur`, function () {
  before(async function () {
    response = await callPokeApi();
    bulbasaur = response.body;
  });

  it('status code is 200', function () {
    expect(response.status).to.equal(200);
  });

  it('should have a name bulbasaur', function () {
    expect(bulbasaur).to.have.property('name', 'bulbasaur');
  });
});

const expamplePokemon = {
  abilities: [{ ability: [Object], is_hidden: false, slot: 1 }],
  base_experience: 64,
  forms: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
    },
  ],
  game_indices: [
    {
      game_index: 153,
      version: {
        name: 'red',
        url: 'https://pokeapi.co/api/v2/version/1/',
      },
    },
  ],
  height: 7,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [
    {
      move: {
        name: 'razor-wind',
        url: 'https://pokeapi.co/api/v2/move/13/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
      ],
    },
  ],
  name: 'bulbasaur',
  order: 1,
  past_types: [],
  species: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny_female: null,
    other: { dream_world: [Object], 'official-artwork': [Object] },
    versions: {
      'generation-i': [Object],
      'generation-ii': [Object],
      'generation-iii': [Object],
      'generation-iv': [Object],
      'generation-v': [Object],
      'generation-vi': [Object],
      'generation-vii': [Object],
      'generation-viii': [Object],
    },
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
  ],
  weight: 69,
};
