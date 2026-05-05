// Step 1: Fetch API
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json()) // convert to JSON

  // Step 2: filter data
  .then(data => data.filter(d => d.id <= 10))

  // Step 3: modify data
  .then(data => data.map(d => ({
    ...d,
    title: "Test " + d.title
  })))

  // Step 4: print result
  .then(data => console.log(data))

  // Step 5: error handling
  .catch(err => console.error("Error:", err));