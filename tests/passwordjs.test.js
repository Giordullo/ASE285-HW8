// Make tests when you have sub functions in this module.
// passwordjs() is tested by acceptance tests (acceptance.bat)
const { readFile, hash, getInfo } = require('../src/utility');
const fs = require("fs");

describe('passwordjs() should get two arguments and return true or false (Test the functions used inside passwordjs())', () =>
{
    const passFile = './tests/passwordtest.txt';

    test('Make sure readFile() functions properly',() =>
    {
        expect(fs.existsSync(passFile)).toBe(true);
    })

    test('Make sure hash() functions properly',() =>
    {
        expect(hash('test')).toBe('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08');
    })

    test('Make sure convertToUser() functions properly',() =>
    {
        expect(getInfo(['email@email.com:password'])[0]).toStrictEqual({ email: 'email@email.com', pass: 'password' });
    })
})
