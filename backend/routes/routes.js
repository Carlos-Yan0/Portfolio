const express = require('express');
const router = express.Router();
const data = require('../controller/sendData');

router.get("/", data.enviarInfo);
router.put("/admin/about/:id", data.modificarAbout);
router.put("/admin/projects/:id", data.modificarProjects);
router.post("/admin/projects", data.criarProjects);
router.delete("/admin/projects/:id", data.deleteProjects);

module.exports = router;