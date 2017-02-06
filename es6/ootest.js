//es6中的类的定义
class car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];

    }
    shift(gear) {
        if (this.userGears.indexOf(gear) < 0) {
            throw new Error(`Invalid gear: ${gear}`);
        }
        this.userGear = gear;
    }
}
const car1 = new car();
const car2 = new car();

console.log(car1 instanceof(car))

/*
es6 map set
    
*/
const u1 = { name: 'cyntria' };
const u2 = { name: 'shikun' };
const all = new Map();
all.set(u1, 'user');
all.set(u2, 'user');
console.log(all.values());

//Set 
const roles = new Set();
roles.add('user');
roles.add('admin');
console.log(roles);

//WeakMap(). key只能是object 不能被迭代，和删除
//WeakSet(). 元素只能是object

//es6 新增iterators 和 generators

// const book = ['122', '1212', 'adsdas', 'sadfasdf', 'adsfasd'];
// const it = book.values();
// console.log(it.next());

// class Log {
//     constructor() {
//         this.message = [];
//     }
//     add(message) {
//             this.message.push({ message, timestamp: Date.now() });
//         }
//         [Symbol.iterator]() {
//             return this.message.values();
//         }
// }

// const log = new Log();
// log.add('first day at sea');
// log.add('spotted whale');
// log.add('spotted another');

// for (let entry of log) {
//     console.log(`${entry.message} @ ${entry.timestamp}`);
// }

// generators

function* rainbow() {
    yield 'red';
    yield 'orange';
}

const it2 = rainbow();
console.log(it2.next());
console.log(it2.next());
//es6 中的yield表达式和2-way 交流
function* interrogate() {
        const name = yield "what\'s your name?";
        const color = yield "what\'s your favorite color?";
        return `${name}\'s favorite color is ${color}`;
    }
    //yield可以暂停函数执行
const it3 = interrogate();
console.log(it3.next());
console.log(it3.next("shikun"));
console.log(it3.next("blue"));

//js异步
setTimeout(function() {
    console.log("After timeout" + new Date());
}, 6000);

//setInterval
const start = new Date();
let i = 0;
const intervalId = setInterval(function() {
    let now = new Date();
    if (now.getMinutes() != start.getMinutes() || ++i > 10) {
        return clearInterval(intervalId);
    }
    console.log(`${i}: ${now}`)
}, 5 * 1000);