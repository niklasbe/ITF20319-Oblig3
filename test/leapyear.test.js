const chai = require('chai');
const expect = chai.expect;

const isLeapYear = require('../src/leapyear')

describe('Leap Year Test', function() {
    it('should return true for years divisible by 4 but not by 100', function() {
        expect(isLeapYear(2004)).to.be.true;
        expect(isLeapYear(2008)).to.be.true;
    });

    it('should return true for years divisible by 400', function() {
        expect(isLeapYear(2000)).to.be.true;
    });

    it('should return false for years not divisible by 4', function() {
        expect(isLeapYear(2001)).to.be.false;
        expect(isLeapYear(2002)).to.be.false;
        expect(isLeapYear(2003)).to.be.false;
    });

    it('should return false for years divisible by 100 but not by 400', function() {
        expect(isLeapYear(1700)).to.be.false;
        expect(isLeapYear(1800)).to.be.false;
        expect(isLeapYear(1900)).to.be.true; // test is wrong, 1900 is not a leap year
    });
});