/*
 * @Author: askMeWhy
 * @Date:   2018-03-21 11:36:48
 * @Last Modified by:   bigWave
 * @Last Modified time: 2018-03-21 17:30:02
 */

const {
	MatchInfoModel
} = require('../model/matchinfo.js');
const {
	merge
} = require('./merge.js');
const fs = require('fs');

let os = require('os'),
	iptable = {},
	ifaces = os.networkInterfaces();

for (var dev in ifaces) {
	ifaces[dev].forEach(function(details, alias) {
		if (details.family == 'IPv4' && !details.internal) {
			iptable['ip'] = details.address;
		}
	});
}
const matchBaseController = {
	uploadImg(req, res) {
		const requestBody = req.body;
		const imgPath = '/images/ask' + Date.now() + '.png';
		const path = 'public'+imgPath;
		requestBody.file = requestBody.file.replace(/\s/g,"+");
		const base64Data = requestBody.file.replace(/^data:\s*image\/png;base64,/, "");

		const dataBuffer = new Buffer(base64Data, 'base64'); //把base64码转成buffer对象，
		console.log('dataBuffer是否是Buffer对象：' + Buffer.isBuffer(dataBuffer));
		fs.writeFile(path, base64Data, 'base64',function(err) {
			let r = {
				ok: true,
				code: 200
			};
			if (err) {
				r.ok = false;
				r.code = 500;
			} else {
				r['message'] = "操作成功";
				r['data'] = {
					url: 'http://'+iptable['ip']+':8045'+imgPath
				}
			}
			res.json(r);
		})
	},
	queryId(req, res) {
		res.json(MatchInfoModel);
	},
	update(req, res) {
		const requestBody = req.body;
		Object.keys(MatchInfoModel.data.base).forEach((key) => {
			MatchInfoModel.data.base[key] = requestBody[key];
		})
		res.json({
			ok: true,
			code: 200
		})
	}
}
module.exports = matchBaseController;