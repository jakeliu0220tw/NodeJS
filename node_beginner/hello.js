//hello.js

function Hello() {
    var name;

    this.setName = function (theyName) {
        name = theyName;
    };

    this.sayHello = function () {
        console.log('Hello ' + name);
    };
}

module.exports = Hello;
