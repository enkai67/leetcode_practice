class Node {
    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
        let charToInsert = word[i];
        if (!(charToInsert in current.children)) {
            current.children[charToInsert] = new Node();
        }
        current = current.children[charToInsert];
    }
    current.isWordEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
        let charToSearch = word[i];
        if (!(charToSearch in current.children)) {
            return false;
        }
        current = current.children[charToSearch];
    }
    return current.isWordEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let charToSearch = prefix[i];
        if (!(charToSearch in current.children)) {
            return false;
        }
        current = current.children[charToSearch];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); 