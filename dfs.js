class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.

    let helper = (children) => {
      for (let i = 0; i < children.length; i++) {
        array.push(children[i].name);

        if (children[i].children === [] && children[i].children === undefined) {
          return;
        }

        helper(children[i].children);
      }
    };
    // Can't forget about first node
    array.push(this.name);

    helper(this.children);
    return array;
  }
}
