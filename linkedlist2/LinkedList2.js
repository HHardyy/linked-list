const LinkedNode = require('./LinkedNode')

const forWardString = 'forward'
const backWardString = 'backWard'

module.exports = class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  append(element) {
    let node = new LinkedNode(element)
    if (this.size === 0) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.size= this.size+1
  }
  appendAt(pot, element) {
    let node = new LinkedNode(element)
    if (this.size === 0) {
      this.head = node
      this.tail = node
    } else {
      if (pot === 0) {  // 插入第0项
        this.head.prev = node
        node.next = this.head
        this.head = node
      } else if (pot === this.size) {  // 插入最后
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      } else {
        let pre = this._getNode(pot - 1)
        node.next = pre.next
        node.prev = pre
        pre.next = node
      }
    }
    this.size = this.size + 1
  }
  removeAt(pot) {
    let current = this.head
    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      if (pot === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (pot === this.size - 1) {
        current = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        let prev = this._getNode(pot - 1)
        current = prev.next
        prev.next = current.next
        current.next.prev = prev
      }
    }
    this.size = this.size - 1
  }
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.size; i++) {
      if (current.element === element) {
        return i
      }
      current = current.next
    }
    return -1
  }
  get(pot) {
    let _point = this._getpoint(pot, this.size)
    let current = this.head
    for (let i = _point; i < this.size; i++) {
      current = current.next
    }
    return current
  }
  toString(rule, tag) {
    return rule === forWardString ? this._forWardString(tag): this._backWardString(tag)
  }
  _forWardString(tag) {
    let current = this.tail
    let resultStr = ''
    while (current) {
      resultStr += current.element + tag
      current = current.prev
    }
    return resultStr
  }
  _backWardString(tag) {
    let current = this.head
    let resultStr = ''
    while (current) {
      resultStr += current.element + tag
      current = current.next
    }
    return resultStr
  }
  _getNode(pot) {
    let currrent = this.head
    for (let i = 0; i < pot; i++) {
      currrent = currrent.next
    }
    return currrent
  }
  _getpoint(pot, size){
    let _point = size / 2
    if (_point > pot) {
      return this._getpoint(pot, _point)
    } else {
      return Math.floor(_point)
    }
  }
}