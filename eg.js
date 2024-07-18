const person = {
  name: "Antony",
  age: 21,
  address: {
    city: "Chennai",
    state: "TamilNadu",
  },
};

for (let key in person) {
  if (typeof person[key] === "object") {
    for (let key1 in person[key]) {
      console.log(key1, person[key][key1]);
    }
  } else {
    console.log(key, person[key]);
  }
}

const person2 = [{ name: "Antony" }, { age: 21 }];

for (let item of person2) {
  if (typeof item === "object") {
    for (let key1 in item) {
      console.log(key1[0].toUpperCase() + key1.substring(1), item[key1]);
    }
  }
}
