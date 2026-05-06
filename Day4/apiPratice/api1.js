//Api-1

fetch("https://catfact.ninja/fact")
.then(res=> res.json())
.then(item => [item])
 .then(item => item.filter(item => item.length > 30))

.then(data => console.log(data))  
.catch(error => console.log("Error: ",error))



//Api-2

fetch("https://dummyjson.com/products")
.then(res =>res.json())
.then(data => data.products)
.then(data=> data.filter(item=> item.price>50))
.then(data => console.log(data))


//Api-3

fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(data => console.log(data));

//Api-4

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(r => r.json())
  .then(a => a.filter(p => p.userId === 1))
  .then(a => a.map(p => p.title))
  .then(console.log)
  .catch(console.error);


//Api-5

fetch("https://randomuser.me/api/?results=10")
.then(r => r.json())
.then(obj => obj.results)
.then(arr => arr.filter(u => u.gender === "female"))
.then(arr => arr.map(u => u.name.first))
.then(console.log);


//Api-6

fetch("https://dogapi.dog/api/v2/facts")
  .then(r => r.json())
  .then(obj => obj.data)
  .then(arr => arr.map(d => d.attributes.body))
  .then(console.log);



//Api-7

fetch("https://zenquotes.io/api/quotes")
.then(r => r.json())
.then(arr => arr.filter(q => q.q.length < 100))
.then(arr => arr.map(q => q.q))
.then(console.log)
.catch(console.error);



//Api-8

fetch("http://api.open-notify.org/astros.json")
.then(r => r.json())
.then(obj => obj.people)
.then(arr => arr.map(p => p.name))
.then(console.log);




//Api-9

fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
.then(r => r.json())
.then(obj => obj.results)
.then(arr => arr.filter(p => p.name.startsWith("b")))
.then(arr => arr.map(p => p.name))
.then(console.log);



//Api-10

fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(data => data.filter(d => d.id <=10))
.then(data => console.log(data))
.catch( err => console.log("Error", err));