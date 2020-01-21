const fs = require('fs');

const cat = (file) => {
  fs.readFile(`./${file}`,(err,data)=>{
    if(err) throw err
    process.stdout.write(data)
  })
}

module.exports = cat
