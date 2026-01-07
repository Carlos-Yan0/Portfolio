const express = require('express');
const router = express.Router();
const data = require('../controller/sendData');

router.get("/", data.enviarAbout, data.enviarProjects);
router.put("/admin/about/:id", data.modificarAbout);
router.put("/admin/projects/:id", data.modificarProjects);
router.post("/admin/projects", data.criarProjects);

module.exports = router;