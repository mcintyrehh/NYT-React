const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/")
    // matches with '/api/articles'
    .post(articleController.create)
    .get(articleController.get);
router.route('/:id')
    // matches with '/api/articles/:id'
    //**will be used for adding a note to the article**/
    // .put(articleController.update)
    .delete(articleController.remove);

    module.exports = router;

    // get, put, delete routes