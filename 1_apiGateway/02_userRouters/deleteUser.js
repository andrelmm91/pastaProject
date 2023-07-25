async function deleteUser(data) {
  const response = await fetch("http://localhost:8084/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data }),
  });

  if (!response.ok) {
    console.log("The service UM could not delete the user!", data);
  }

  const res = await response.json();
  return res;
}

exports.deleteUser = deleteUser;
