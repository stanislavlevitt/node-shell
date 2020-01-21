const fs = require('fs');

const cat = (file,done) => {
  fs.readFile(`./${file}`,(err,data)=>{
    if(err) throw err
    done(data)
  })
}

module.exports = cat
