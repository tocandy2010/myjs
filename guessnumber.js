function createAnswer(n = 3) {  //產生一組不重複的3位數
    let data = [];

    for (let i = 0; i < 10; i++) {
        data[i] = i;
    }
    for (let i = data.length - 1; i > 0; i--) {
        let rand = parseInt(Math.random() * (n + 1));
        [data[rand], data[i]] = [data[i], data[rand]]
    }
    let ret = '';
    for (let i = 0; i < n; i++) {
        ret += data[i];
    }

    return ret;
}


function checkAB(ans, gus) { //猜數字提示
    let a = 0, b = 0;
    for (let i = 0; i < gus.length; i++) {
        if (gus.charAt(i) === ans.charAt(i)) {
            a++;
            continue;
        }
        if (ans.indexOf(gus.charAt(i))>=0) {
            b++;
        }
    }
    return a + "A" + b + "B";
}

function cleanguess(){ //清除輸入猜的數字框
    guess.focus();
    guess.value = "";
}

function inputNum (data){
    var num = document.getElementById("num");
    var guessnum = document.getElementById("guessnum")

    if(data === true){
        Number.value = guessnum.innerHTML;
        return 123
    }

}

function resetNum(){
    
}