const express = require("express");
const router = express.Router();

const Records = require("../models/records");

router.get("/", async (req, res) => {
  try {
    const record = await Records.find({});
    res.send({ record });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const record = await Records.findById(req.params.id);
    res.send({ record });
  } catch (err) {
    res.status(404).send({ message: "Student not found!" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newRecord = await Records.create({
      name: req.body.name,
      number: req.body.number,
      address: req.body.address,
    });
    res.send({ newRecord });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedRecord = await Records.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({ message: "The student was updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removeRecord = await Records.findByIdAndRemove(req.params.id);
    res.send({ message: "The Record was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
