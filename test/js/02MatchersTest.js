describe("Hello World scenario", function () {

    var toMatch = new Matchers();

    it("is possible to use different matchers", function () {

        //true / false
        expect(toMatch.booleanValue()).toBeTruthy();
        expect(toMatch.booleanValue()).not.toBeFalsy();

        //numbers
        expect(toMatch.intValue()).toBeGreaterThan(9);
        expect(toMatch.intValue()).toBeLessThan(11);
        expect(toMatch.intValue()).toBeCloseTo(10.003);

        //strings
        expect(toMatch.stringValue()).toEqual("some string");
        expect(toMatch.stringValue()).toContain("some");

        //any object
        expect(toMatch.objectValue()).toBeDefined();
        expect(toMatch.objectValue()).not.toBeUndefined();
        expect(toMatch.objectValue()).toEqual({'key' : 'value'});
        expect(toMatch.objectValue()).not.toBe({'key' : 'value'});

    });

});