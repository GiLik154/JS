let lottoNumber = new Array();
let userNumber = new Array();
let sameNumber = 0;
let specNumber;
let bounus = false;

for (let i = 0; i < 6; i++) { //숫자 6개 뽑기
    let userWrite = prompt((i+1) + "번입력"); //창 띄워서 뽑기
    // a = Math.random() * 45 + 1;
    // userWrite = Math.floor(a);
    userNumber[i] = userWrite;
    while (true) {
        if (userWrite > 45 || userWrite < 0 || userWrite == "") {
            i--;
            alert("다시 입력하세요");
            break;
        }
        else {
            for (let q = 0; q < 6; q++) { // 동일 숫자 확인
                if (q != i && userNumber[q] == userNumber[i]) { //45이상 나온 숫자, 동일 숫자 걸러냄
                    alert("중복된 숫자입니다");
                    i--;
                    break;
                }
            }
        }
        break;
    }
}

document.write("번호 입력 :" + userNumber + "<hr>");

let specNumRanom = Math.random() * 45 + 1; // 보너스 숫자 뽑기
let specArrNumer = Math.floor(specNumRanom);
lottoNumber[6] = specArrNumer
specNumber = lottoNumber[6]; 
document.write(("보너스 번호" + specNumber + "<hr>"))


for (let i = 0; i < 6; i++) { // 컴퓨터 숫자 랜덤 뽑기
    let comRandom = Math.random() * 45 + 1;
    let comArrNumber = Math.floor(comRandom);
    lottoNumber[i] = comArrNumber;
    for (let q = 0; q < 7; q++) { // 동일 숫자 확인
        if (q != i && lottoNumber[q] == lottoNumber[i]) { // 동일 숫자 걸러냄
            // document.write(i, q);
            i--; // 다시 검사
        }
        break;
    }
}   

for(let i = 0; i < 6; i++){ //번호 비교
    for(let q = 0; q < 6; q++){
        if (userNumber[i] == lottoNumber[q]){
            sameNumber++;
            let lottoSame = i;
            document.write((lottoSame + 1) + "번");
            document.write("같음" + "<hr>");
            break;
        }
        else if(specNumber == userNumber[i]){
                document.write((i + 1) + "번 보너스 번호 같음" + "<hr>");
                bounus = true;
                break;
                // loop = false;
        }
    }
}

document.write("컴퓨터 입력 : " + lottoNumber + "<hr>"); // 컴퓨터 숫자 잘 나오는지 확인
document.write((sameNumber)+"개 맞음" + "<hr>");

if (sameNumber == 3) {
    document.write("5등입니다");
}
    else if (sameNumber == 4) {
        document.write("4등입니다");
    }
    else if (sameNumber == 5) {
            document.write("3등입니다");
    }
    else if (sameNumber == 5 && bounus == true) {
                document.write("2등입니다");
    }
    else if (sameNumber == 6) {
                    document.write("1등입니다");
    }
