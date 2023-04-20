// Add your code here
function submitData(name, email) {
  const data = {
    name,
    email,
  };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      const user = document.createElement("div");
      user.textContent = data.id;
      document.querySelector("body").appendChild(user);
    })
    .catch((error) => {
      const errorMessage = document.createElement("div");
      errorMessage.textContent = error.message;
      document.querySelector("body").appendChild(errorMessage);
      console.log(error.message);
    });
}
