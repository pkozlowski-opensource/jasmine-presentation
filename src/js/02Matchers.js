var Matchers = function () {
};

Matchers.prototype.stringValue = function () {
    return "some string";
};

Matchers.prototype.intValue = function () {
    return 10;
};

Matchers.prototype.booleanValue = function () {
    return true;
};

Matchers.prototype.objectValue = function () {
    return {'key' : 'value'};
};