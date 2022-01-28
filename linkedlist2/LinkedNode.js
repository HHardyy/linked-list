module.exports = class LinkedNode {
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}