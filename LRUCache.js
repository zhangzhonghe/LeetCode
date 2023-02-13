/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.head = createListNode();
  this.tail = createListNode();
  this.tail.prev = this.head;
  this.head.next = this.tail;
  this.map = {};
  this.length = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map[key];
  if (!node) return -1;
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.tail.prev.next = node;
  node.prev = this.tail.prev;
  node.next = this.tail;
  this.tail.prev = node;
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.get(key) !== -1) {
    this.map[key].val = value;
    return;
  }
  if (this.length === this.capacity) {
    const node = this.head.next;
    this.head.next = node.next;
    node.next.prev = this.head;
    delete this.map[node.key];
    this.length--;
  }
  const newNode = createListNode();
  newNode.key = key;
  newNode.val = value;
  this.tail.prev.next = newNode;
  newNode.prev = this.tail.prev;
  newNode.next = this.tail;
  this.tail.prev = newNode;
  this.map[key] = newNode;
  this.length++;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function createListNode() {
  return {
    prev: null,
    next: null,
    key: null,
    val: null,
  };
}
