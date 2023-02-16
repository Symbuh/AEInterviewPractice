class MinMaxStack {
  constructor() {
    this.min = Number.MAX_VALUE;
    this.minStack = [];
    this.max = -Number.MAX_VALUE;
    this.maxStack = [];
    this.stack = [];
    return this;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    let popped = this.stack.pop();

    if (popped === this.min) {
      this.minStack.pop();
      this.min = this.minStack[this.minStack.length - 1];
    }
    if (popped === this.max) {
      this.maxStack.pop();
      this.max = this.maxStack[this.maxStack.length - 1];
    }

    return popped;
  }

  push(number) {
    if (number <= this.min || this.min === undefined) {
      this.min = number;
      this.minStack.push(number);
    }
    if (number >= this.max || this.max === undefined) {
      this.max = number;
      this.maxStack.push(number);
    }
    this.stack.push(number);
  }

  getMin() {
    return this.min;
  }

  getMax() {
    return this.max;
  }
}
