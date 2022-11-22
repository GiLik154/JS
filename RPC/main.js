let resultString = "";
let result = "";
let userRpc = "";
let comRpc = "";
let userimg ="";
let comimg ="";

window.onload = function(){
    rpcInputText = document.getElementById("rpc_input_text");
    rpcResult = document.getElementById("rpc_result_screen");
    userimg = document.getElementById("rpc_user")
    comimg = document.getElementById("rpc_com")
}

function rpcInputButtonClick(){
    while (true) {
        userRpc = rpcInputText.value;
        if (userRpc == "가위" || userRpc == "바위" || userRpc == "보") {
            break;
        }
        else {
            alert("다시 입력하세요");
            break;
        }
    }

    comRpc = Math.floor(Math.random() * 3 + 1);
    switch (comRpc) {
        case 1: {
            comRpc = "가위";
            comimg.innerHTML = "<img src='c_sc.png'>"
            // document.write(comRpc);
            break;
        }
        case 2: {
            comRpc = "바위";
            // document.write(comRpc);
            comimg.innerHTML = "<img src='c_ro.png'>"
            break;
        }

        case 3: {
            comRpc = "보";
            // document.write(comRpc);
            comimg.innerHTML = "<img src='c_pa.png'>"
            break;
        }
    }

    if (userRpc == "가위") {
        userimg.innerHTML = "<img src='c_sc.png'>"
        if (comRpc == "가위") {
            result = "비김";
        }
        else if (comRpc == "바위") {
            result = "짐";
        }
        else {
            result = "이김";
        }
    }
    else if (userRpc == "바위") {
        userimg.innerHTML = "<img src='c_ro.png'>"
        if (comRpc == "가위") {
            result = "이김";
        }
        else if (comRpc == "바위") {
            result = "비김";
        }
        else {
            result = "짐";
        }
    }
    else {
        userimg.innerHTML = "<img src='c_pa.png'>"
        if (comRpc == "가위") {
            result = "짐";
        }
        else if (comRpc == "바위") {
            result = "이김";
        }
        else {
            result = "비김";
        }
    }
            // document.write(comRpc);

    resultString = "유저 : " + userRpc +"\n";
    resultString =resultString + "컴퓨터 : " + comRpc +"\n";
    resultString =resultString + "결과 : " + result;
    rpcResult.value = resultString;
}