const express = require("express");
const router = express.Router();
const admincontroller = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.route("/users").get(authMiddleware,adminMiddleware,admincontroller.getAllUsers);
router.route("/users/:id").get(authMiddleware,adminMiddleware,admincontroller.getUserById);
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,admincontroller.updateUserById);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,admincontroller.deleteUserById);
router.route("/contacts").get(authMiddleware,adminMiddleware,admincontroller.getAllContacts);
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,admincontroller.deleteContactById);

module.exports = router;