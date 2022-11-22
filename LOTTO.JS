let lottoNumber = new Array();
let userNumber = new Array();
let lottoSame = new Array();
let a = 0;
let b = 0;
let c = 0;
let v = 0;
let sameNumber = 0;
let specNum;
let specNumRan;
let specNumRanI;
let bounus = false;
let loop =true;

// while(loop){
    bounus = false;
    v = v + 1; // 몇번 돌렸는지 확인
    document.write("로또 시작");
document.write("<hr>");
document.write("<hr>");


for (let i = 0; i < 7; i++) { //숫자 6개 뽑기
    // a = prompt((i+1) + "번입력"); //창 띄워서 뽑기
    b = Math.random() * 45 + 1; // 자동돌리기
    a = Math.floor(b); // 자동돌리기
    userNumber[i] = a;
    while (true) {
        if (a > 45 || a < 0) {
            i--;
            alert("다시 입력하세요");
            break;
        }
        else if(true){
            for (let q = 0; q < 7; q++) { // 동일 숫자 확인
                if (q != i && userNumber[q] == userNumber[i]) { //45이상 나온 숫자, 동일 숫자 걸러냄
                    // alert("중복된 숫자입니다");
                    i--;
                    break;
                }
            }
            break;
        }
    }
}
// userNumberText.innerHtml = "번호입력:" + userNumber + '\n'
document.write("번호 입력 :" + userNumber + '\n');
document.write("<hr>");


for (let i = 0; i < 7; i++) { // 컴퓨터 숫자 랜덤 뽑기
    c = Math.random() * 45 + 1;
    b = Math.floor(c);
    lottoNumber[i] = b;
    for (let q = 0; q < 7; q++) { // 동일 숫자 확인
        if (q != i && lottoNumber[q] == lottoNumber[i] || lottoNumber[i] > 45) { //45이상 나온 숫자, 동일 숫자 걸러냄
            // document.write(i, q);
            c = Math.random() * 45 + 1; // 숫자 재설정
            b = Math.floor(c);
            lottoNumber[i] = b;
            q = -1; // 다시 검사
        }
    }
}


{specNumRan = Math.random() * 7; // 보너스 숫자 뽑기
specNumRanI = Math.floor(specNumRan);
specNum = lottoNumber[specNumRanI]; 
document.write(("보너스 번호" + lottoNumber[specNumRanI]))
document.write("<hr>");
}

// for (let i = 0; i < 5; i++) { // 동일한 숫자 있는지 버그 확인
//     for (let q = 1; q < 6; q++) {
//         if (i != q && lottoNumber[i] == lottoNumber[q]) {
//             document.write(i + q);
//             document.write("bugkkkk");
//             document.write('\n' + lottoNumber);
//             alert(lottoNumber)
//             G = false;
//         }
//     }
// }

for(let i = 0; i < 7; i++){ //번호 비교
    for(let q = 0; q < 7; q++){
        if (userNumber[i] == lottoNumber[q]){
            sameNumber++;
            lottoSame = i;
            document.write((lottoSame + 1) + "번 같음" + '\n');
            document.write("<hr>");
            if(lottoNumber[specNumRanI] == userNumber[i]){
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

sameNumber = 0 ;
document.write(v + "번 돌렷습니다.");
document.write("<hr>");
// }