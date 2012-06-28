describe("Custom matchers scenario", function () {

    beforeEach(function () {
        this.addMatchers({
            toHaveAllKeysDefined:function (expected) {
                for (var i = 0; i < expected.length; i++) {
                    if (this.actual[expected[i]] === undefined) return false;
                }
                return true;
            }
        });
    });

    it("it should be able to match on all keys defined", function () {
        expect({'key1':'value1', 'key2':'value2'}).toHaveAllKeysDefined(['key1', 'key2']);
        expect({'key1':'value1', 'key2':'value2'}).toHaveAllKeysDefined(['key1']);

        expect({'key1':'value1', 'key2':'value2'}).not.toHaveAllKeysDefined(['key1', 'key3']);
    });
});