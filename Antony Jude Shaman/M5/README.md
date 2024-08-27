## Milestone - 5

### Table of Contents

-[cURL Commands](#cURL-Commands)  
-[What is cURL?](#What-is-cURL?)  
-[cURL Commands](#cURL-Commands)  
-[Testing Car Showroom Application with cURL](#Testing-Car-Showroom-Application-with-cURL)  
-[Wget vs cURL](#Wget-vs-cURL)  
-[GraphQL Basics](#GraphQL-Basics)  
-[A simple GraphQL Application](#A-simple-GraphQL-Application)  
-[GraphQL Queries](#GraphQL-Queries)  
-[Redis Basics](#Redis-Basics)  
-[A Redis Application with various data structures](#A-Redis-Application-with-various-data-structures)  
-[Redis Commands used in the application](#Redis-Commands-used-in-the-application)  
-[Docker Basics](#Docker-Basics)  
-[Components of Docker](#Components-of-Docker)  
-[Docker Commands](#Docker-Commands)  
-[Dockerfile](#Dockerfile)  
-[Docker Compose](#Docker-Compose)  
-[Docker Compose Commands](#Docker-Compose-Commands)  
-[.dockerignore file](#.dockerignore-file)

### cURL Commands

#### What is cURL?

- cURL is a command-line tool that allows you to transfer data to or from the internet.

- It is a client-side application that allows you to send and receive data using URLs. It is a command-line utility that is used to transfer data to and from the server.

- It supports various protocols like HTTP, HTTPS, FTP, FTPS, SFTP, etc.

#### cURL Commands

- cURL is a powerful tool that can be used to interact with APIs, download files, and more.

- Some cURL commands:

1. GET Request

```bash
curl http://example.com
```

2. POST Request

```bash
curl -X POST http://example.com
```

3. PUT Request

```bash
curl -X PUT http://example.com
```

4. DELETE Request

```bash
curl -X DELETE http://example.com
```

5. Download File

```bash
curl -O http://example.com/file.txt
```

6. Upload File

```bash
curl -F "path/to/file" http://example.com/upload
```

7. Set Headers

```bash
curl -H "Content-Type: application/json" http://example.com
```

8. Set Basic Authentication

```bash
curl -u username:password http://example.com
```

9. Follow Redirects

```bash
curl -L http://example.com
```

10. Save Output to File

```bash
curl -o file.txt http://example.com
```

11. Send Data in Request Body

```bash
curl -d "key1=value1&key2=value2" http://example.com
```

12. Send JSON Data

```bash
curl -d @file.name -H "Content-Type: application/json" http://example.com
```

### Testing Car Showroom Application with cURL

1. Register a new user

```bash
curl -X POST -H "Content-Type: application/json" -d @data.json https://car-showroom-q8jq.onrender.com/api/user/regis
ter
```

2. Login with the registered user

```bash
curl -X POST -H "Content-Type: application/json" -d @data.json https://car-showroom-q8jq.onrender.com/api/user/login
```

3. Get all cars

```bash
curl -X GET https://car-showroom-q8jq.onrender.com/api/car/view-all-cars
```

4.  Verify user access token

```bash
curl -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjY2Y2M2NDliMzA2M2E4ZTMyMDFhZjMwNCIsImlhdCI6MTcyNDY3MTEzMX0.5WPnZyKqpOuZ2kcA5PmDV4UqFZb6YLC2QjIy8jWZguc" https://car-showroom-backend-jmn2.onrender.com/api/user/verify-user
```

5. Ping the server and all the routes

```bash
curl https://car-showroom-q8jq.onrender.com/
```

> [!IMPORTANT]
> Contents of data.json for register
>
> {  
> "username": "ShamanAntony",  
> "email": "antony@gmail.com",  
> "password": "Shaman12"  
> }
>
> Contents of data.json for login
>
> {  
> "credential": "ShamanAntony",  
> "password": "Shaman12"  
> }

### Wget vs cURL

- Wget and cURL are both command-line tools that allow you to download files from the internet.

- Wget is a tool that is used to download files from the internet. It is a non-interactive tool that can download files in the background.

- cURL is a tool that is used to transfer data to and from the internet. It is a client-side application that allows you to send and receive data using URLs.

```bash
wget http://example.com/file.txt
```

```bash
curl -O http://example.com/file.txt
```

### GraphQL Basics

- GraphQL is a query language for APIs and a runtime for executing those queries.

- It was developed by Facebook in 2012 and released as an open-source project in 2015.

- GraphQL allows clients to request only the data they need, making it more efficient than REST APIs.

- It provides a more flexible and powerful way to interact with APIs.

- GraphQL queries are sent as POST requests to the server.

### A simple GraphQL Application

```javascript
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

mongoose
  .connect("mongo")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(`Error: ${err}`));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]
    user(email: String): User
  }

  input UserInput {
    name: String!
    email: String!
  }

  type Mutation {
    addUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): String
  }
`);

const resolvers = {
  users: async () => {
    try {
      return await User.find();
    } catch (err) {
      return { error: err };
    }
  },
  user: async ({ email }) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return "User not found";
      }
      return user;
    } catch (err) {
      return { error: err };
    }
  },
  addUser: async ({ input }) => {
    const newUser = new User({
      name: input.name,
      email: input.email,
    });

    try {
      await newUser.save();
      return newUser;
    } catch (err) {
      return { error: err };
    }
  },
  updateUser: async ({ id, input }) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, input, {
        new: true,
      });
      if (!updatedUser) {
        return "User not found";
      }
      return updatedUser;
    } catch (err) {
      return { error: err };
    }
  },
  deleteUser: async ({ id }) => {
    try {
      const deleteUser = await User.findByIdAndDelete(id);
      if (!deleteUser) {
        return "User not found";
      }
      return "User deleted";
    } catch (err) {
      return { error: err };
    }
  },
};

const app = express();

app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server is running");
});
```

### GraphQL Queries

1. Create a new user

```graphql
mutation {
  addUser(input: { name: "Antony", email: "antony@gmail.com" }) {
    id
    name
    email
  }
}
```

2. Get all users

```graphql
query {
  users {
    id
    name
    email
  }
}
```

3. Get a user by email

```graphql
query {
  user(email: "antony@gmail.com") {
    id
    name
    email
  }
}
```

4. Update a user

```graphql
mutation {
  updateUser(
    id: "66cd692226d193ebb979c6b2"
    input: { name: "Shaman", email: "shaman@gmail.com" }
  ) {
    id
    name
    email
  }
}
```

5. Delete a user

```graphql
mutation {
  deleteUser(id: "66cd692226d193ebb979c6b2")
}
```

> [!IMPORTANT]
>
> - All requests are sent as POST requests to the server.
> - Mutations are used to create, update, and delete data.
> - Queries are used to retrieve data.

### Redis Basics

- Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker.

- It is a key-value store that is used to store data in memory for fast access.

- Redis supports various data structures like strings, lists, sets, sorted sets, hashes, and more.

```bash
# Start Redis server
redis-server
```

### A Redis Application with various data structures

```javascript
const { createClient } = require("redis");

const client = createClient({
  url: "redis://localhost:6379",
});

const subscriber = createClient({
  url: "redis://localhost:6379",
});

client.on("error", (err) => {
  console.error(`Error: ${err}`);
});

const connect = async () => {
  await client.connect();
  await subscriber.connect();
  console.log("Connected to Redis");
};

const disconnect = async () => {
  await client.quit();
  await subscriber.quit();
  console.log("\nDisconnected from Redis");
};

// Strings
const RedisStrings = async () => {
  console.log("\nString operations");
  await client.set("name", "Antony");
  const name = await client.get("name");
  const length = await client.strLen("name");
  const exists = await client.exists("name");
  console.log("Value:", name, " length:", length, " Exists: ", exists);

  const res = await client.del("name");
  console.log("Name key deleted:", res);
};

// Lists
const RedisLists = async () => {
  console.log("\nList operations");
  await client.rPush("names", ["Antony", "Jude", "Shaman"]);
  const names = await client.lRange("names", 0, -1);
  console.log("Names List:", names);
  const name = await client.lPop("names");
  console.log("Popped first element:", name);
  const res = await client.del("names");
  console.log("Names key deleted:", res);
};

// Sets
const RedisSets = async () => {
  console.log("\nSet operations");
  await client.sAdd("names", ["Antony", "Jude", "Shaman"]);
  const names = await client.sMembers("names");
  console.log("Names Set:", names);
  const name = await client.sRem("names", "Antony");
  console.log("Removed Antony:", name);
  const exists = await client.sIsMember("names", "Antony");
  console.log("Antony exists:", exists);
  await client.del("names");
  console.log("Names key deleted");
};

// HashMaps
const RedisHashMaps = async () => {
  console.log("\nHashMap operations");
  await client.hSet("user:1", "name", "Antony");
  await client.hSet("user:2", "name", "Jude");
  await client.hSet("user:1", "age", 21);

  const user1 = await client.hGet("user:1", "name");
  console.log("User 1 name:", user1);
  const user2 = await client.hGet("user:2", "name");
  console.log("User 2 name:", user2);
  const fullUser1 = await client.hGetAll("user:1");
  console.log("Delete age from user 1");
  await client.hDel("user:1", "age");
  const exists = await client.hExists("user:1", "age");
  console.log("Age exists:", exists);
  console.log("User 1:", fullUser1);
};

// Sorted Sets
const RedisSortedSets = async () => {
  console.log("\nSorted Set operations");
  await client.zAdd("users", { score: 1, value: "Antony" });
  await client.zAdd("users", { score: 3, value: "Jude" });
  await client.zAdd("users", { score: 2, value: "Shaman" });

  const users = await client.zRangeWithScores("users", 0, -1);
  console.log("Users in order of score: \n", users);

  const card = await client.zCard("users");
  console.log("Users count:", card);

  const count = await client.zCount("users", 1, 2);
  console.log("Users count with scores from 1 to 2:", count);

  const removed = await client.zRem("users", "Jude");
  console.log("Removed Jude:", removed);

  console.log("Users count after removing Jude:", await client.zCard("users"));
};

// Publish/Subscribe
const RedisPubSub = async () => {
  console.log("\nPub/Sub operations");

  await subscriber.subscribe("news", (message) => {
    console.log(`Received message: ${message}`);
  });

  console.log("Subscribed to 'news'");

  await new Promise((resolve) => setTimeout(resolve, 300));

  await client.publish("news", "Hello World!");
  await client.publish("news", "Good Morning!");
};

connect().then(async () => {
  try {
    await RedisStrings();
    await RedisLists();
    await RedisSets();
    await RedisHashMaps();
    await RedisSortedSets();
    await RedisPubSub();
  } catch (err) {
    console.error(err);
  } finally {
    await disconnect();
  }
});
```

### Redis Commands used in the application

| Strings | Lists  | Sets      | HashMaps | Sorted Sets      | Publish/Subscribe |
| ------- | ------ | --------- | -------- | ---------------- | ----------------- |
| set     | rPush  | sAdd      | hSet     | zAdd             | subscribe         |
| get     | lRange | sMembers  | hGet     | zRangeWithScores | publish           |
| strLen  | lPop   | sRem      | hGetAll  | zCard            |                   |
| exists  | del    | sIsMember | hDel     | zCount           |                   |
| del     |        |           | hExists  | zRem             |                   |

### Docker Basics

- Docker is a platform that allows you to develop, ship, and run applications in containers.

- It basically packages your application and its dependencies into a container that can be run on any system.

- Docker containers are lightweight, portable, and isolated environments that run your application.

#### Components of Docker

1. Docker Engine: It is the core component of Docker that runs and manages containers.

2. Docker Image: It is a read-only template that contains the application and its dependencies.

3. Docker Container: It is a runnable instance of a Docker image.

4. Docker Registry: It is a repository that stores Docker images.

#### Docker Commands

1. Build an image

```bash
docker build -t username/repo:tag .
```

2. Run a container

```bash
docker run -p 3000:3000 username/repo:tag
```

3. Build an image with target

```bash
docker build --target dev -t username/repo:tag  .
```

4. Run a container in detached mode

```bash
docker run -d -p 3000:3000 username/repo:tag
```

5. List all containers

```bash
docker ps -a
```

6. Stop a container

```bash
docker stop container_id
```

7. Remove a container

```bash
docker rm container_id
```

8. List all images

```bash
docker images
```

9. Remove an image

```bash
docker rmi image_id
```

10. Push an image to Docker Hub

```bash
docker push username/repo:tag
```

11. Pull an image from Docker Hub

```bash
docker pull username/repo:tag
```

### Dockerfile

```dockerfile
# Use a base image
FROM node:20-alpine as base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

FROM base as dev

EXPOSE 3000

ENV NODE_ENV=development

ENTRYPOINT ["npm"]

CMD ["dev"]

FROM base as prod

ENV NODE_ENV=production

ENTRYPOINT ["npm"]

CMD ["start"]
```

### Docker Compose

- Docker Compose is a tool that allows you to define and run multi-container Docker applications.

- It uses a YAML file to configure the application's services and dependencies.

```yaml
services:
  app:
    build:
      context: .
      target: dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
    command: ["npm", "run", "dev"]
```

### Docker Compose Commands

1. Build and run the application

```bash
docker-compose up
```

2. Build and run the application in detached mode

```bash
docker-compose up -d
```

3. Stop the application

```bash
docker-compose down
```

4. List all services

```bash
docker-compose ps
```

5. Restart a service

```bash
docker-compose restart service_name
```

6. Remove all containers

```bash
docker-compose rm
```

7. Build the application

```bash
docker-compose build
```

8. Run a single service

```bash
docker-compose run service_name
```

### .dockerignore file

- The `.dockerignore` file is used to exclude files and directories from the Docker build context.

- It is similar to the `.gitignore` file and helps reduce the size of the Docker image.

```bash
node_modules

Logs
```
