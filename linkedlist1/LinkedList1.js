const LinkedNode = require('./LinkedNode')

module.exports = class LinkedList {
	constructor() {
		this.size = 0
		this.head = null
	}
	append(element) {
		let node = new LinkedNode(element)
		if (this.head === null) {
			this.head = node
		} else {
			let currNode = this._getNode(this.size - 1)
			currNode.next = node
		}
		this.size = this.size + 1
	}
	appendAt(pot, element) {
		if (pot < 0 || pot > this.size) {
			throw new Error('out range')
		}
		
		let node = new LinkedNode(element)
		if (pot === 0) {
			node.next = this.head
			this.head = node
		} else {
			let pre = this._getNode(pot - 1)
			node.next = pre.next
			pre.next = node
		}
		this.size = this.size + 1
	}
	removeAt (pot) {
		if (pot < 0 || pot >= this.size) {
			throw new Error('out range')
		}
		let current = this.head
		if (pot === 0) {
			this.head = current.next
		} else {
			let pre = this._getNode(pot - 1)
			current = pre.next
			pre.next = current.next
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
	_getNode(pot) { 
		if (pot < 0 || pot >= this.size) {
			throw new Error('out range')
		}
		let current = this.head
		for (let i = 0; i < pot; i++) {
			current = current.next
		}
		return current
	}
}