function addspeed(flag) {
    switch(flag){
        case 28:flag = 0;break;
        case 29:flag = 1;break;
        case 30:flag = 2;break;
    }

    if (flag === 0) {
        document.getElementById(27).style = "background-color:none";
        document.getElementById(flag).style = "background-color:red";
    } else {
        document.getElementById(flag).style = "background-color:red";
        document.getElementById(flag - 1).style = "background-color:none";
    }
}


function createRand(start, end) {  //產生時間亂數範圍值亂數 並*上1000
    let rand = 0;
    rand = parseInt(Math.random() * end) + 1;
    if (rand >= start && rand <= end) {
        return rand*1000;  //返回時間
    } else {
        return createRand(start, end)   //不再範圍內的話則重新
    }
}

function stop(data) {  //停止setInterval
    clearInterval(data)
    return true;
}