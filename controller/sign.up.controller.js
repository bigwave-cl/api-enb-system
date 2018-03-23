/*
* @Author: askMeWhy
* @Date:   2018-03-14 10:03:13
* @Last Modified by:   bigWave
* @Last Modified time: 2018-03-15 15:40:03
*/
const singUpController = (req,res)=>{
	const requestBody = req.body;
	res.json({
		ok: true,
		code: 200,
		"message" : "操作成功", 
	    "data" : { 
	        "token" : "QMAk4_ZATLrKthJHCJxgVCFLDDMMCM4keEWpQeYvacJvFPpG15_15F2hgOb9", 
	        "role_type" : 1, 
	        "company" : requestBody.company_name, 
	        "email" : requestBody.email, 
	        "username" : Date.now() 
	    }
	});
}
module.exports = singUpController;