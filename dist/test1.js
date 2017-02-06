'use strict';

var _Math$min;

var result1 = 3 + '30';
console.log(result1);
var result2 = 3 * '30';
console.log(result2);
var obj = {};
obj.size = 10;
obj.color = 'yellow';
//es6 destructing assignment
var obj1 = { a: 1, b: 2, c: 3 };
var a = obj1.a,
    b = obj1.b,
    c = obj1.c;

console.log(a + " " + b + " " + c);
//argument in function es6 `${}`

function getSentence(_ref) {
    var subject = _ref.subject,
        verb = _ref.verb,
        object = _ref.object;

    return subject + ' ' + verb + ' ' + object;
}

var o = {
    subject: 'I',
    verb: 'am',
    object: 'shikun'
};

console.log(getSentence(o));

//es6多参数
function addPrefix(prefix) {
    var prefixWords = [];

    for (var _len = arguments.length, words = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        words[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < words.length; i++) {
        prefixWords[i] = prefix + words[i];
    }
    return prefixWords;
}
console.log(addPrefix("con", "verse", "vex"));

//es6 默认参数
function f(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'defualt';
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    return a + '-' + b + '-' + c;
}

console.log(f(2, 3, 4));

//es6 箭头标记,省略了函数名称，方便简化
var f1 = function f1() {
    return 'hello!';
};
var f11 = function f11() {
    return "hello!";
};
var f2 = function f2(name) {
    return 'hello, ' + name + '!';
};
var f22 = function f22(name) {
    return 'hello ' + name;
};

//call apply方法 可以传一个对象，使用this
var bruce = { name: 'Bruce' };
var madlien = { name: 'Madeline' };

function greet() {
    return 'Hello ' + this.name;
}

console.log(greet.call(bruce));
//apply传参是通过数组
function update(birthday, occupation) {
    this.birthday = birthday;
    this.occupation = occupation;
}
update.apply(bruce, [1955, "actor"]);
console.log(bruce.birthday);

var arra = [1, 2, 3, 4, -5, 323];
console.log(Math.min.apply(null, arra));
console.log(Math.max.apply(null, arra));
//es6 ...操作符，可以代替任意大小的数组元素
console.log((_Math$min = Math.min).call.apply(_Math$min, arra));
//bind(),会返回一个函数
var updateBruce = update.bind(bruce);
updateBruce(1904, 'actor');
// updateBruce.call(madeline, 1274, 'king');
//map 和 filter 返回数组拷贝值，不会改变数组
var cart = [{
    name: 'widget',
    price: 9.95
}, {
    name: 'Gadget',
    price: 22.95
}];
var names = cart.map(function (x) {
    return x.name;
});
console.log(names);

var items = ['Widget', 'Gadget'];
var price = [9.95, 22.95];
var cart1 = items.map(function (x, i) {
    return { name: x, price: price[i] };
});
console.log(cart1);

//reduce 方法 两个参数：第一个是针对数组项的操作，第二个是初始值 从0开始对数组元素相加
var array = [5, 4, 6, 7];
var sum = array.reduce(function (a, x) {
    return a += x;
}, 0);
console.log(sum);