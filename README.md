# Question: How do you design a min stack that supports push, pop, top, and retrieving the minimum in constant time? JavaScript Summary

The JavaScript code provided creates a class called MinStack that implements a stack data structure with a special feature: it can return the minimum value in the stack in constant time. The class maintains two arrays, "stack" and "minStack". The "stack" array stores all the elements pushed into the stack, while the "minStack" array keeps track of the minimum values. When a new element is pushed into the stack, it is added to the "stack" array and, if it is less than or equal to the current minimum value (or if the "minStack" is empty), it is also added to the "minStack". When an element is popped from the stack, it is removed from the "stack" array and, if it is equal to the current minimum value, it is also removed from the "minStack". The "top" method returns the top element of the "stack" array, and the "getMin" method returns the top element of the "minStack" array, which is always the minimum value in the stack. This design allows all operations to be performed in constant time.

---

# TypeScript Differences

The TypeScript version of the solution is very similar to the JavaScript version. The logic of the solution is the same in both versions: two stacks are used, one for all elements and one for the minimum elements, and the top element of the "minStack" is always the minimum element of the "stack". The "push", "pop", "top", and "getMin" methods all run in constant time.

The main difference between the two versions is that the TypeScript version includes type annotations. TypeScript is a statically typed superset of JavaScript, which means it adds static types to the language. This can help catch errors during development, before the code is run.

In the TypeScript version, the "stack" and "minStack" arrays are explicitly declared as arrays of numbers (`number[]`). The "push" method is declared to take a number as an argument (`x: number`), and the "top" and "getMin" methods are declared to return a number (`: number`). The "push" and "pop" methods are declared to return void (`: void`), indicating that they do not return a value.

Another difference is that the "stack" and "minStack" arrays are declared as private in the TypeScript version. This means they can only be accessed within the "MinStack" class. This is a feature of TypeScript and is not available in JavaScript. This can help prevent these arrays from being accidentally modified outside of the class.

---

# C++ Differences

The C++ version of the solution uses the same logic as the JavaScript version. Both versions use two stacks: one to store all the elements and another to store the minimum elements. The top element of the minStack is always the minimum element of the stack. The push, pop, top, and getMin methods all run in constant time.

However, there are some differences due to the language features and methods used in each version:

1. In the JavaScript version, arrays are used to implement the stacks, while in the C++ version, the STL stack is used. The STL stack provides the same operations as the JavaScript array for this problem: push, pop, and top.

2. In JavaScript, the length property is used to check if the stack is empty, while in C++, the empty() method is used.

3. In JavaScript, the last element of the array (the top of the stack) is accessed using array indexing (this.stack[this.stack.length - 1]), while in C++, the top() method is used.

4. In the JavaScript version, the console.log function is used to print the output, while in the C++ version, the std::cout object is used.

5. The C++ version includes a main function, which is the entry point of the program. In contrast, JavaScript does not require a main function; the script is executed from top to bottom.

6. The C++ version requires explicit type declaration (int), while JavaScript does not due to its dynamic typing.

7. The C++ version includes #include directives at the top of the file to include the necessary libraries (stack and iostream), while JavaScript does not require this as the array and console objects are built-in and globally available.

---
