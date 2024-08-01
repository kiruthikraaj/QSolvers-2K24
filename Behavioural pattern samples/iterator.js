// Iterator pattern lets us to traverse through a list, tree, linked list or graph without exposing the data structure used.

// It is useful to create a custom loop that has no knowledge and does not reveal the structure of our data.

class System {
  constructor(name) {
    this.name = name;
    this.users = [];
  }

  addUser(user) {
    let u = new User(user.name);
    this.users.push(u);
    return u;
  }

  createIterator() {
    return new UserIterator(this.users);
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserIterator {
  constructor(users) {
    this.users = users;
    this.ind = 0;
  }

  hasNext() {
    return this.ind < this.users.length;
  }

  next() {
    return this.users[this.ind++].name;
  }
}

const users = [
  {
    name: "Antony",
  },
  {
    name: "Jude",
  },
  {
    name: "Shaman",
  },
];
let system = new System();
let userObj = users.map((user) => system.addUser(user));

// userObj.forEach((user) => console.log(user.name));

let iterator = system.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
