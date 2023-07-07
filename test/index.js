const express = require('express')
const app = express()

//view 파일의 기본 경로 설정
app.set('views', __dirname+"/views")
//view engine 지정
app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))

// port 설정
const port = 3000

// dotenv를 이용하여 환경변수 설정
require('dotenv').config()


app.get('/', (req, res) =>{
    res.render('main')
})
app.get('/board', (req, res) =>{
    const sql = 
    res.render('board')
})
const server = app.listen(port, function(){
    console.log(port, "Server Start")
})
