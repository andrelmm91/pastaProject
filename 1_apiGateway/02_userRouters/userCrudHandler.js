async function userCrudHandler(crudOperations, crudDestination, data) {
  // console.log(
  //   "destination is " + crudDestination,
  //   "data is " + data,
  //   "and operations is " + crudOperations
  // );

  const response = await fetch("http://localhost:8081/" + crudDestination, {
    method: crudOperations,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.log(
      "The service UserManager could not " + crudDestination + " the user!",
      "data is " + data,
      " and operations is " + crudOperations
    );
  }

  const res = await response.json();
  return res;
}

exports.userCrudHandler = userCrudHandler;
