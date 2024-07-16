Here is a TypeScript solution for the problem:

```typescript
class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x: number): void {
        this.stack.push(x);
        if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(x);
        }
    }

    pop(): void {
        let x = this.stack.pop();
        if (x === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
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

This solution uses two stacks: one to store all the elements (the "stack" array) and another to store the minimum elements (the "minStack" array). The top element of the "minStack" array is always the minimum element of the "stack" array. When a new element is pushed into the "stack" array, if it is less than or equal to the top element of the "minStack" array, it is also pushed into the "minStack" array. When an element is popped from the "stack" array, if it is equal to the top element of the "minStack" array, it is also popped from the "minStack" array. This ensures that the "minStack" array always contains the minimum elements of the "stack" array in order, and the top element of the "minStack" array is always the minimum element of the "stack" array. Therefore, the "getMin" method can always return the minimum element in constant time.