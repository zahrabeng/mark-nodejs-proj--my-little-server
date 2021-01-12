import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(
    "This route isn't very interesting, sorry. \nTry hitting localhost:4000/current-time, localhost:4000/start-time"
  );
});

const currentDate = new Date();

app.get("/start-time", (req, res) => {
  res.json({
    message: `The current date is ${currentDate.toTimeString()}`,
    utc: currentDate.toUTCString(),
  });
});

app.get("/current-time", (req, res) => {
  const currentDate = new Date();

  res.json({
    message: `The current date is ${currentDate.toTimeString()}`,
    utc: currentDate.toUTCString(),
  });
});

app.listen(4000, () => {
  console.log(
    "If you can see this message in the console, this means that you successfully started the server! \n\nYou can see what comes back by visiting localhost:4000 in your browser. \n\nThe server is currently listening for requests - press Ctrl + C to quit."
  );
});
