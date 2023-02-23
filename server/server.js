const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
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

app
  .route("/api")
  .get((req, res) => {
    Note.find((err, data) => {
      res.json(data || []);
    });
  })
  .post((req, res) => {
    const { title, body } = req.body;
    const note = new Note({
      title: title,
      body: body,
    });
    note.save();
    // Note.find((err, data) => {
    //   console.log(data);
    //   res.json(data || []);
    // });
    res.sendStatus(200);
  })
  .delete((req, res) => {
    Note.findByIdAndDelete(req.query.id, (err, data) => {
      console.log(data);
      res.sendStatus(200);
    });
  });

app.listen(3001, (err) => {
  console.log(err || "Server started on port 3001");
});
