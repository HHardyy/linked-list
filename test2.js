const LinkedList2 = require('./linkedlist2/LinkedList2')
const ll = new LinkedList2()

ll.append(1)
ll.append(2)
ll.appendAt(2,3)
ll.appendAt(3,4)

console.log('====================================');
console.dir(ll, {
  depth: 100
});
console.log('====================================');

console.log('====================================');
console.log(ll.toString('backWard', '===>'));
console.log(ll.toString('forward', '<==='));
console.log('====================================');


console.log('====================================');
console.log(ll.indexOf(3));
console.log('====================================');


console.log('====================================');
console.log(ll.get(2));
console.log('====================================');

ll.removeAt(2)

console.log('====================================');
console.dir(ll, {
  depth: 100
});
console.log('====================================');
