async function readUser(data) {
  const response = await fetch("http://localhost:8084/read", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data }),
  });

  if (!response.ok) {
    console.log("The service UM could not read the user!", data);
  }

  const res = await response.json();
  return res;
}

exports.readUser = readUser;
