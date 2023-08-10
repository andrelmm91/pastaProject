async function authHandler(crudDestination, data) {
  // console.log(
  //   "destination is " + crudDestination,
  //   "data is " + data,
  //   "and operations is " + crudOperations
  // );

  const response = await fetch("http://localhost:8083/" + crudDestination, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.log("The service AuthManager cannot provide or validate " + data);
  }

  const res = await response.json();
  return res;
}

async function validateToken(crudDestination, data) {
  try {
    const response = await authHandler(crudDestination, data);
    return response;
  } catch (error) {
    console.log("could not validate the token", error);
  }
}

exports.authHandler = authHandler;
exports.validateToken = validateToken;
