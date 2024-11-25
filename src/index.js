/* 
시작 전 terminal에 
npm i express
npm i hbs
npm i mongoose 
설치
*/

const express = require("express")
const app = express()
const path = require("path")
const hbs=require("hbs")
const tempelatePath = path.join(__dirname, '../tempelates')
const collection = require("./mongodb")

app.use(express.json())
app.set("view engine", "hbs") //HBS(Handlebars)를 템플릿 엔진으로 설정
app.set("views",tempelatePath) //템플릿 파일들이 위치하는 디렉터리를 설정
app.use(express.urlencoded({ extended: false }))

app.get("/signup", (req, res) => {
    res.render("signup")
    // "/signup" 경로로 요청이 들어오면, 서버는 signup.hbs 파일을 렌더링
})

app.get("/", (req, res) => {
    res.render("login")
    /* 
    "/" 경로로 요청이 들어오면, 서버는 login.hbs 파일을 렌더링.
    res.render("login")res.render("login")은 login.hbs 파일을 템플릿 엔진을 통해 렌더링하고, 결과 HTML을 클라이언트에 반환
    */
})

// "/login" 경로에 대해 HTTP POST 요청을 처리
//주석처리 바꿔야함**
app.post("/login", async (req, res) => {
    try {
        const check=await collection.findOne({name:req.body.name})
        if (check.password==req.body.password) {
            res.render("home")
        }
        else {
            res.send("wrong password")
        }
    }
    catch { 
        res.send("wrong details")
    }

    //name password 데이터를 추출
    /*const data = {
        name: req.body.name,
        password: req.body.password
    }
    //데이터베이스에 저장
    await collection.insertMany([data])
    //데이터 저장이 완료된 후, home.hbs라는 템플릿 파일을 렌더링하고 사용자에게 반환   
*/
})


app.listen(3000, () => {
    console.log("port connected");
})

