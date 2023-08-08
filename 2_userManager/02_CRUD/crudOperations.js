const User = require("../01_dataModel/userDataModel");

async function add(data) {
  const formattedDate = new Date().toLocaleString(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const UserCreated = new User({
    email: data.email,
    firstName: data.firstName,
    surname: data.surname,
    password: data.password,
    createdAt: formattedDate,
    address: data.address,
    phone: data.phone,
  });

  UserCreated.save()
    .then(() => {
      console.log("User saved in MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
}

exports.add = add;
