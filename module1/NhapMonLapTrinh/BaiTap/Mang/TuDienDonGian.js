function show() {
    let result;
    let english = document.getElementById("english").value;
    let arrayenglish = ["hello", "we", "they", "you", "yes", "no"];
    let arayVietNam = ["Xin Chào", "Chúng tôi", "Họ", "Đúng", "Không"];
    for (var i = 0; i < 6; i++) {
        if (english === arrayenglish[i]) {
            result = arayVietNam[i]
            break;
        }
    } alert(result)


}