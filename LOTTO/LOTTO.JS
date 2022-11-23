let lottoNumber = new Array();
let userNumber = new Array();
let lottoSame = 0;
let userWrite = 0;
let comArrNumber = 0;
let comRandom = 0;
let sameNumber = 0;
let specNumber;
let specNumRanom;
let specArrNumer;
let bounus = false;

for (let i = 0; i < 7; i++) { //숫자 6개 뽑기
    userWrite = prompt((i+1) + "번입력"); //창 띄워서 뽑기
    userNumber[i] = userWrite;
    while (true) {
        if (userWrite > 45 || userWrite < 0) {
            i--;
            alert("다시 입력하세요");
            break;
        }
        else {
            for (let q = 0; q < 7; q++) { // 동일 숫자 확인
                if (q != i && userNumber[q] == userNumber[i]) { //45이상 나온 숫자, 동일 숫자 걸러냄
                    // alert("중복된 숫자입니다");
                    i--;
                    break;
                }
            }
        }
        break;
    }
}
document.write("번호 입력 :" + userNumber + '\n');
document.write("<hr>");


for (let i = 0; i < 7; i++) { // 컴퓨터 숫자 랜덤 뽑기
    comRandom = Math.random() * 45 + 1;
    comArrNumber = Math.floor(comRandom);
    lottoNumber[i] = comArrNumber;
    for (let q = 0; q < 7; q++) { // 동일 숫자 확인
        if (q != i && lottoNumber[q] == lottoNumber[i] || lottoNumber[i] > 45) { //45이상 나온 숫자, 동일 숫자 걸러냄
            // document.write(i, q);
            i--; // 다시 검사
        }
        break;
    }
}


{specNumRanom = Math.random() * 7; // 보너스 숫자 뽑기
specArrNumer = Math.floor(specNumRanom);
specNumber = lottoNumber[specArrNumer]; 
document.write(("보너스 번호" + specNumber))
document.write("<hr>");
}



for(let i = 0; i < 7; i++){ //번호 비교
    for(let q = 0; q < 7; q++){
        if (userNumber[i] == lottoNumber[q]){
            sameNumber++;
            lottoSame = i;
            document.write((lottoSame + 1) + "번 같음" + '\n');
            document.write("<hr>");
            if(specNumber == userNumber[i]){
                document.write((lottoSame + 1) + "번 보너스 번호 같음");
                document.write("<hr>");
                bounus = true;
                // loop = false;
            }
        }
    }
}




document.write("컴퓨터 입력 : " + lottoNumber); // 컴퓨터 숫자 잘 나오는지 확인
document.write("<hr>");
document.write((sameNumber)+"개 맞음");
document.write("<hr>");

if (sameNumber >= 3 && sameNumber < 4 && bounus == false) {
    document.write("5등입니다");
}
    else if (sameNumber >= 4 && sameNumber < 5 && bounus == false) {
        document.write("4등입니다");
    }
    else if (sameNumber >= 5 && sameNumber < 6 && bounus == false) {
            document.write("3등입니다");
    }
    else if (sameNumber >= 5 && bounus == true && sameNumber < 6) {
                document.write("2등입니다");
    }
    else if (sameNumber >= 6 && bounus == false) {
                    document.write("1등입니다");
    }
