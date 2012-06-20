var HelloWorld = function () {

    this.sayHello = function (name) {

        if (name) {
            return "Hello, " + name + "!";
        } else {
            throw "Invalid name!";
        }
    }
}