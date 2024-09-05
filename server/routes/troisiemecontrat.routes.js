const express = require("express");

const router = express.Router();

const contratController = require("../controllers/troisiemecontrat.controller");

router.get("/", contratController.getAllContrat3);
router.post("/", contratController.addContrat3);
router.get("/:id", contratController.getById);
router.put("/:id", contratController.updateContrat3);
router.delete("/:id", contratController.deleteContrat3);

module.exports = router;
