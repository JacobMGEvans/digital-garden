import fetch from "node-fetch";

// const response = await fetch(
//   `https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699`,
//   { method: `GET` }
// );
// const myJson = await response.json();
// console.log(JSON.stringify(myJson));

async function someCall(someAPIURL) {
  // I almost forgot how to do .then() lol
  const data = await fetch(`${someAPIURL}`, { method: "GET" });
  return data;
}

console.log(
  await someCall(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699`
  )
);
