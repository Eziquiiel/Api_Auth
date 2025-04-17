const router = require("express").Router();
const handle = require("../Controller/tokenController");

const createLoginController = require("../Controller/createLoginController");
const createRegisterController = require("../Controller/createRegisterController");
const getPublicController = require("../Controller/getPublicController");
const getPrivateController = require("../Controller/getPrivateController");

//Funções
router.route("/user").get((req, res) => getPublicController.get(req, res));

router
  .route("/token/:id", handle)
  .get((req, res) => getPrivateController(req, res));

router
  .route("/register")
  .post((req, res) => createRegisterController.createRegister(req, res));

router
  .route("/login")
  .post((req, res) => createLoginController.createLogin(req, res));

module.exports = router;
