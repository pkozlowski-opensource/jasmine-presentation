describe("Hello World scenario", function () {

    var hello = new HelloWorld();

    beforeEach(function () {
        hello = new HelloWorld();
    });

    it("should say 'Hello, World! for the World name provided'", function () {
        expect(hello.sayHello("World")).toBe("Hello, World!");
    });

    it("should throw exception for an invalid name", function () {
        expect(function () {
            hello.sayHello(undefined)
        }).toThrow();
    });
});