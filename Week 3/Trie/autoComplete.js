class TrieNode {
    constructor() {
        this.children = {}; // Stores child nodes
        this.isEndOfWord = false; // Indicates if this node marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // Initialize the root of the Trie
    }

    // Insert a word into the Trie
    insert(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode(); // Create a new node if it doesn't exist
            }
            currentNode = currentNode.children[char]; // Move to the child node
        }
        currentNode.isEndOfWord = true; // Mark the end of the word
    }

    // Search for a word in the Trie
    search(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children[char]) {
                return false; // Return false if the character path doesn't exist
            }
            currentNode = currentNode.children[char]; // Move to the child node
        }
        return currentNode.isEndOfWord; // Return true if it's the end of a word
    }

    // Check if any word in the Trie starts with the given prefix
    startsWith(prefix) {
        let currentNode = this.root;
        for (const char of prefix) {
            if (!currentNode.children[char]) {
                return false; // Return false if the prefix path doesn't exist
            }
            currentNode = currentNode.children[char]; // Move to the child node
        }
        return true; // Return true if the prefix exists
    }

    // Autocomplete: Find all words starting with the given prefix
    autocomplete(prefix) {
        const results = [];
        let currentNode = this.root;

        // Traverse to the end of the prefix
        for (const char of prefix) {
            if (!currentNode.children[char]) {
                return results; // Return empty if prefix not found
            }
            currentNode = currentNode.children[char];
        }

        // Recursive function to find all words
        const findWords = (node, currentPrefix) => {
            if (node.isEndOfWord) {
                results.push(currentPrefix); // Add the word to results
            }
            for (const char in node.children) {
                findWords(node.children[char], currentPrefix + char); // Recurse
            }
        };

        findWords(currentNode, prefix); // Start finding words from the current node
        return results; // Return all matching words
    }

    // Optional: Remove a word from the Trie
    delete(word) {
        const deleteHelper = (node, word, depth) => {
            if (!node) return false; // If node is null, return false
            if (depth === word.length) {
                if (!node.isEndOfWord) return false; // If it's not end of a word, return false
                node.isEndOfWord = false; // Mark end of word as false
                return Object.keys(node.children).length === 0; // Return true if no children left
            }
            const char = word[depth];
            const shouldDeleteCurrentNode = deleteHelper(node.children[char], word, depth + 1);

            if (shouldDeleteCurrentNode) {
                delete node.children[char]; // Delete the child node
                return Object.keys(node.children).length === 0; // Return true if no children left
            }
            return false; // Don't delete the current node
        };
        deleteHelper(this.root, word, 0); // Start deletion from root
    }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("apricot");
trie.insert("banana");
trie.insert("bat");

console.log("Autocomplete results for 'ap':", trie.autocomplete("ap")); // ["apple", "app", "application", "apricot"]
console.log("Autocomplete results for 'ba':", trie.autocomplete("ba")); // ["banana", "bat"]
console.log("Autocomplete results for 'b':", trie.autocomplete("b")); // ["banana", "bat"]
console.log("Autocomplete results for 'z':", trie.autocomplete("z")); // []
