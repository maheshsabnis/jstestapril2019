var person = function () { };

person.prototype.canVote = function (v, age) {
    if (v.getAgeCriteria(age)) {
        return 'Can vote';
    }
    return 'Minor';
};

var voter = function () { };

voter.prototype.getAgeCriteria = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;
};

var v = new voter();
var p = new person();

console.log('Person Conclusion is ' + p.canVote(v, 18));
console.log('Person Conclusion is ' + p.canVote(v, 16));
