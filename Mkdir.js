const fs=require('fs')

 fs.Mkdir('Main', ,(err)=>{

        if (err)
        console.log(err)
        else
        console.log('successfully created the folder!')
    })