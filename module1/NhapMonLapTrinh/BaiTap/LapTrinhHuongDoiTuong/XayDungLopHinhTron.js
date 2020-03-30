class Circle {
    get radius(){
        return this._radius
    }
    get erea(){
        return Math.PI * radius * radius;
    }
    constructor(radius) {
        this._radius = radius;
    }
    
}let circle = new Circle(2);
let radius = circle.radius;
let area = circle.erea;
alert("radius: " + radius + "; area: " + area);