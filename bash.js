const pwd = require("./pwd")
const ls = require("./ls")
const cat = require("./cat")
const curl = require('./curl')

process.stdout.write('prompt > ');


process.stdin.on('data', (data)=> {
  const cmd = data.toString().split(" ")

  switch(cmd[0]){
    case "pwd":
      pwd();
      break;
    case "ls":
      ls();
      break;
    case "cat":
      cat(cmd[1].trim());
      break;
    case "curl":
      curl(cmd[1].trim());
      break;
    default:
      console.log("error")
  }

  // process.stdout.write('you typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})

