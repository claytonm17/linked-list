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
    { // Fix this count when small list
        let count = 1;
        let currentNode = this.listHead;
        while (currentNode.next != null){
            currentNode = currentNode.next;
            count += 1
        }
        return count
    }

    head()
    {
        return this.listHead;
    }

    tail()
    {
        let currentNode = this.listHead;
        while (currentNode.next != null){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    at(index)
    {
        let currentNode = this.listHead;
        let count = 0
        while (currentNode.next != null){
            if (count == index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            count += 1;
        }
    }

    pop()
    {
        let currentNode = this.listHead;  
        while (currentNode.next != null){
            currentNode = currentNode.next; 
        }
        currentNode.value = null;
        currentNode.next = null;
    }

    contains(value)  //broken currently
    {
        let currentNode = this.listHead;  
        while (currentNode.next != null){
            if (currentNode.value == value){
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
        while (currentNode.value != null){
            if (currentNode.value == value){  // Broken for non existing values
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
            str += `(${currentNode.value}) -> `
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
dogs.prepend("Jasmine");

export default LinkedList