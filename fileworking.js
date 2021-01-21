//working with file
const fs=require('fs')
fs.writeFile('Main.txt','This is Main.txt',(err)=>{
if (err){
    console.log(err);

}
else{
    console.log('Successfully created file Main.txt');
    fs.readFile('Main.txt', 'utf8',(err,file)=>{
        if (err)
        console.log(err)
        else
        console.log(file)
    });
}

//rename
fs.rename('Main.txt', 'Mains.txt',(err)=>{

    if (err)
    console.log(err)
    else
    console.log('successfully renamed the file!')
})

})


// //node js basic EventEmitter
// const EventEmitter=require('events');
// const eventEmitter=new EventEmitter();
// eventEmitter.on('name',(num1,num2)=>{
// console.log('The add of two number is :' , num1+num2)

// })
// eventEmitter.emit('name',2,3)
// //using class eventEmitter method

// class Person extends EventEmitter {

//     constructor(name){

//         super();
//         this._name=name;
//      }
//      get name(){
//         return this._name;    
//     }  

  
// }
// let person=new Person('Nabin saud');
// person.on('click',()=>{
// console.log('Your name is ' + person.name);

// })
// // 
// person.emit('click');


