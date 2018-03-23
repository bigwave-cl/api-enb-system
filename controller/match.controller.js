/*
 * @Author: askMeWhy
 * @Date:   2018-03-15 15:36:32
 * @Last Modified by:   bigWave
 * @Last Modified time: 2018-03-19 17:22:19
 */

const {
	MatchListModel
} = require('../model/matchlist.js');
const {
	merge
} = require('./merge.js');
const matchController = {
	calcMatch() {
		MatchListModel.data.list.push()
	},
	create(req, res) {
		const requestBody = req.body;
		let option = merge(true,{},requestBody);
		option['name'] = requestBody.competition_name;
		option['competition_start'] = requestBody.competition_start;
		option['competition_end'] = requestBody.competition_end;
		option['area'] = requestBody.competition_area;
		option['is_online'] = requestBody.is_online;
		option['id'] = MatchListModel.data.list.length+1;
		MatchListModel.data.list.push(option);
		let _count = Math.ceil(MatchListModel.data.list.length / 10);
		MatchListModel.data.pageCount = _count;
		res.json({
			ok: true,
			code: 200
		})
	},
	remove(req, res) {
		const requestBody = req.body;
		let _index = MatchListModel.data.list.findIndex(r => r.id == requestBody.id);
		if (_index != -1) {
			MatchListModel.data.list.splice(_index, 1);
		}

		let _count = Math.ceil(MatchListModel.data.list.length / 10);
		MatchListModel.data.pageCount = _count;
		res.json({
			ok: true,
			code: 200
		})
	},
	query(req, res) {
		const requestBody = req.body;
		MatchListModel.data.page = Number(requestBody.page);
		let page = requestBody.page;
		let _count = Math.ceil(MatchListModel.data.list.length / 10);

		MatchListModel.data.pageCount = _count;
		let _list = [];
		let _curPage = 10
		MatchListModel.data.list.map((index, key) => {
			if (key >= (page - 1)*10 && key <= (page * 10 - 1)) {
				_list.push(index);
			}
		})
		console.log('ask',_list.length);
		let _now =  JSON.stringify(MatchListModel);
		_now = JSON.parse(_now);
		_now.data.list = _list;
		res.json(_now)
	},
	update(req, res) {
		const requestBody = req.body;
		let _index = MatchListModel.data.list.findIndex(r => r.id == requestBody.id);
		if (_index != -1) {
			MatchListModel.data.list[_index]['name'] = requestBody.competition_name;
			MatchListModel.data.list[_index]['competition_start'] = requestBody.competition_start;
			MatchListModel.data.list[_index]['competition_end'] = requestBody.competition_end;
			MatchListModel.data.list[_index]['area'] = requestBody.competition_area;
			MatchListModel.data.list[_index]['is_online'] = requestBody.is_online;
		}
		res.json({
			ok: true,
			code: 200
		})
	}

}
module.exports = matchController;