function Operation() { }

Operation.prototype.add = function (x, y) {
    return x + y;
};

Operation.prototype.mult = function (x, y) {
    return x * y;
};

Operation.prototype.checkValue = function (x) {
    if (x > 10) return true;
    return false;
};
module.exports = Operation;