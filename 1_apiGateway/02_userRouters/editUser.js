async function editUser(data) {
  const response = await fetch("http://localhost:8084/edit", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data }),
  });

  if (!response.ok) {
    console.log("The service UM could not edit the user!", data);
  }

  const res = await response.json();
  return res;
}

exports.editUser = editUser;
