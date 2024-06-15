// const | let | ver
// const 선언과 동시 값 지정 절대 불변 -- 상수선언
// let 선언과 동시에   변수, 같은 이름 불가
// ver

const myname = "김재표"
// myname = "돌돌이";

let myaccount = 100;
myaccount += 1100 + 2000;

console.log("금액확인", myaccount);

myaccount += "원";
myaccount += 5000;
myaccount += 5000;

console.log("단위추가", myaccount, "데이터타입은?", typeof myaccount);



 