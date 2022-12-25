const citiesHabitantsInMillions = [
  { cities: "london", habitants: 8.9 },
  { cities: "Rome ", habitants: 2.8 },
  { cities: "NewYork", habitants: 8.8 },
  { cities: "Paris", habitants: 2.1 },
];

const BuenosAires = {
  city: "Buenos Aires",
  habitants: 3100000,
};

const toMillionsAdapter = (city) => {
  city.habitants = parseFloat((city.habitants / 1000000).toFixed(1));
};

toMillionsAdapter(BuenosAires);

// we add the new city to array

citiesHabitantsInMillions.push(BuenosAires);

// this function return the largest habitants numbers

const mostHabitantsInMillions = () => {
  return Math.max(...citiesHabitantsInMillions.map((city) => city.habitants));
};

console.log(mostHabitantsInMillions());
