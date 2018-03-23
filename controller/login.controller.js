/*
* @Author: askMeWhy
* @Date:   2018-03-15 16:39:56
* @Last Modified by:   bigWave
* @Last Modified time: 2018-03-15 16:41:30
*/
const loginController = (req,res)=>{
	const requestBody = req.body;
	res.json({
		ok: true,
		code: 200,
		"message" : "操作成功", 
	    "data" : { 
	        "token" : "QMAk4_ZATLrKthJHCJxgVCFLDDMMCM4keEWpQeYvacJvFPpG15_15F2hgOb9", 
	        "role_type" : 1, 
	        "company" : '测试公司名', 
	        "email" : '123@s.com', 
	        "username" : requestBody.username
	    }
	});
}
module.exports = loginController;