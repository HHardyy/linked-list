const LinkedList1 = require('./linkedList1/LinkedList1')

let ll = new LinkedList1()
ll.append(1)
ll.append(2)
// ll.append(3)
// ll.append(4)
ll.appendAt(2, 3)
ll.appendAt(3, 4)
ll.appendAt(2, 4)
console.log('====================================');
console.dir(ll, {
  depth: 100
});
console.log('====================================');

ll.removeAt(2)

console.log('====================================');
console.dir(ll, {
  depth: 100
});
console.log('====================================');


console.log('====================================');
console.log(ll.indexOf(1));
console.log(ll.indexOf(2));
console.log(ll.indexOf(3));
console.log(ll.indexOf(4));
console.log('====================================');