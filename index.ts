import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(
    "This route isn't very interesting, sorry. \nTry hitting localhost:4000/current-time, localhost:4000/start-time"
  );
});

let hitCount = 0;
app.get("/hits", (req, res) => {
  hitCount += 1;
  res.json({
    message: "We've registered your hit!",
    currentTotal: hitCount,
    countedAsHit: true,
  });
});

app.get("/hits-stealth", (req, res) => {
  res.json({
    message: "Oooh, you ninja. We didn't count that hit.",
    currentTotal: hitCount,
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

const dateForStartTime = new Date();
app.get("/start-time", (req, res) => {
  res.json({
    message: `The current date is ${dateForStartTime.toTimeString()}`,
    utc: dateForStartTime.toUTCString(),
    countedAsHit: false,
  });
});

app.listen(4000, () => {
  console.log(
    "If you can see this message in the console, this means that you successfully started the server! \n\nYou can see what comes back by visiting localhost:4000 in your browser. \n\nChanges will not be processed unless you restart your server (close and restart). \n\nThe server is currently listening for requests - press Ctrl + C to quit."
  );
});
