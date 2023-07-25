async function userCrudHandler({ crudOperations, crudDestination, data }) {
  const response = await fetch("http://localhost:8084/" + crudDestination, {
    method: crudOperations,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data }),
  });

  if (!response.ok) {
    console.log(
      "The service UM could not " + crudDestination + " the user!",
      data
    );
  }

  const res = await response.json();
  return res;
}

exports.userCrudHandler = userCrudHandler;
