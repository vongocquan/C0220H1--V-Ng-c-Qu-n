function play(){
    let number = document.getElementById("number");
    let result = document.getElementById("result");
    let serectnumber = Math.floor(Math.random());
    for (i = 0; i < 3; i++){
        if (number === serectnumber){
            alert("win");
            break;
        }else {
            if (i < 2){
                alert("Wrong. Choose Again")
            }else {
                alert("game over !!!")
                break
            }
        }
    }
}