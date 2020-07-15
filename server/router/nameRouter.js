const router = require("express").Router();
const Name = require("../models/nameList");

router.post("/add", async (req, res) => {
  console.log(req.body);
  const name = new Name({
    name: req.body.name,
  });

  var data = await name.save();
  res.json(data);
});

router.get("/show", (req, res) => {
  Name.find(function (err, data) {
    res.json(data);
  });
});

module.exports = router;
