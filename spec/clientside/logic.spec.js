describe('logic testing', function () {
    var p;
    var v;
    beforeEach(function () {
        p = new person();
        v = new voter();
    });

    it('should return true for age greater than or equal to 18', function () {
        var age = 18;
        var actual = v.getAgeCriteria(age);
        expect(actual).toBeTruthy();
    });

    it('should return false for age less than 18', function () {
        var age = 16;
        var actual = v.getAgeCriteria(age);
        expect(actual).toBeFalsy();
    });
    // integration because canVote() access getAgeCriteria()
    it('should return Can vote base on age', function () {
        var age = 18;
        var expected = 'Can vote';
        var actual = p.canVote(v, age);
        expect(actual).toEqual(expected);
    });

    it('should perform spy on to verify the call', function () {
        // define spy on the method of the object
        // note that the method already exists 
        var spyCall = spyOn(v, "getAgeCriteria");
        var age = 18;
        var res = p.canVote(v, age);
        // expect the spy to be called
        // canVote() method will use the spy to call
        expect(spyCall).toHaveBeenCalledWith(age);
        expect(res).toEqual('Minor');
    });
});