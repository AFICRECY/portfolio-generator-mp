const fs = require("fs");
const inquirer = require('inquirer');

const title = '<title>Portfolio Generator</title>';
const content = '<p>A command-line tool that generates an HTML portfolio page from user input.</p>';
const scriptTag = '<script src="./index.js"></script>'




const generateHtml = ({title,content,scriptTag}) =>{ return `
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${title}
    ${scriptTag}
    </head>
    <body>
    <h1>${name}</h1>
    <div>
    </div>
    ${content}
    </body>
</html>
`;
}

const questions = [
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
