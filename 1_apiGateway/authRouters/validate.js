async function validate(token) {
  const response = await fetch("http://localhost:8083/validate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  });

  if (!response.ok) {
    console.log("Could not validate the token!", token);
  }

  const authCheck = await response.json();
  return authCheck;
}

exports.validate = validate;
