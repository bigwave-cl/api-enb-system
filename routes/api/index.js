/*
* @Author: askMeWhy
* @Date:   2018-03-14 10:01:39
* @Last Modified by:   bigWave
* @Last Modified time: 2018-03-21 11:47:57
*/
const express = require('express');
const router = express.Router();
const singUpController = require('../../controller/sign.up.controller');
const loginController = require('../../controller/login.controller');
const matchController = require('../../controller/match.controller');
const operatorController = require('../../controller/operator.controller');
const matchBaseController = require('../../controller/match.base.controller');

router.post('/site/sign-up', singUpController);
router.post('/site/login', loginController);

router.post('/competition-info/create', matchController.create);
router.post('/competition-info/delete', matchController.remove);
router.post('/competition-info/list', matchController.query);
router.post('/competition-info/update', matchController.update);


router.post('/admin/useful-username', operatorController.getAccount);
router.post('/admin/update-password', operatorController.modifyPassword);
router.post('/admin/update-company', operatorController.modifyCompany);
router.post('/admin/create-account', operatorController.create);
router.post('/admin/delete-account', operatorController.remove);
router.post('/admin/list-account', operatorController.query);
router.post('/admin/update-account', operatorController.update);


router.post('/competition-editor/upload', matchBaseController.uploadImg);
router.post('/competition-editor/base-query', matchBaseController.queryId);
router.post('/competition-editor/base-update', matchBaseController.update);

module.exports = router;