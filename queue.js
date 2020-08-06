class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }
    
    peek(val) {
        return this._head.data;
    }
    
    enqueue(val) {
        if (this._size === 0) {
            const node = new Node(val);
            this._tail = node;
            this._head = node;
            this._head.next = this._tail;
        } else {
            const last = new Node(val);
            this._tail.next = last;
            this._tail = last;
        }
        
        this._size += 1;
    }
    
    dequeue() {
        const tmp = this._head;
        
        if (this._size > 0) {
            this._size -= 1;
        }

        if (this._head) {
            this._head = this._head.next;
        }
        
        return tmp;
    }
}
