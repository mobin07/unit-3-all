// Low Level Design
// We are seeing the best way to write a program.
// of course this is big code but it is rigid

class Vehicle{
    constructor(type,regNumber,color){
        this._type=type;
        this._regNumber=regNumber;
        this._color=color;
    }
    // we use this._type because we have method  name same as get type and set type
    // thats why we use _
    // get type(){
    //     return this.type;
    // }
    // We will see ES6 type
    // in this we use get and set method in ES6
    get type(){
        return this._type;
    }
    set type(value){
        this._type=value;
    }
    get regNumber(){
        return this._regNumber
    }
    set regNumber(value){
        this._regNumber(value);
    }
    get color(){
        return this._color
    }
    set color(value){
        this._color=value;
    }
}

class Car extends Vehicle{
    constructor(regNumber,color){
        super('Car',regNumber,color);
    }
}

class Bike extends Vehicle{
    constructor(regNumber,color){
        super("Bike",regNumber,color);
    }
}
class Truck extends Vehicle{
    constructor(regNumber,color){
        super("Truck",regNumber,color)
    }
}

// getter and setter method
// let c1=new Car("MFH 2","Black")
// console.log("c1:",c1.type);


// individual parking spot
class Slot{
    constructor(type,number){
        this.number=number;
        this.type=type;
        this._isBooked=false
    }
    get isBooked(){
        return this._isBooked;
    }
    set isBooked(value){
        this._isBooked=value;
    }
}
// Individual Floor

class ParkingFloor{
    constructor(floornumber,maxFloor){
        this.floornumber=floornumber;
        this._parkingspots=[]; /*we need to push parking slots*/
        for(let i=0;i<maxFloor;i++){
            if(i==0){
                // push Truck
                this._parkingspots.push(new Slot("Truck",i))
            }
            else if(i==1){
                // push bike
                this._parkingspots.push(new Slot("Bike",i))

            }
            else {
                // push car
                this._parkingspots.push(new Slot("Car",i))

            }
        }
    }
    get parkingspots(){
        return this._parkingspots;
    }
}
// let pf1=new ParkingFloor(0,3);
// console.log("pf1:",pf1);

class ParkingLot{
    constructor(number){
        this._floors=[];
        this._numberofFloors=number;
        for(let i=0;i<number;i++){
            this._floors[i]=new  ParkingFloor(i,number);
        }
    }
    get numberofFloors(){
        return this._numberofFloors
    }
    get floors(){
        return this._floors;
    }
    set floors(value){
        this._floors=value;

    }
    parkVehicle(vehicle){
        let slot=this.findSlot(vehicle.type);
        if(!slot){
            console.log("No slots");
            return false;
        }
        this.bookslot(slot)

        let ticket=new Ticket(slot.floornumber,slot.slot.number)
        console.log('ticket is issued',ticket)
    }

    // uptil now we have made the structure of parking lot-->1st part 
    // now we will write the method --> 2nd part
    findSlot(type){
        // floor-0->0,1,2
        // floor-1->0,1,2

        for(i=0;i<this._numberofFloors;i++){
            for(let slot of this._floors[i]._parkingspots){
                // console.log("slot:",slot);
                if(slot.type==type && slot._isBooked){
                    console.log("slot:",slot);
                    return {floornumber: i , slot: slot}
                }
            }
        }
        return false;
    }
    bookslot(slot){
        slot.slot.isBooked=true;
        console.log("slot is booked ",slot);

        return true;
    }
}



class Ticket{
    constructor(floorNumber,slotNumber){
        this.floorNumber=floorNumber;
        this.slotNumber=slotNumber;

        this.issueAt=new Date();
    }
}



let p1=new ParkingLot(3);
// console.log("p1:",p1);

let b1=new Bike("MH 12 1234","Black")
p1.parkVehicle(b1);

