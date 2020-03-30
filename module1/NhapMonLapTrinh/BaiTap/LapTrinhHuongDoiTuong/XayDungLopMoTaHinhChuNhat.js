class Rectangle {
    get length() {
        return this._length;
    }

    set length(value) {
        this._length = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }
    get perimeter(){
        return width + length;
    }
    get acreage(){
        return width * length;
    }
    constructor(length, width){
        this._length = length;
        this._width = width;
    }
}let rectangle = new Rectangle (200,100);
let length = rectangle.length;
let width = rectangle.width;
let perimeter = rectangle.perimeter;
let acreage = rectangle.acreage;
alert("length= "+length+ "\n" + "width= "+ width + "\n" + "perimeter= "+ perimeter + "\n" + "acreage= "+ acreage);
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillRect(50, 50, 100, 200);
ctx.stroke();