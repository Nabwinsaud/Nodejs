//node js basic EventEmitter
const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('name',(num1,num2)=>{
console.log('The add of two number is :' , num1+num2)

})
eventEmitter.emit('name',2,3)
//using class eventEmitter method

class Person extends EventEmitter {

    constructor(name){

        super();
        this._name=name;
     }
     get name(){
        return this._name;    
    }  

  
}
let person=new Person('Nabin saud');
person.on('click',()=>{
console.log('Your name is ' + person.name);

})

person.emit('click');


