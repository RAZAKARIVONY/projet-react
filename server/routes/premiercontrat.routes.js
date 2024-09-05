const express = require("express");

const router = express.Router();

const contratController = require("../controllers/premiercontrat.controller");

router.get("/", contratController.getAllContrat1);
router.post("/", contratController.addContrat1);
router.get("/:id", contratController.getById);
router.put("/:id", contratController.updateContrat1);
router.delete("/:id", contratController.deleteContrat1);

module.exports = router;
