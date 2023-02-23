const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
mongoose.set("strictQuery", false);
// Connecting to mongodb databse at port 27017
mongoose.connect("mongodb://localhost:27017/notesDB", (err) => {
  console.log(err || "Connected to database");
});

const NoteSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const Note = mongoose.model("Note", NoteSchema);

const note = new Note({
  title: "Day one",
  body: "Hello world!",
});

app.route("/api").get((req, res) => {
  Note.find((err, data) => {
    res.json(data);
  });
});

app.listen(3001, (err) => {
  console.log(err || "Server started on port 3001");
});
