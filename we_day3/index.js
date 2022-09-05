// const student={

//     unit:3,
//     batch:'web 17',
//     instructor:'sk'
// }
// // Object.create method 
// const s1=Object.create(student);
// s1.name='vijay';
// const s2=Object.create(student)
// const s3=Object.create(student)


// we can also use constructor function to do this beacuse with constructor function 
// we can pass argumnet
// why its called prototypal inheritance
// because we are using prototype in order to do inheritance

// prototype is a tool which we use to achive inheritence

// function student(n,u){
//     this.name=n;
//     this.unit=u
// }
// // this is called constructor function
// // in order to add property to object
// student.prototype.course='fswb';
// // we can also add function i.e. method to object
// student.prototype.bio=function(){
//     console.log(`Hello from ${this.name}`);

// }

// let s1=new student('saber',3);
// console.log('s1',s1);

function product(n,p){
    this.name=n;
    this.price=p;
    this.seller='flipkart';
}
product.prototype.description=function(){
    console.log(`${this.name} is of price ${this.price}`);

}
product.prototype.coupan=function(){
    console.log('20% discount on produt')
}
let p1=new product('shoes',23);
console.log(p1);
p1.coupan();



