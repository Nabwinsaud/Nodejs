//readline

const readline = require('readline');
const rdl=readline.createInterface({input:process.stdin , 
    output:process.stdout})
var num1=Math.floor((Math.random()*10)+1);
var num2=Math.floor((Math.random()* 10)+1) ;

var ans=num1+num2;

rdl.question(`What is the ${num1} + ${num2} ?:\n `,
(userInput)=>{
    if (userInput.trim()==ans){
        rdl.close();
    }
    else{
      rdl.setPrompt('incorrect answer!\n')
      rdl.prompt(); //call prompt
      rdl.on('line',(userInput)=>{
          if(userInput.trim()==ans){
              rdl.close();
          }
          else{
              rdl.setPrompt(`Your answer ${userInput} is not correct!  \n`);
              rdl.prompt();
          }
      })
    }
    // console.log(userInput);
}
);
rdl.on('close',()=>{
    console.log('correct')
})