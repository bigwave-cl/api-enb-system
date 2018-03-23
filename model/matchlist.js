/*
* @Author: askMeWhy
* @Date:   2018-03-19 16:23:06
* @Last Modified by:   bigWave
* @Last Modified time: 2018-03-19 17:22:55
*/
const MatchListModel = { 
    "name" : "Success", 
    "code" : 200, 
    "message" : "操作成功", 
    "data" : { 
        "list" : [ 
            { 
                "id" : 1, 
                "name" : "摩托赛", 
                "area" : "成都", 
                "competition_start" : 1521043200, 
                "competition_end" : 1523721600, 
                "is_online" : 0 
            }, 
            { 
                "id" : 2, 
                "name" : "摩托赛", 
                "area" : "成都", 
                "competition_start" : 1521043200, 
                "competition_end" : 1523721600, 
                "is_online" : 0 //当是超级管理员时,有此字段 
            } 
        ], 
        "page" : 1, //当前页面 
        "pageSize" : 2, //每页数据行 
        "pageCount" : 2, //总页数 
        "min":"2017", 
        "max":"2018",//当存在赛事时,才有此数据 
    } 
}
module.exports = { MatchListModel };