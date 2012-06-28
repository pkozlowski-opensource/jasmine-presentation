describe("Hello World scenario", function () {

    var hello;

    beforeEach(function () {
        hello = new HelloWorld();
    });

    it("should say 'Hello, World! for the World name provided'", function () {
        expect(hello.sayHello("World")).toBe("Hello, World!");
    });

    it("should throw exception for an invalid name", function () {
        expect(function () {
            hello.sayHello(undefined)
        }).toThrow("Invalid name!");
    });
});