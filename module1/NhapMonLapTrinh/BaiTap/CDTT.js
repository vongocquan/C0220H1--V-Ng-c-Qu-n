function show() {
    let result;
    let amount = document.getElementById("amount").value;
    let fromcurrency = document.getElementById("fromcurrency");
    let tocurrency = document.getElementById("tocurrency");
    if (fromcurrency.value === "VietNam" && tocurrency.value === "VietNam") {
        result = amount;
    } else if (fromcurrency.value === "VietNam" && tocurrency.value === "USA") {
        result = 23.245 * amount;
    } else if (fromcurrency.value === "USA" && tocurrency.value === "VietNam") {
        result = amount / 23.245;
    } else if (fromcurrency.value === "USA" && tocurrency.value === "USA") {
        result = amount;
    }

    alert("result = " + result)
}

