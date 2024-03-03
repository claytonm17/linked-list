import Node from './node.js';

class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value)
    {
        let newNode = new Node(value);

        // If first value added?
        if (this.listHead == null){
            this.listHead = newNode;
            return;
        }

        let currentNode = this.listHead;  
        while (currentNode.next != null){  // Loop until the current node is null
            currentNode = currentNode.next; 
        }
        currentNode.next = newNode;
    }

    prepend(value)
    {
        let newNode = new Node(value);  // Initialize node w/ null next
        newNode.next = this.listHead; // Setting next to this.head
        this.listHead = newNode;  // Setting the new node as the head
    }

    size()
    {
        let count = 0;
        let currentNode = this.listHead;
        while (currentNode != null){
            currentNode = currentNode.next;
            count += 1
        }
        return count
    }

    head()
    {
        return this.listHead.value;
    }

    tail()
    {
        let currentNode = this.listHead;
        while (currentNode.next != null){
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

    at(index)
    {
        let currentNode = this.listHead;
        let count = 0
        while (currentNode.next != null){
            if (count === index) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
            count += 1;
        }
        return null;
    }

    pop()
    {
        let currentNode = this.listHead;  
        while (currentNode.next.next != null){
            currentNode = currentNode.next; 
        }
        currentNode.next = null;
    }

    contains(value)
    {
        let currentNode = this.listHead;  
        while (currentNode.next != null){
            if (currentNode.value === value){
                return true;
            }
            currentNode = currentNode.next; 
        }
        return false;
    }

    find(value)
    {
        let currentNode = this.listHead;
        let count = 0;
        while (currentNode != null){
            if (currentNode.value == value){
                return count;
            }
            currentNode = currentNode.next; 
            count += 1;
        }
        return null;
    }

    toString()
    {
        let currentNode = this.listHead;
        let str = "";
        while (currentNode != null){
            str += `( ${currentNode.value} ) -> `
            currentNode = currentNode.next; 
        }
        return str += "null"
    }
}

// Test cases
const dogs = new LinkedList();

dogs.append("Archie");
dogs.append("Jack");
dogs.prepend("Ruby");
dogs.append("Charlie");
dogs.append("Buddy");
dogs.prepend("Jake");
dogs.append("Jasmine"); // size should equal 7 
dogs.append("Jackson");

console.log(dogs.toString())
console.log(dogs.pop())
console.log(dogs.toString())

export default LinkedList;