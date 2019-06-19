function createId(sex, regin) {
    let data = "";
    let rand = "";
    let head = "";
    if (regin.length !== 2) {
        return false;
    }
    rand += createrandn(8, sex, regin);
    regin = Number(regin);
    switch (regin) {
        case 10: head = 'A'; break;
        case 11: head = 'B'; break;
        case 12: head = 'C'; break;
        case 13: head = 'D'; break;
        case 14: head = 'E'; break;
        case 15: head = 'F'; break;
        case 16: head = 'G'; break;
        case 17: head = 'H'; break;
        case 34: head = 'I'; break;
        case 18: head = 'J'; break;
        case 19: head = 'K'; break;
        case 21: head = 'M'; break;
        case 22: head = 'N'; break;
        case 35: head = 'O'; break;
        case 23: head = 'P'; break;
        case 24: head = 'Q'; break;
        case 27: head = 'T'; break;
        case 28: head = 'U'; break;
        case 29: head = 'V'; break;
        case 32: head = 'W'; break;
        case 30: head = 'X'; break;
        case 33: head = 'Z'; break;
        default: return false;
    }
    return head +sex+ rand;
}



function createrandn(size, sex, regin) {
    let data = "";
    let result;
    for(let i=0;i<size;i++){
        data += parseInt(Math.random()*10);
    }
    let n1 = regin.substr(0, 1) * 1;
    let n2 = regin.substr(1, 1) * 9;
    let n3 = sex * 8;
    let n4 = data.substr(0, 1) * 7;
    let n5 = data.substr(1, 1) * 6;
    let n6 = data.substr(2, 1) * 5;
    let n7 = data.substr(3, 1) * 4;
    let n8 = data.substr(4, 1) * 3;
    let n9 = data.substr(5, 1) * 2;
    let n10 = data.substr(6, 1) * 1;
    let n11 = data.substr(7, 1) * 1;

    result = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11) % 10 === 0
    if (result === true) {
        return data;
    } else {
        return createrandn(size, sex, regin);
    }

}