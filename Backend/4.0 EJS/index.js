import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const d = new Date();
let day = d.getDay();
var dayType;
var advice;

function getdayType() {
  if (day == 0 || day == 6) {
    dayType = "the weekend";
  } else {
    dayType = "a weekday";
  }
  return dayType;
}

function getAdvice() {
  if (day == 0 || day == 6) {
    advice = "have fun";
  } else {
    advice = "go to work";
  }
  return advice;
}

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {
    dayType: getdayType(),
    advice: getAdvice(),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
