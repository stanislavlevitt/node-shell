const pwd = require("./pwd")
const ls = require("./ls")
const cat = require("./cat")
const curl = require('./curl')

process.stdout.write('prompt > ');


process.stdin.on('data', (data)=> {
  const cmd = data.toString().split(" ")

  switch(cmd[0].trim()){
    case "pwd":
      pwd(done);
      break;
    case "ls":
      ls(done);
      break;
    case "cat":
      cat(cmd[1].trim(),done);
      break;
    case "curl":
      curl(cmd[1].trim(),done);
      break;
    default:
      console.log("error")
  }
})

function done (output){
  process.stdout.write(output)
  process.stdout.write('\nprompt > ')
}
