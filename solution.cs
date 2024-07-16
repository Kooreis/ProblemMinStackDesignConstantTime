Here is a JavaScript solution for the problem:

```javascript
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x) {
        this.stack.push(x);
        if (this.minStack.length === 0 || x <= this.getMin()) {
            this.minStack.push(x);
        }
    }

    pop() {
        let x = this.stack.pop();
        if (x === this.getMin()) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // Returns -3.
minStack.pop();
console.log(minStack.top());     // Returns 0.
console.log(minStack.getMin());  // Returns -2.
```

This solution uses two stacks: one to store all the elements (the "stack" array) and another to store the minimum elements (the "minStack" array). The top element of the "minStack" array is always the minimum element of the "stack" array. The "push", "pop", "top", and "getMin" methods all run in constant time, as required.