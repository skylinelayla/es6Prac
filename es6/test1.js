const result1 = 3 + '30';
console.log(result1);
const result2 = 3 * '30';
console.log(result2)
const obj = {};
obj.size = 10;
obj.color = 'yellow';
//es6 destructing assignment
const obj1 = { a: 1, b: 2, c: 3 };
const { a, b, c } = obj1;
console.log(a + " " + b + " " + c);
//argument in function es6 `${}`

function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: 'I',
    verb: 'am',
    object: 'shikun'
}

console.log(getSentence(o));

//es6多参数
function addPrefix(prefix, ...words) {
    const prefixWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixWords[i] = prefix + words[i];
    }
    return prefixWords;
}
console.log(addPrefix("con", "verse", "vex"));

//es6 默认参数
function f(a, b = 'defualt', c = 3) {
    return `${a}-${b}-${c}`;
}

console.log(f(2, 3, 4))

//es6 箭头标记,省略了函数名称，方便简化
const f1 = function() { return 'hello!' };
const f11 = () => "hello!";
const f2 = function(name) { return `hello, ${name}!` };
const f22 = name => `hello ${name}`;

//call apply方法 可以传一个对象，使用this
const bruce = { name: 'Bruce' };
const madlien = { name: 'Madeline' };

function greet() {
    return `Hello ${this.name}`;
}

console.log(greet.call(bruce))
    //apply传参是通过数组
function update(birthday, occupation) {
    this.birthday = birthday;
    this.occupation = occupation;
}
update.apply(bruce, [1955, "actor"]);
console.log(bruce.birthday);

const arra = [1, 2, 3, 4, -5, 323];
console.log(Math.min.apply(null, arra));
console.log(Math.max.apply(null, arra));
//es6 ...操作符，可以代替任意大小的数组元素
console.log(Math.min.call(...arra))
    //bind(),会返回一个函数
const updateBruce = update.bind(bruce);
updateBruce(1904, 'actor');
// updateBruce.call(madeline, 1274, 'king');
//map 和 filter 返回数组拷贝值，不会改变数组
const cart = [{
    name: 'widget',
    price: 9.95
}, {
    name: 'Gadget',
    price: 22.95
}];
const names = cart.map(x => x.name);
console.log(names);

const items = ['Widget', 'Gadget'];
const price = [9.95, 22.95];
const cart1 = items.map((x, i) => ({ name: x, price: price[i] }));
console.log(cart1)