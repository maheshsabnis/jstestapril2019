describe('Fundamental Code Test', function () {
    // loading the exported module for
    // current test-suit context
    var myObj = require('../../serverside/fundamental');

    it('should add two integers', function () {
        // 1. arrange
        var obj = new myObj();
        var x = 10;
        var y = 20;
        var expected = 30;
        // 2. act
        var actual = obj.add(x, y);
        // 3. assert
        expect(actual).toEqual(expected);
    });

    it('should multiply two integers', function () {
        // 1. arrange
        var obj = new myObj();
        var x = 10;
        var y = 20;
        var expected = 200;
        // 2. act
        var actual = obj.mult(x, y);
        // 3. assert
        expect(actual).toEqual(expected);
    });
    it('should return true for value greater than 10', function () {
        // 1. arrange
        var obj = new myObj();
        var x = 20;

        // 2. act
        var actual = obj.checkValue(x);
        // 3. assert
        expect(actual).toBeTruthy();
    });

    it('should return true for value lesser than 10', function () {
        // 1. arrange
        var obj = new myObj();
        var x = 9;
        // 2. act
        var actual = obj.checkValue(x);
        // 3. assert
        expect(actual).toBeFalsy();
    });
});