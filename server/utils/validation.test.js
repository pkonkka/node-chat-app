const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        var real = isRealString(123);
        expect(real).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var real = isRealString('     ');        
        expect(real).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var real = isRealString('test-string');
        expect(real).toBe(true);
    });

});

