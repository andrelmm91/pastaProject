async function createUser(data) {
  const response = await fetch("http://localhost:8084/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data }),
  });

  if (!response.ok) {
    console.log("The service UM could not create the user!", data);
  }

  const res = await response.json();
  return res;
}

exports.createUser = createUser;
