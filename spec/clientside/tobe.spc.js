describe('tobe test', function () {
    it('should return type equality', function () {
        var x = 10; // number
        var y = 10; // number
        expect(x).toBe(y);
    });

    it('should return boolean tobe equality', function () {
        var x = true; // premptive
        var y = true;
        expect(x).toBe(y);
    });

    it('should return match tobe equality for array', function () {
        var x = [10, 20]; // complex object type
        var y = [10, 20];
        // expect(x).toBe(y);
        expect(x).toEqual(y);
    });
});