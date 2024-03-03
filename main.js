import LinkedList from './linkedList.js';

// Test cases
const linkedList = new LinkedList();
linkedList.append("Archie");
linkedList.append("Ruby");
linkedList.prepend("Charlie");
linkedList.append("Freddie");

console.log(linkedList.size()) // 3
console.log(linkedList.head()) // Charlie
console.log(linkedList.tail()) // Ruby
console.log(linkedList.at(1)) // Archie
linkedList.pop() // Removes freddie
console.log(linkedList.contains("Freddie")) // false
console.log(linkedList.contains("Archie")) // true
console.log(linkedList.find("Ruby")) // 2
console.log(linkedList.find("Daisy")) // null
console.log(linkedList.toString()) // ( Charlie ) -> ( Archie ) -> ( Ruby ) -> null