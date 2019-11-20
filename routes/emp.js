const mysql = require("mysql");
var express = require("express");
var emprouter = express();
const connection = mysql.createConnection({
    host    :'localhost',
    user    :'root',
    password :'manager',
    database :'mydatabase'
});

var myData =[];
connection.connect();
// emprouter .post("/",function(request,response){
//     console.log(request);
//     let eno = parseInt(request.body.no);
//     let ename = request.body.name;
//     let eaddress = request.body.address;
//     console.log(eno);
//     let query = `insert into emp values(${eno},'${ename}','${eaddress}')`;
//     console.log(query, function(err,result){
//         if(err==null)
//         {
//             response.contentType("application.json");
//             respone.send(JSON.stringify(result));
//         }
//         else
//         {
//             response.contentType("application.json");
//             response.send(err);
//         }
//     });
// });

// emprouter.put("/:No",function(request,response){

//     let eno = parseInt(request.params.no);
//     let ename = request.body.name;
//     let eaddress = request.body.address;
//     console.log(request.body);
//     let query = `update emp set name= '${ename}','${eaddress}' where no=${eno}`;
//     console.log(query);
//     connection.query(query,function(err,result){
//         if(err==null)
//         {
//             response.contentType("application/json");
//             response.send(JSON.stringify(result));

//         }
//         else
//         {
//             response.contentType("application/json");
//             respone.send(err);

//         }

//     });
// });

// emprouter.delete("/:No",function(request,response){
//     let eno = parseInt(request.body.no);
//    let query = `delete from emp where no = ${eno}`;
//    console.log(query);

//    connection.query(query,function(err,result){
//     if(err==null)
//     {   
//     response.contentType("application/json");
//        response.send(JSON.stringify(result));
//     }
//     else{
//         response.contentType("application/json");
//         response.send(err);
//     }
//    });
// });

emprouter.get("/",function(request,response){
    connection.query("select * from emp",function(err,result){
        if(err==null)
        {
            myData = result;
            response.contentType("application/json");
            response.send(JSON.stringify(myData));
        }
        else
        {
            response.send("something went wrong");
        }
    });
});
module.exports=emprouter;