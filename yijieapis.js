function checkTWId(id) {
    let regex = /^[A-Za-z][1-2][0-9]{8}$/;
    if (regex.test(id)) {
        let letters = "ABCDEFGHJKLMNPQRSTUVWZIO";
        let c12 = id.substr(0, 1);
        let n12 = letters.indexOf(c12) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let data = [n1, n2];
        for (let i = 1; i <= 9; i++) {
            data.push(id.substr(i, 1));
        }

        let sum = data[0] * 1 + data[1] * 9 + data[2] * 8 + data[3] * 7 +
            data[4] * 6 + data[5] * 5 + data[6] * 4 + data[7] * 3 + data[8] * 2 + data[9] * 1 + data[10] * 1
        return sum % 10 === 0
    } else {
        return false;
    }
}

