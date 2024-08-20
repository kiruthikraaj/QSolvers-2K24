## Milestone - 3

### Table of Contents

- [Express Configuration](#express-configuration)
- [Middlewares](#middlewares)
- [Routing](#routing)
- [Helmet](#helmet)
  - [Headers provided by Helmet](#headers-provided-by-helmet)
- [CORS](#cors)
- [REST API](#rest-api)
- [Params and Query](#params-and-query)
- [Express Validator](#express-validator)
  - [Methods in Express Validator](#methods-in-express-validator)
- [Nodemon](#nodemon)

### Express Configuration

- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

### Middlewares

- Middlewares are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

- Every request that is made to the server will pass through the middleware functions.

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

### Routing

- Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, DELETE, PUT, PATCH).

```javascript
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
```

- These routers can be imported into the main file and used as middleware.

```javascript
const express = require("express");

const app = express();

const router = require("./router");

app.use("/", router);
```

### Helmet

- Helmet helps you secure your Express apps by setting various HTTP headers.

- They are used to protect the application from attacks like Cross-Site-Scripting (XSS), Clickjacking, etc.

- They set secure headers like `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, etc.

```javascript
const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: { action: "deny" },
    referrerPolicy: { policy: "no-referrer" },
  })
);
```

### Headers provided by Helmet

Node-Modules included in Helmet.js are: Helmet.js comes with more built-in modules for increasing the security of the Express application.

- Content-Security-Policy: It sets up the Security Policy.
- Expect-CT: It is used for handling Certificate Transparency.
- X-DNS-Prefetch-Control: It is used for controlling the fetching of browser DNS.
- X-Frame-Options: It is used to prevent ClickJacking.
- X-Powered-By: It is used to remove X-Powered-By header. X-Powered-By header leaks the version of the server and its vendor.
- Public-Key-Pins: It is used for HTTP public key pinning.
- Strict-Transport-Security: It is used for HTTP Strict Transport policy.
- X-Download-Options: It restricts to various Download-Options.
- Cache control: It is used for disabling Client-Side caching.
- X-Content-Type-Options: It is used to prevent the Sniffing attack.
- Referrer-Policy: It is used to hide the referrer header.
- X-XSS-Protection: It is used to add protection to XSS attacks.

### CORS

- Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.

```javascript
const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,  Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
```

### REST API

- REST stands for Representational State Transfer.

- It is an architectural style that defines a set of constraints and properties based on HTTP.

- RESTful APIs are designed to be stateless and separate the concerns of client and server.

```javascript
const express = require("express");

const app = express();

const route = "/api/users";

app.post(route, (req, res) => {
  res.send("User requested");
});

app.get(route, (req, res) => {
  res.send("User returned");
});

app.put(route, (req, res) => {
  res.send("User updated");
});

app.delete(route, (req, res) => {
  res.send("User deleted");
});
```

### Params and Query

- Params and Query are used to extract values from the URL.

```javascript
const express = require("express");

const app = express();

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ID: ${id}`);
});

app.get("/api/users", (req, res) => {
  const id = req.query.id;
  res.send(`User ID: ${id}`);
});
```

> [!NOTE]
>
> - The URL for the params route will be `/api/users/1`
> - The URL for the query route will be `/api/users?id=1`

### Express Validator

- Express-validator is a set of express.js middlewares that wraps validator.js validator and sanitizer functions.

- It is used to validate the data that is coming from the client-side.

#### Methods in Express Validator

- `body()`: This method is used to validate the body of the request.

- `param()`: This method is used to validate the parameters of the request.

- `query()`: This method is used to validate the query of the request.

- `cookie()`: This method is used to validate the cookies of the request.

- `header()`: This method is used to validate the headers of the request.

- `check()`: This method is used to validate the request.

- `assert()`: This method is used to validate the request and throw an error if the validation fails.

- `validationResult()`: This method is used to check if there are any validation errors.

```javascript
const { body, validationResult } = require("express-validator");

app.post(
  "/api/users",
  [
    body("email").isEmail().notEmpty().withMessage("Email is Invalid"),
    body("password")
      .isLength({ min: 5, max: 25 })
      .withMessage("Password is Invalid"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User validated");
  }
);
```

### Nodemon

- Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

> [!WARNING]
>
> - Nodemon is a development dependency and should not be used in production.
> - `rs` can be used to restart the server manually.

```bash
pnpm i -D nodemon # Install Nodemon as dev dependency
```

```javascript
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

```bash
pnpm dev # run the development server
```

> [!TIP]
>
> Nodemon can be used with any file. Just replace `server.js` with the file you want to monitor.
> Even other languages like Python, Ruby, etc., can be monitored using Nodemon.
