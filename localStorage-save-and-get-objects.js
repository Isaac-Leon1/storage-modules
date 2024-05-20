// Save an item in localStorage
fetch("https://jsonplaceholder.typicode.com/posts/7") // Make an HTTP GET request to the API
  .then(response => response.json()) // Convert the response to JSON
  .then(post => {
    // Store the converted JSON in localStorage with the key "post7"
    localStorage.setItem("post7", JSON.stringify(post));
    // Print the JSON to the console
    console.log(`The obtained JSON is: ${JSON.stringify(post)}`);
  })
  // In case of errors in any of the promises
  .catch(error => console.log(`An error occurred: ${error}`));

// Retrieve an item from localStorage
// Retrieve the JSON string from localStorage using the key "post7"
let post = JSON.parse(localStorage.getItem("post7")); // Convert the string to a JavaScript object
// Print the JavaScript object to the console
console.log(post);

