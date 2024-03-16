import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
// const lat = 37.7749;
// const lon = -122.4194;
app.use(bodyParser.urlencoded({ extended: true }));
// get it from --> https://home.openweathermap.org/api_keys
const apiKey = "31ed548ed7b2267fd266209bfbc87e16";

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.get("/weather", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${req.query.lat}&lon=${req.query.lon}&appid=${apiKey}`,
    );
    console.log(response.data);
    res.render("index.ejs", { weather: response.data });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
