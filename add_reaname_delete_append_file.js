

//working with file
const fs=require('fs')
fs.writeFile('Main.txt','This is Main.txt',(err)=>{
if (err)
    console.log(err);


else
    console.log('Successfully created file Main.txt');

    fs.readFile('Main.txt', 'utf8',(err,file)=>{
        if (err)
        console.log(err)
        else
        console.log(file)
    });

    fs.rename('Main.txt', 'Mains.txt',(err)=>{

        if (err)
        console.log(err)
        else
        console.log('successfully renamed the file!')
    })
     fs.unlink('Main.txt',(err)=>{
            if(err)
            console.log(err)
            else
              console.log('successfully deleted file from the folder')
     }) 
     

});
    