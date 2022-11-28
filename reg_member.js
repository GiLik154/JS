window.onload = function(){
 inputId=document.getElementById("id");
 inputPw=document.getElementById("pw");
 inputPw2=document.getElementById("pw2");
 inputName=document.getElementById("name");
 inputEmail=document.getElementById("email");
 inputYear=document.getElementById("yaer");
 inputMonth=document.getElementById("month");
 inputDay=document.getElementById("day");
}


function join(){
    alert("축하합니다");
}

function checkId(){
    if(id.length>=6 && id.length<=12){
        console.log("ok id");
        return true;
    }
    else {
        alert("아이디 길이를 확인해주세요.");
        return false;
    }
}

function checkPw(){
    if(pw.length>=6 && pw.length<=12){
        console.log("ok 비밀번호");
        return true;
    }
    else {
        alert("비밀번호 길이를 확인해주세요.");
        return false;
    }
}


function checkPw2(){
    if(pw2.length>=6 && pw2.length<=12){
        console.log("ok 비밀번호2");
        return true;
    }
    else {
        alert("비밀번호 확인 길이를 확인해주세요.");
        return false;
    }
}

function checkName(){
    if(Name.length>=2 && Name.length<=12){
        console.log("ok 비밀번호2");
        return true;
    }
    else {
        alert("비밀번호 확인 길이를 확인해주세요.");
        return false;
    }
}

function checkEmail(){
    if(email.length>=2 && email.length<=12){
        console.log("ok 비밀번호2");
        return true;
    }
    else {
        alert("비밀번호 확인 길이를 확인해주세요.");
        return false;
    }
}

function check() {
    id = inputId.value;
    pw = inputPw.value;
    pw2 = inputPw2.value;
    Name = inputName.value;
    email = inputEmail.value;

    if(checkId() && checkPw() && checkPw2() && checkName() && checkEmail()) {
        if(pw != pw2){
            alert("비밀번호와 비밀번호 확인을 확인해주세요.");
            console.log("error 비밀번호 같지 않음.");
            return false;
        }
        // alert("회원가입 완료");
        return true;
    } else {
        // alert("회원가입 실패");
        return false;
    }
}

function regComplet(){

    if(check()){
        alert("회원가입 완료");
        location.href ='index.html';
    } else{
        alert("회원가입 실패");
    }
}
