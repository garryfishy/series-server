const router = require("express").Router();
const TVController = require("../controllers/controller");

router.get("/tvseries", TVController.getSeries);
router.post("/tvseries", TVController.createSeries);
router.put("/tvseries/:id", TVController.updateSeries);
router.delete("/tvseries/:id", TVController.deleteSeries);

module.exports = router;
