'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//es6中的类的定义
var car = function () {
    function car(make, model) {
        _classCallCheck(this, car);

        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }

    _createClass(car, [{
        key: 'shift',
        value: function shift(gear) {
            if (this.userGears.indexOf(gear) < 0) {
                throw new Error('Invalid gear: ' + gear);
            }
            this.userGear = gear;
        }
    }]);

    return car;
}();

var car1 = new car();
var car2 = new car();

console.log(car1 instanceof car);

/*
es6 map set
    
*/
var u1 = { name: 'cyntria' };
var u2 = { name: 'shikun' };
var all = new Map();
all.set(u1, 'user');
all.set(u2, 'user');
console.log(all.values());

//Set 
var roles = new Set();
roles.add('user');
roles.add('admin');
console.log(roles);

//WeakMap(). key只能是object 不能被迭代，和删除
//WeakSet(). 元素只能是object

//es6 新增iterators 和 generators

// const book = ['122', '1212', 'adsdas', 'sadfasdf', 'adsfasd'];
// const it = book.values();
// console.log(it.next());

var Log = function () {
    function Log() {
        _classCallCheck(this, Log);

        this.message = [];
    }

    _createClass(Log, [{
        key: 'add',
        value: function add(message) {
            this.message.push({ message: message, timestamp: Date.now() });
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            return this.message.values();
        }
    }]);

    return Log;
}();

var log = new Log();
log.add('first day at sea');
log.add('spotted whale');
log.add('spotted another');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = log[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var entry = _step.value;

        console.log(entry.message + ' @ ' + entry.timestamp);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}