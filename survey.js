const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What do you think of Node.js? ', (answer1) => {
  rl.question('What improvement would u suggest? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: \n What do you think of Node.js?: ${answer1} \nWhat improvement would u suggest?: ${answer2}`);
    rl.close();
  });

});