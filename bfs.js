class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
    let out = [],
      currentChildren = this.children,
      running = true;

    let breathFirstCheckConcatChildren = (currentChildren) => {
      let temp = [];
      for (let i = 0; i < currentChildren.length; i++) {
        out.push(currentChildren[i].name);

        if (
          currentChildren[i].children !== undefined &&
          currentChildren[i].children !== []
        ) {
          temp.push(...currentChildren[i].children);
        }
      }
      return temp;
    };

    out.push(this.name);

    while (running) {
      if (!currentChildren[0]) {
        running = false;
      }
    }

    return out;
  }
}
