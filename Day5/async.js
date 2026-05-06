// Api-1
async function getCatFact() {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const item = await res.json();

    const data = [item].filter(item => item.fact.length > 30);

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getCatFact();


// Api-2
async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    const products = data.products.filter(item => item.price > 50);

    console.log(products);
  } catch (error) {
    console.log(error);
  }
}

getProducts();


// Api-3
async function getCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getCountries();


// Api-4
async function getPosts() {
  try {
    const r = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await r.json();

    const titles = data
      .filter(p => p.userId === 1)
      .map(p => p.title);

    console.log(titles);
  } catch (error) {
    console.error(error);
  }
}

getPosts();


// Api-5
async function getUsers() {
  try {
    const r = await fetch("https://randomuser.me/api/?results=10");
    const obj = await r.json();

    const females = obj.results
      .filter(u => u.gender === "female")
      .map(u => u.name.first);

    console.log(females);
  } catch (error) {
    console.log(error);
  }
}

getUsers();


// Api-6
async function getDogFacts() {
  try {
    const r = await fetch("https://dogapi.dog/api/v2/facts");
    const obj = await r.json();

    const facts = obj.data.map(d => d.attributes.body);

    console.log(facts);
  } catch (error) {
    console.log(error);
  }
}

getDogFacts();


// Api-7
async function getQuotes() {
  try {
    const r = await fetch("https://zenquotes.io/api/quotes");
    const arr = await r.json();

    const quotes = arr
      .filter(q => q.q.length < 100)
      .map(q => q.q);

    console.log(quotes);
  } catch (error) {
    console.error(error);
  }
}

getQuotes();


// Api-8
async function getAstronauts() {
  try {
    const r = await fetch("http://api.open-notify.org/astros.json");
    const obj = await r.json();

    const names = obj.people.map(p => p.name);

    console.log(names);
  } catch (error) {
    console.log(error);
  }
}

getAstronauts();


// Api-9
async function getPokemon() {
  try {
    const r = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const obj = await r.json();

    const names = obj.results
      .filter(p => p.name.startsWith("b"))
      .map(p => p.name);

    console.log(names);
  } catch (error) {
    console.log(error);
  }
}

getPokemon();


// Api-10
async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    const todos = data.filter(d => d.id <= 10);

    console.log(todos);
  } catch (err) {
    console.log("Error", err);
  }
}

getTodos();