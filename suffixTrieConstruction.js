class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    let currentNode;

    for (let i = 0; i < string.length; i++) {
      if (!this.root[string[i]]) {
        this.root[string[i]] = {};
      }
      currentNode = this.root[string[i]];

      // Populating subnodes
      for (let j = i + 1; j < string.length; j++) {
        if (!currentNode[string[j]]) {
          currentNode[string[j]] = {};
        }
        currentNode = currentNode[string[j]];
      }
      // CurrentNode is a complete word at this point:
      currentNode['*'] = true;
    }
    console.log(this.root);
  }

  contains(string) {
    if (!this.root[string[0]]) {
      return false;
    }

    let currentNode = this.root[string[0]];

    for (let i = 1; i < string.length; i++) {
      if (!currentNode[string[i]]) {
        return false;
      }

      currentNode = currentNode[string[i]];
    }

    if (currentNode['*'] === true) {
      return true;
    }

    return false;
  }
}
