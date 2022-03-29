import express from "express";
import ponyData from "../data/ponies.json";
import { seasonOneEpisodes } from "./episodes";
import { pickRandom } from "./random";

const app = express();
const serverStartDate = new Date();
let serverHitCount = 0;
let routeHistory:string[] = []

app.get("/", (req, res) => {
  res.send(
    "This is the default path - and it isn't very interesting, sorry. \nTry visiting localhost:4000/creation-time, localhost:4000/current-time"
  );
});

app.get("/creation-time", (req, res) => {
  routeHistory.push("/creation-time")
  res.json({
    message: `The server was started at ${serverStartDate.toTimeString()}`,
    utc: serverStartDate.toUTCString(),
    countedAsHit: false,
  });
});

app.get("/current-time", (req, res) => {
  routeHistory.push("/current-time")
  const dateOfRequestHandling = new Date();

  res.json({
    message: `The current date is ${dateOfRequestHandling.toTimeString()}`,
    utc: dateOfRequestHandling.toUTCString(),
    countedAsHit: false,
  });
});

app.get("/hits", (req, res) => {
  routeHistory.push("/hits")
  serverHitCount += 1;
  res.json({
    note: "We've registered your hit!",
    currentTotal: serverHitCount,
    countedAsHit: true,
  });
});

app.get("/hits-stealth", (req, res) => {
  routeHistory.push("/hits-stealth")
  res.json({
    note: "Oooh, you ninja. We didn't count that hit.",
    currentTotal: serverHitCount,
    countedAsHit: false,
  });
});

app.get("/ponies", (req, res) => {
  routeHistory.push("/ponies")
  res.json({
    message: "Loaded dummy JSON data:",
    data: ponyData,
    countedAsHit: false,
  });
});

app.get("/ponies/random" , (req , res) =>{
  routeHistory.push("/ponies/random")
  const randomPony = pickRandom(ponyData.members)
  res.json({
    randomPony
  })
})

app.get("/season-one", (req, res) => {
  routeHistory.push("/season-one")
  res.json({
    countedAsHit: false,
    data: seasonOneEpisodes,
  });
});

app.get("/season-one/random", (req, res) => {
  routeHistory.push("/season-one/random")
  const randomEpisode = pickRandom(seasonOneEpisodes);
  res.json({
    countedAsHit: false,
    data: randomEpisode,
  });
});

app.get("/hello-world", (req, res) => {
  routeHistory.push("/hello-world")
  res.json({
    english: "Hello world!",
    esperanto: "Saluton mondo!",
    hawaiian: "Aloha Honua",
    turkish: "Merhaba Dünya!"
  })
})

app.get("/history", (req, res)=>{
  routeHistory.push("/history")
  res.json({
  routes: routeHistory
  })
})

// using 4000 by convention, but could be changed
const PORT_NUMBER = 4000;

app.listen(PORT_NUMBER, () => {
  console.log(
    `If you can see this message in the console, this means that you successfully started the server! \n\nYou can see what comes back by visiting localhost:${PORT_NUMBER} in your browser. \n\nChanges will not be processed unless you restart your server (close and restart). \n\nThe server is currently listening for requests - press Ctrl + C to quit.`
  );
});
