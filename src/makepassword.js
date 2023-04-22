'use strict';
const fs = require('fs');
const {readFile, writeFile, hash} = require('./utility');

function makepassword(passwordFileName, passwordEncFileName)
{
    const users = readFile(passwordFileName);
    const passes = [];
    users.forEach(record =>
    {
        const users = record.split(":");
        passes.push(`${users[0]}:${hash(users[1])}`);
    });
    writeFile(passes, passwordEncFileName);
}

if (require.main === module)
{
    makepassword('../password.txt', '../password.enc.txt');
}

module.exports = { makepassword };