const express = require('express');
const jwtHelper = require('../config/jwtHelper');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/lists',jwtHelper.verifyJwtToken, ctrlUser.getList);
router.post('/lists',jwtHelper.verifyJwtToken, ctrlUser.postList);
router.post('/register', ctrlUser.register);

module.exports = router;


