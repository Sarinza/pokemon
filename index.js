// Your initial data here
// Write your code below data.

let data = {
  abilities: [
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/',
      },
      is_hidden: true,
      slot: 3,
    },
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/',
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  base_experience: 64,
  forms: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
    },
  ],
  height: 7,
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
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
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
      ],
    },
  ],

  name: 'bulbasaur',
  order: 1,
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
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
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
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
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

//challenge 1
const height = data.height.toString();
const weight = data.weight.toString();
console.log(height);

//challenge 2
const heightInt = parseInt(height);
const weightInt = parseInt(weight);
const bmi = (height, weight) => {
  return weight/(height*height);
}
console.log(bmi(heightInt,weightInt));

//challenge 3
const pokemoName = data.name;
const wordCount = pokemoName.length;
const upperCaseName = pokemoName.toUpperCase();
console.log(pokemoName);

//challenge 4
if (pokemoName.startsWith('bulba',0)) {
  console.log('Name contains bulba');
}

//challenge 5
const firstTwo = pokemoName.slice(0,2);
const lastTwo = pokemoName.slice(pokemoName.length-2,pokemoName.length);
const mergeWord = `${firstTwo}${lastTwo}`;
console.log(mergeWord);

//challenge 6
const arr1 = mergeWord.split('');
console.log(arr1);

//challenge 7
const arr2 = data.types;
arr2.forEach(slot => {
  console.log(slot.type.name);
});

//challenge 8
const abilitiesIsArray = Array.isArray(data.abilities);
if (abilitiesIsArray === true) {
  console.log('abilities is array');
}

//challenge 9
const arr3 = data.abilities;
const abilitiesName = arr3[1].ability.name;
console.log(abilitiesName);

//challenge 10
arr3.push(arr3[1]);
console.log(arr3);

//challenge 11
for (let i = 0; i < data.stats.length; i++) {
  console.log(data.stats[i].base_stat);
}

//challenge 12
const arr4 = [];
for (let i = 0; i < data.stats.length; i++) {
  arr4.push(data.stats[i].base_stat);
  if (data.stats[i].base_stat >47) {
    console.log(data.stats[i].base_stat);
  }
}

//challenge 13
const arr5 = arr4.reverse();
console.log(arr5.join());

//challenge 14
console.log(arr4.slice(0,2))

//challenge 15
console.log(arr4.splice(0,1, 'Sam'));

//challenge 16
for (key in data) {
  if (data.hasOwnProperty(key)) {
      console.log(key + " = " + data[key]);
  }
}

//challenge 17
const avatar = document.querySelector('#pokemon-avatar');
const pok_name = document.querySelector('#pokemon-name');
const info = document.querySelector('#info');
const name = data.name;
const height2 = data.height;
const weight2 = data.weight;
const url = data.sprites.front_default;
avatar.src = url;
pok_name.innerHTML = name;
info.innerHTML = `
  <span> Height ${height}</span> -
  <span> Weight ${weight}</span>
`;