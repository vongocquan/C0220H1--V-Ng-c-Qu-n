class MyDate {
    get day() {
        return this._day;
    }

    set day(value) {
        this._day = value;
    }

    get month() {
        return this._moth;
    }

    set month(value) {
        this._moth = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }
   constructor(day, moth, year) {
       this._day = day;
       this._moth = moth;
       this._year = year;
   }

}
let date = new MyDate(2, 2, 2007);
let day = date.day; // 2

let month = date.month; // 2

let year = date.year; // 2007
alert(day + "/" + month + "/" + year);
date.day = 10;
date.month = 10;
date.year = 2019;
alert(date.day + "/" + date.month + "/" + date.year);
