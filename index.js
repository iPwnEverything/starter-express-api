const express = require("express");

const app = express();

app.get("/initiate2", require("./lib/initiate"));

app.get("/refresh", require("./lib/refresh"));

app.get("/oauth/callback", require("./lib/callback"));

app.listen(8000, () => {
  console.log("App Listening on 8000 !");
});
