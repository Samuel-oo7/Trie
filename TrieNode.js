class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      node = node[char] ??= {};
    }
    node.$ = true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      node = node[word[i]];
      if (!node) return false;
    }
    return !!node.$;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      node = node[prefix[i]];
      if (!node) return false;
    }
    return true;
  }
}
