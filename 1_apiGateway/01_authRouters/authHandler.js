async function authHandler(crudOperations, crudDestination, data) {
  // console.log(
  //   "destination is " + crudDestination,
  //   "data is " + data,
  //   "and operations is " + crudOperations
  // );

  const response = await fetch("http://localhost:8083/" + crudDestination, {
    method: crudOperations,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.log("The service AuthManager cannot provide or validate " + data);
  }

  const res = await response.json();
  return res;
}

exports.authHandler = authHandler;
