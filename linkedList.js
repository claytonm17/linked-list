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
}

const dogs = new LinkedList();
dogs.append("Archie");
dogs.append("Jack");
dogs.prepend("Ruby");
dogs.append("Charlie");
//console.log(dogs)
console.log(dogs.size())

export default LinkedList