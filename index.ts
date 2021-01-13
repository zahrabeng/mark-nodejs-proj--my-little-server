import express from "express";
import dummyData from "./dummy.json";

const app = express();
const serverStartDate = new Date();
let serverHitCount = 0;

app.get("/", (req, res) => {
  res.send(
    "This route isn't very interesting, sorry. \nTry hitting localhost:4000/creation-time, localhost:4000/start-time or the other routes listed in index.ts"
  );
});

app.get("/creation-time", (req, res) => {
  res.json({
    message: `The server was started at ${serverStartDate.toTimeString()}`,
    utc: serverStartDate.toUTCString(),
    countedAsHit: false,
  });
});

app.get("/current-time", (req, res) => {
  const dateOfRequestHandling = new Date();

  res.json({
    message: `The current date is ${dateOfRequestHandling.toTimeString()}`,
    utc: dateOfRequestHandling.toUTCString(),
    countedAsHit: false,
  });
});

app.get("/hits", (req, res) => {
  serverHitCount += 1;
  res.json({
    message: "We've registered your hit!",
    currentTotal: serverHitCount,
    countedAsHit: true,
  });
});

app.get("/hits-stealth", (req, res) => {
  res.json({
    message: "Oooh, you ninja. We didn't count that hit.",
    currentTotal: serverHitCount,
    countedAsHit: false,
  });
});

app.get("/users", (req, res) => {
  res.json({
    message: "Loaded dummy JSON data:",
    data: dummyData,
    countedAsHit: false,
  });
});

app.listen(4000, () => {
  console.log(
    "If you can see this message in the console, this means that you successfully started the server! \n\nYou can see what comes back by visiting localhost:4000 in your browser. \n\nChanges will not be processed unless you restart your server (close and restart). \n\nThe server is currently listening for requests - press Ctrl + C to quit."
  );
});
