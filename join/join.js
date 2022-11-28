
let str_id = "";
let str_pw = "";

let input_id;
let input_pw;

window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐


    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");

//todo

    // str_id = input_id.value;
    // str_pw = input_pw.value;

    

}

function login(){

    // alert("id:"+str_id+" pw:"+str_pw);
    alert("id:"+input_id.value+" pw:"+input_pw.value);
}

function join(){

    // alert("id:"+str_id+" pw:"+str_pw);
    alert("회원가입 페이지로 이동합니다.");
}