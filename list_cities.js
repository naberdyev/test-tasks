function listCities(arr) {
  const list = arr.join(", ") + ".";
  return list;
}

console.log(listCities(["Москва", "Санкт-Петербург", "Самара", "Воронеж"]));
//time spent solving task - 1 minute.
