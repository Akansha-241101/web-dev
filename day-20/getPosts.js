async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data.slice(0, 10));
}

getPosts();

console.log("hi");
