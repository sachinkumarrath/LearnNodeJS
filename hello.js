const validator = require('validator')
const prompt = require('prompt')
const chalk = require('chalk')

console.log('args : ' + process.argv)

const name = "sachin@email.com"
const getName = () => {
  return name;
}

console.log('welcome to Node world ' + name);
console.log('is this an email ' + validator.isEmail(name));

function getUserName() {
  return new Promise((resolve, reject) => {
    prompt.start();
    prompt.get(['username', 'email'], function (err, result) {
        if (err) { reject(err); }
        console.log(chalk.blue.inverse('Command-line input received:'));
        const { username: userName, email } = result;
        resolve({userName, email})
    });
  })
}

getUserName().then(({userName, email}) => {
  console.log(chalk.bold('  Username: ' + userName));
  console.log(chalk.bold('  Email now: ' + email));
})

// module.exports = name;
module.exports = {
  getName
}