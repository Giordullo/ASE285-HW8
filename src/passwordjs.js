'use strict';
const fs = require('fs');
const { readFile, hash, getInfo } = require('./utility');

function passwordjs()
{
    if (process.argv.length != 5)
        return 'false';

    var filename = process.argv[2];
    var email = process.argv[3];
    var password = process.argv[4];

    const users = getInfo(readFile(filename));
    const user = users.find(user => user.email === email);

    if (!user)
        return 'false';
    else
        return (user.password === hash(password)).toString();
}

if (require.main === module)
{
    console.log(passwordjs()); // print out true or false
}

module.exports = { passwordjs };