let b = document.getElementById("carogame");
let arr = [[".",".","."],[".",".","."],[".",".","."]];
let result = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        result += arr[i][j] + "&nbsp" + "&nbsp"
    }
    result += "</br>";
}b.innerHTML = result;
result = "";


function play1() {
    result = "";
    let positionX = prompt("nhập vào x");
    let positionY = prompt("nhập vào y");
    arr[positionX][positionY] = "X";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            result += arr[i][j] + "&nbsp" + "&nbsp"
        }
        result += "</br>";
    }return (b.innerHTML = result);
}
function play2() {
    result = "";
    let positionX = prompt("nhập vào x");
    let positionY = prompt("nhập vào y");
    arr[positionX][positionY] = "O";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            result += arr[i][j] + "&nbsp" + "&nbsp"
        }
        result += "</br>";
    }return (b.innerHTML = result);
}function win() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (arr[i][j] !== "."){
                if (arr[i][j] === arr[i][j+1] && arr[i][j]===arr[i][j+2] ||
                    arr[i][j]===arr[i+1][j+1] && arr[i][j]===arr[i+2][j+2] ||
                    arr[i][j]===arr[i+1][j] && arr[i][j] === arr[i+2][j]){
                    return "thắng"
                }
            }
        }
    }
}
function changeValue() {
    alert(win());
    play1();
    play2();
}