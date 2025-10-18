const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());
const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"students"
});


app.post("/insert",(req,res)=>{
    sql = "INSERT INTO mystd (`student_id`,`first_name`,`last_name`,`class`,`age`,`fees`) VALUES(?,?,?,?,?,?)"
    const values = [
        req.body.student_id,
        req.body.first_name,
        req.body.last_name,
        req.body.class,
        req.body.age,
        req.body.fees
    ]
    db.query(sql,values,(err,result)=>{
        if(err) return res.json(err);
        return res.json("successfully inserted");
    })
});

app.get('/search',(req,res)=>{
    sql = "SELECT * FROM mystd";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/search3',(req,res)=>{
    sql = "SELECT COUNT(*) FROM mystd";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/search2/:search',(req,res)=>{
    
    sql=`SELECT * FROM mystd WHERE first_name LIKE '${req.params.search}%' OR last_name LIKE '${req.params.search}%'`
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.post("/deletea",(req,res)=>{
     std_id=req.query.student_id;
    sql = `DELETE FROM mystd WHERE student_id= ${std_id}`
    db.query(sql,(err,result)=>{
        if(err) return res.json(err);
        return res.json("successfully deleted");
    })
});
app.post('/deleteb',(req,res)=>{
    const std_name=req.body.first_name;
    sql = `DELETE FROM mystd WHERE first_name= ${std_name}`
    db.query(sql,(err,result)=>{
        if(err) return res.json(err);
        return res.json("successfully deleted");
    })
});

app.post("/deletec",(req,res)=>{
    const std_class=req.body.student_class;
    sql = `DELETE FROM mystd WHERE first_name= ${std_class}`
    db.query(sql,(err,result)=>{
        if(err) return res.json(err);
        return res.json("successfully deleted");
    })
});

app.post("/update",(req,res)=>{
sql = `UPDATE mystd SET first_name=?, last_name=?, class=?, age=?, fees=? WHERE student_id=?`
const values=[
    req.body.first_name,
     req.body.last_name,
    req.body.class,
    req.body.age,
    req.body.fees,
    req.body.student_id
]
        db.query(sql,values,(err,result)=>{
        if(err) return res.json(err);
        return res.json("successfully updated");
    })
});

app.listen(5000,()=>{
    console.log("listening");
});