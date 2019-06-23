function addspeed(flag,userchoseone) {
    flag = overflow(flag);

    if (flag === 0) {
        document.getElementById(27).style = "background-color:none";
        document.getElementById(flag).style = "background-color:red";
    } else {
        document.getElementById(flag).style = "background-color:red";
        document.getElementById(flag - 1).style = "background-color:none";
    }
    document.getElementById(userchoseone).style = "background-color:green";
}


function createRand(start, end) {  //產生區間亂數範圍值亂數 並*上1000
    let rand = 0;
    rand = parseInt(Math.random() * end) + 1;
    if (rand >= start && rand <= end) {
        return rand;  //返回時間
    } else {
        return createRand(start, end)   //不再範圍內的話則重新
    }
}


function stop(data) {  //停止setInterval
    clearInterval(data)
    return true;
}

function win(flag,color){ //停止後背景反黃
    flag = overflow(flag);
    document.getElementById(flag).style = "background-color:"+color;
}

function overflow(flag){  //flag 溢出轉換
    switch(flag){
        case 28:flag = 0;break;
        case 29:flag = 1;break;
        case 30:flag = 2;break;
        default:flag;
    }
    return flag;
}


function isWin(flag,userchoseone){
    flag = Number(flag);
    userchoseone = Number(userchoseone);

    if(flag ===userchoseone ){
        return 200;
    }else if((userchoseone-1) ===flag ||(userchoseone+1) ===flag){
        return 150;
    }else if((userchoseone-2) ===flag ||(userchoseone-2) ===flag){
        return 110;
    }else{
        return false;
    }

}