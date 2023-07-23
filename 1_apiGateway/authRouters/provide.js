async function provide(email) {
  const response = await fetch("http://localhost:8083/provide", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  });

  if (!response.ok) {
    console.log("Could not provide token!", email);
  }

  const token = await response.json();
  return token;
}

exports.provide = provide;
