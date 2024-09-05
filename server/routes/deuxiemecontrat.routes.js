const express = require("express");

const router = express.Router();

const contratController = require("../controllers/deuxiemecontrat.controller");

router.get("/", contratController.getAllContrat2);
router.post("/", contratController.addContrat2);
router.get("/:id", contratController.getById);
router.put("/:id", contratController.updateContrat2);
router.delete("/:id", contratController.deleteContrat2);

module.exports = router;
