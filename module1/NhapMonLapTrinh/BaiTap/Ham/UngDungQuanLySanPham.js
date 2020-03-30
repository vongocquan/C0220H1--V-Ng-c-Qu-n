let productNameArry = ["bột giặt"];
function showListProduct() {
    let product = document.getElementById("product");
    let Product = '<tr>' +
        '<td>STT</td>' +
        '<td>Tên Sản Phẩm</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>';
    for (let i = 0; i< productNameArry.length; i++){
        Product += '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td><input id="'+ i +'" type="text" value="' + productNameArry[i] +'"readOnly/></td>' +
            '<td id="td' + i + '"><button onclick="changeBtnSubmit(' + i + ')">edit</button></td>' +
            '<td><button onclick="deleteProduct(' + i + ')">Delete</button></td>' +
            '</tr>'

        }
    product.innerHTML = Product


}
function addproducts() {
    let addproducts = document.getElementById("addproducts");
    productNameArry.push(addproducts.value);
    showListProduct();

}
function changeBtnSubmit(id) {
    let tdProuct = document.getElementById("td" + id);
    let inputProuct = document.getElementById(id);
    inputProuct.readOnly = false;
    tdProuct.innerHTML = '<button onclick="undateProuct(' + id + ')">Submit</button>'
}function undateProuct(id) {
    let inputProuct = document.getElementById(id);
    productNameArry[id] = inputProuct.value;
    showListProduct()

}
function deleteProduct(id) {
    for (let i = id; i < productNameArry.length - 1; i++){
        productNameArry[i] = productNameArry[i + 1];
    }
    productNameArry.pop(id);
    showListProduct()

}