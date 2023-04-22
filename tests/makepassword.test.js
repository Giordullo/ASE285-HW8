// To unit-test the function that generates 'password.enc.txt', you should
//  make sure the unit test does the following check.
// 1. Make sure password.enc.txt does not exist before running the function.
// 2. Make sure password.enc.txt does exist after running the function.
// 3. Make sure the contents of password.enc.txt has correct contents.
// For unit tests, you don't have to have a large input in the beginning.
// Start with smallest input, and add more contents in the input

const p = require('../src/makepassword');
const { readFile, writeFile, hash, getInfo } = require('../src/utility');
const fs = require('fs');

/*
// Let's say you have a toHash() function in this module

test('Check toHash(): if the email:password is converted into email:hashPassword', () => {
    const input = ???
    const output = ???
    expect(p.toHash(input)).toBe(output);
});
*/

describe('makepassword() should create file', () =>
{
    const passFile = './tests/passwordtest.txt';
    const passFileEnc = './tests/passwordtest.enc.txt';

    test('Make sure password.enc.txt does not exist before running the function',() =>
    {
        expect(fs.existsSync(passFileEnc)).toBe(false);
    });

    test('Make sure password.enc.txt does exist after running the function.',() =>
    {
        p.makepassword(passFile, passFileEnc);
        expect(fs.existsSync(passFileEnc)).toBe(true);
    });

    test('Make sure the contents of password.enc.txt has correct contents.',() =>
    {
        for (let i = 0; i < getInfo(readFile(passFile)).length; i++)
        {
            expect(getInfo(readFile(passFileEnc))[i].email).toBe(getInfo(readFile(passFile))[i].email)
            expect(hash(getInfo(readFile(passFile))[i].pass)).toBe(getInfo(readFile(passFileEnc))[i].pass)
        }
    });

    // Delete password.enc.txt after testing
    if (fs.existsSync(passFileEnc))
        fs.unlinkSync(passFileEnc);
})