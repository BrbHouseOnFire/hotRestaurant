// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// DATA
// =============================================================
const rsvp = [
  // {
  //   name: "Frodo Swaggins",
  //   email: "thebaggiest@ringlife.com",
  //   phone: "123-123-1234",
  //   // waitlisted: false
  // },
  // {
  //   name: "Gorndalf",
  //   email: "whitepower@levelup.com",
  //   phone: "123-123-1235",
  //   // waitlisted: false
  // }
];


// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/rsvp", (req, res) => {
  return res.json(rsvp);
});
app.get("/rsvp", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/rsvp.html"));
});
app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/add.html"));
});

app.post("/api/rsvp", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newRSVP = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newRSVP);
    rsvp.push(newRSVP);
    res.json(newRSVP);
});

app.post('/api/clear', (req, res) => {
  // hotpot-restauraunt.herokuapp.com/api/clear
  rsvp.length = 0;
  res.json(true);
  console.log("List Cleared");
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});











// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
  
//   const chosen = req.params.character;
//   console.log(chosen);
//   const chosenOne = characters.filter(obj => {
//     return obj.routeName === chosen;
//   });
//   if (chosenOne.length) {
//     return res.json(chosenOne[0]);
//   }
//   else {
//     return res.send("A character I do not see, that is.");
//   };
// });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });


