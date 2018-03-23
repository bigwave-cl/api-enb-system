/*
 * @Author: askMeWhy
 * @Date:   2018-03-15 15:36:32
 * @Last Modified by:   bigWave
 * @Last Modified time: 2018-03-21 10:39:46
 */

const {
	OperatorListModel
} = require('../model/operatorlist.js');
const {
	merge
} = require('./merge.js');
const rolList = [
					{	name: '媒体',value: 1,des:'只负责平台内，媒体区域的管理' },
					{	name: '成统',value: 2,des:'只负责平台内，成统区域的管理' },
					{	name: '计时裁判',value: 3 ,des:'只可登录计时裁判APP，进行操作'}
				],
	siteList = [
					{	name: 'DSS',value: 1 },
					{	name: 'FF',value: 2 },
					{	name: 'ASS',value: 3 },
					{	name: 'CP1',value: 4 },
					{	name: 'CP2',value: 5 },
					{	name: 'CP3',value: 6 },
					{	name: 'CP4',value: 7 },
					{	name: 'CP5',value: 8 }
				];
const operatorController = {
	getAccount(req,res) {
		res.json({
			ok: true,
			code: 200,
			"message" : "操作成功", 
		    "data" : { 
		        "username" : 'ask'+Date.now() 
		    } 
		})
	},
	modifyPassword(req,res){
		res.json({
			ok: true,
			code: 200
		})
	},
	modifyCompany(req,res){
		res.json({
			ok: true,
			code: 200
		})
	},
	create(req, res) {
		const requestBody = req.body;
		let option = {};
		option['role_type'] = requestBody.type;
		option['role'] = rolList[requestBody.type - 1].name;
		option['username'] = requestBody.username;
		option['password'] = requestBody.password;
		option['referee_site'] = requestBody.site;
		option['site'] = requestBody.site == "" ? '-':siteList[requestBody.site - 1].name;
		option['id'] = OperatorListModel.data.list.length+1;
		OperatorListModel.data.list.push(option);
		let _count = Math.ceil(OperatorListModel.data.list.length / 10);
		OperatorListModel.data.pageCount = _count;
		res.json({
			ok: true,
			code: 200
		})
	},
	remove(req, res) {
		const requestBody = req.body;
		let _index = OperatorListModel.data.list.findIndex(r => r.id == requestBody.id);
		if (_index != -1) {
			OperatorListModel.data.list.splice(_index, 1);
		}

		let _count = Math.ceil(OperatorListModel.data.list.length / 10);
		OperatorListModel.data.pageCount = _count;
		res.json({
			ok: true,
			code: 200
		})
	},
	query(req, res) {
		const requestBody = req.body;
		OperatorListModel.data.page = Number(requestBody.page);
		let page = requestBody.page;
		let _count = Math.ceil(OperatorListModel.data.list.length / 10);

		OperatorListModel.data.pageCount = _count;
		let _list = [];
		let _curPage = 10
		OperatorListModel.data.list.map((index, key) => {
			if (key >= (page - 1)*10 && key <= (page * 10 - 1)) {
				_list.push(index);
			}
		})
		let _now =  JSON.stringify(OperatorListModel);
		_now = JSON.parse(_now);
		_now.data.list = _list;
		res.json(_now)
	},
	update(req, res) {
		const requestBody = req.body;
		let _index = OperatorListModel.data.list.findIndex(r => r.id == requestBody.id);
		if (_index != -1) {
			OperatorListModel.data.list[_index]['referee_site'] = requestBody.site;
			OperatorListModel.data.list[_index]['site'] = requestBody.site == "" ? '-':siteList[requestBody.site - 1].name;
			OperatorListModel.data.list[_index]['password'] = requestBody.password;
		}
		res.json({
			ok: true,
			code: 200
		})
	}

}
module.exports = operatorController;