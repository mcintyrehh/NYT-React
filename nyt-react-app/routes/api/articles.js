const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/")
    // matches with '/api/articles'
    .post(articleController.create);
router.route('/:id')
    // matches with '/api/articles/:id'
    // .put(articleController.update)
    // .delete(articleController.remove);

    module.exports = router;

    // get, put, delete routes