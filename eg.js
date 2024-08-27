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

//////////////////////////////
////////// STRINGS ///////////
//////////////////////////////

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

//////////////////////////////
////////// LISTS /////////////
//////////////////////////////

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

//////////////////////////////
////////// SETS //////////////
//////////////////////////////

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

//////////////////////////////
////////// HASHMAPS //////////
//////////////////////////////

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

//////////////////////////////
//////// SORTED SETS ////////
////////////////////////////
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
