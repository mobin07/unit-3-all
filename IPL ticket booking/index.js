class Person{
    constructor(type,name,age,gender){
        this.type=type;
        this._name=name;
        this._age=age;
        this._gender=gender;
        
    }
    get type(){
        return this._type;
    }
    set type(value){
        this._type=value;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name=value
    }
    get age(){
        return this._age
    }
    set age(value){
        this._age=age;
    }
    get gender(){
        return this._gender;
    }
    set gender(value){
        this._gender=gender;

    }
}
class Seat{
    constructor(type,number){
        this._type=type;
        this.number=number;
        this._isBooked=false;
    }
    set isBooked(value){
        this._isBooked=value;
    }
    get isBooked(){
        return this._isBooked;
    }
}
class stadiumFloor{
    constructor(){
        // this.no_of_seat=no_of_seat;
        this._seat_arrangement=[];
    
    for(let i=0;i<25;i++){
        if(i>=0 || i<5){
            this._seat_arrangement.push(new Seat("VVIP",i));
        }
        if(i>=5 || i<10){
            this._seat_arrangement.push(new Seat("VIP",i));
        }
        if(i>=10 || i<25){
            this._seat_arrangement.push(new Seat("General",i));
        }
    }}
    get seat_arrangement(){
        return this._seat_arrangement;
     }
}