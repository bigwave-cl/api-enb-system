/*
* @Author: askMeWhy
* @Date:   2018-03-19 16:23:06
* @Last Modified by:   bigWave
* @Last Modified time: 2018-03-21 11:09:42
*/
const OperatorListModel = { 
    "name" : "Success", 
    "code" : 200, 
    "message" : "操作成功", 
    "data" : { 
        "list" : [ 
            { 
                "id" : 1, 
                "role_type":"2",
                "role" : "成统", 
                "site" : "-",//裁判位置 
                "referee_site":"0",//裁判位置编号 
                "username" : "265656588", 
                "password" : "654321" 
            },
            { 
                "id" : 2, 
                "role_type":"1" ,
                "role" : "媒体", 
                "site" : "-",//裁判位置 
                "referee_site":"0",//裁判位置编号 
                "username" : "2558487", 
                "password" : "654321" 
            } ,
            { 
                "id" : 3, 
                "role_type":"3",
                "role" : "计时裁判", 
                "site" : "ASS",//裁判位置 
                "referee_site":"3",//裁判位置编号 
                "username" : "2558487", 
                "password" : "654321" 
            }  
        ], 
        "page" : 1, //当前页面 
        "pageSize" : 2, //每页数据行 
        "pageCount" : 2, //总页数 
    } 
}
module.exports = { OperatorListModel };