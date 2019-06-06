let eventType = prompt(
  "What type of event will you be going to?"
).toLowerCase();
let tempFahr = parseInt(
  prompt("What is the current temperature at your location?"),
  10
);
let result =
  "Since it is " +
  tempFahr +
  " degrees and you're going to a " +
  eventType +
  " event, you should wear";
if (eventType === "casual") {
  result += " something comfy";
} else if (eventType === "semi-formal") {
  result += " a polo";
} else {
  result += " a suit";
}
result += " and ";

if (tempFahr < 54) {
  result += "a coat.";
} else if (tempFahr >= 54 && tempFahr < 70) {
  result += "a jacket.";
} else {
  result += "no jacket.";
}

console.log(result);
