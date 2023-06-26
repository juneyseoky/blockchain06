// express 로드
const express = require('express')
const app = express()

// port 번호 설정
const port = 3000

// view 파일들의 기본 경로설정
app.set('views', __dirname+"/views")
// view engine 설정
app.set('view engine', 'ejs')

// port 방식으로 들어오는 데이터를 json형태로 변환
app.use(express.urlencoded({extended : false}))


//dotenv 설정
require('dotenv').config()

const token = require('./routes/token.js')()
app.use("/token", token)

const server = app.listen(port, function(){
    console.log(port, 'Server Start')
})