const Note = require("../models/note.model");
const router = require("express").Router();

router.route("/create").post((req, res) => {
  Note.create({
    title: req.body.title,
    content: req.body.content,
  })
    .then(() => res.status(200).json("note created successfully"))
    .catch((err) => {
      res.status(400);
      const errObj = {};
      err.errors.map((er) => {
        errObj[er.path] = er.message;
      });
      res.json(errObj);
    });
});

router.route("/").get((req, res) => {
  Note.findAll()
    .then((notes) => res.status(200).json(notes))
    .catch((err) => res.status(400).json("error: " + err));
});

router.route("/:id/edit").put((req, res) => {
  Note.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(res.status(200).json("note updated successfully"))
    .catch((err) => res.status(400).json("error: " + err));
});

router.route("/:id").delete((req, res) => {
  Note.destroy({
    where: { id: req.params.id },
  })
    .then(res.status(200).json("note deleted successfully"))
    .catch((err) => res.status(400).json("error: " + err));
});

router.route("/:id").get((req, res) => {
  Note.findOne({ where: { id: req.params.id } })
    .then((note) => res.status(200).json(note))
    .catch((err) => res.status(400).json("error: " + err));
});
router.route("/note/:title").get((req, res) => {
  Note.findOne({ where: { title: req.params.title } })
    .then((note) => res.status(200).json(note))
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;
