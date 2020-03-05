function show() {
    let money;
    let result;
    let amount = document.getElementById("amount").value;
    let fromcurrency = document.getElementById("fromcurrency");
    let tocurrency = document.getElementById("tocurrency");
    if (fromcurrency.value === "VietNam" && tocurrency.value === "VietNam") {
        money = amount;
    } else if (fromcurrency.value === "VietNam" && tocurrency.value === "USA") {
        money = 23.245 * amount;
    } else if (fromcurrency.value === "USA" && tocurrency.value === "VietNam") {
        money = amount / 23.245;
    } else if (fromcurrency.value === "USA" && tocurrency.value === "USA") {
        money = amount;
    }
    result = money;
    alert("result = " + result)
}

