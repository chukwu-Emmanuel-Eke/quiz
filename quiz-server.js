const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quiz-db'
});

app.post('/api/quiz/save', (req, res)=>{
    const{fullname,regno,dob,dept,level,score} = req.body;
    const sql =`INSERT INTO results (fullname, regno,dob,dept,level,score) VALUES (?,?,?,?,?,?)`;
    const values = [fullname,regno, dob,dept,level, score];

    db.query(sql,values,(err,result)=>{
        if(err){
        console.error('insert error:', err);
        return res.status(500).json({ status: 'error', message: err.message});
        }
        res.json({status: 'success', message: 'score saved successfully'});
    });
})
app.listen(5000, ()=>{
    console.log('backend server running on https://localhost:5000');
})
