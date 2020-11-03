//password를 맞추는 프로그램을 개발한다
//1. password를 미리 지정한다.(const 사용 추천)
//2. prompt를 password로 받는다.
//3. 만약 맞았다면 "로그인 되었습니다!" 출력 
//4. 만약 틀렸다면 "로그인에 실패하였습니다." 출력

const ID = "id";
const PASSWORD = "password";

let userID = prompt("아이디");
let userPW = prompt("비밀번호");

if(ID === userID && PASSWORD === userPW){
    alert("로그인 되었습니다!");
} 
else if(ID !== userID && PASSWORD === userPW){
    alert("아이디를 다시 확인해주세요");
} 
else if(ID === userID && PASSWORD !== userPW){
    alert("비밀번호를 다시 확인해주세요");
} else {
    alert("로그인에 실패하였습니다.");
}