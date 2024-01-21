import "dotenv/config";
import app from "./app.js";
import http from "http";

const port = process.env.APP_PORT || 7000;

const isStaging = process.env.NODE_ENV === "staging";
let server;
if (isStaging) {
  //deplyoment in production logic
  server = http.createServer(app);
} else {
  server = http.createServer(app);
}

server.listen(port, function (err) {
  if (err) {
    console.log("Error in starting server", err);
  } else {
    console.log(`Your App is Running on Port : ${port}`);
  }
});

export default server;
