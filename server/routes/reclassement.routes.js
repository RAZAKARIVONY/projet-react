const express = require("express");

const router = express.Router();

const reclassementController = require("../controllers/reclassement.controller");

router.get("/", reclassementController.getAllReclassement);
router.post("/", reclassementController.addReclassement);
router.get("/:id", reclassementController.getById);
router.put("/:id", reclassementController.updateReclassement);
router.delete("/:id", reclassementController.deleteReclassement);

module.exports = router;
