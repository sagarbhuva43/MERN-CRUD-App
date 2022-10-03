const express = require("express");
const router = express.Router();

const Tutorial = require("../model/tutorials.model");

router.get("", async (req, res) => {
  try {
    const tutorials = await Tutorial.find().lean().exec();

    return res.status(200).send({ tutorials: tutorials });
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong" });
  }
});

//getting a single tutorial
router.get("/:id", async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id).lean().exec();

    return res.status(200).send({ tutorial: [tutorial] });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//post
router.post("", async (req, res) => {
  try {
    const tutorial = await Tutorial.create(req.body);

    return res.status(201).send({ tutorial: [tutorial] });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//update
router.patch("/:id", async (req, res) => {
  try {
    const tutorial = await Tutorial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send({ tutorial: [tutorial] });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const tutorial = await Tutorial.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(201).send({ tutorial: [tutorial] });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//delete collection (all data)
router.delete("/", async (req, res) => {
  try {
    const tutorial = await Tutorial.deleteMany().lean().exec();

    return res.status(201).send({ tutorial: [tutorial] });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
module.exports = router;
