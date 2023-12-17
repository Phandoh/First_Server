const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users List");
});

router.get("/new", (req, res) => {
  res.send("New users");
});

router.post("/", (req, res) => {
  res.send("Create User");
});
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get users with id: ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Get users with id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update users with id: ${req.params.id}`);
  });



const users = [{name: "Jan"},{name: "Esther"}]
router.param("id", (req, res, next, id) => {
  console.log(id)
  req.user = users[id]
  next()
});
module.exports = router;
