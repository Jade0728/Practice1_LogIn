const mongoose = require("mongoose")
/*require("mongoose")를 통해 Mongoose 라이브러리를 가져옵니다.
가져온 mongoose 객체를 사용하여:
1. MongoDB 데이터베이스에 연결
2. 스키마(Schema) 정의
3. 모델(Model) 생성
4. CRUD 작업(데이터 생성, 읽기, 업데이트, 삭제) 
기능을 수행할 수 있음*/

//1. MongoDB 데이터베이스에 연결
mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
    //LoginSignUpTutorial: name of out database
    .then(() => {
    console.log("mongodb connected")
    })
    .catch(() => {
    console.log("failed to connect")
    })
//2. schema: 데이터를 더 엄격히 관리할 수 있음
const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
     },
    password: {
        type: String,
        required: true
     }
})
//3. 모델(Model) 생성
//스키마를 기반으로 모델을 생성하여 MongoDB 컬렉션과 매핑
const User = mongoose.model("User", LogInSchema);
module.exports = User;
//마지막 두줄 바꿔야함