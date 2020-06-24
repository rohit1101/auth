const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", () => {
  localStorage.setItem(
    "MyCredentials",
    JSON.stringify(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    )
  );

  getAccess();
});

const endpoint = `https://jsonplaceholder.typicode.com/posts`;

async function getAccess(e) {
  let token = JSON.parse(localStorage.getItem("MyCredentials"));
  $;
  const response = await fetch(endpoint, {
    headers: {
      Authentication: `Bearer ${token}`,
    },
  });
  const data = response.json();
  console.log(data);
}
