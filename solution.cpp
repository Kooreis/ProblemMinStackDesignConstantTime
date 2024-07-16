```cpp
#include <stack>
#include <iostream>

class MinStack {
public:
    std::stack<int> s;
    std::stack<int> min_s;

    MinStack() {}

    void push(int x) {
        s.push(x);
        if (min_s.empty() || x <= getMin()) min_s.push(x);
    }

    void pop() {
        if (s.top() == getMin()) min_s.pop();
        s.pop();
    }

    int top() {
        return s.top();
    }

    int getMin() {
        return min_s.top();
    }
};

int main() {
    MinStack minStack;
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    std::cout << minStack.getMin() << std::endl; // Returns -3
    minStack.pop();
    std::cout << minStack.top() << std::endl; // Returns 0
    std::cout << minStack.getMin() << std::endl; // Returns -2
    return 0;
}
```