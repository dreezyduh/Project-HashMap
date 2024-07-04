/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class HashMap {\r\n    constructor(bucketSize = 16) {\r\n        this.buckets = new Array(bucketSize);\r\n        this.capacity = this.buckets.length;\r\n        this.loadFactor = 0.75;\r\n        this.entries = 0;\r\n    }\r\n    \r\n    // checkEntries() {\r\n    //     if (this.entries >= this.capacity * this.loadFactor) {\r\n    //         console.log(`growing bucket`)\r\n    //         this.growTable()\r\n    //     };\r\n        \r\n    // }\r\n\r\n    growTable() {\r\n        const curBucket = this.buckets;\r\n        this.capacity = this.capacity * 2;\r\n        this.buckets = new Array(this.capacity);\r\n        for (const bucket in curBucket) {\r\n            this.buckets[bucket] = curBucket[bucket];\r\n        }\r\n    }\r\n\r\n    hash(key) {\r\n        let hashCode = 0;\r\n           \r\n        const primeNumber = 31;\r\n        for (let i = 0; i < key.length; i++) {\r\n          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;\r\n        }\r\n     \r\n        return hashCode;\r\n    }\r\n\r\n    set(key, value) {\r\n        const hashCode = this.hash(key);\r\n        if (this.buckets[hashCode] !== undefined) {\r\n            if (this.buckets[hashCode][0] === key) {\r\n                this.buckets[hashCode][1] = value;\r\n                return \r\n             } else if (this.buckets[hashCode][0] !== key) {\r\n                this.growTable()\r\n                this.set(key, value);\r\n             }\r\n        }\r\n        this.buckets[hashCode] = [key, value];\r\n        this.entries++;\r\n    }\r\n\r\n    get(key) {\r\n        for (const index in this.buckets) {\r\n            if (this.buckets[index][0] === key) return this.buckets[index][1];\r\n       } \r\n       return null;\r\n    }\r\n    \r\n    has(key) {\r\n        for (const index in this.buckets) {\r\n            if (this.buckets[index].includes(key)) return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    remove(key) {\r\n        for (const index in this.buckets) {\r\n            if (this.buckets[index].includes(key)) {\r\n                this.buckets.splice(index, 1);\r\n                this.entries--;\r\n                return true\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    length() {\r\n        let count = 0;\r\n        for (const index in this.buckets) {\r\n            if (this.buckets[index] !== '') count++;\r\n        }\r\n        return count;\r\n    }\r\n}\r\n\r\n// if (index < 0 || index >= buckets.length) {\r\n//     throw new Error(\"Trying to access index out of bound\");\r\n//   }\r\n  \r\nconst test = new HashMap();\r\nconsole.log(test)\r\ntest.set('apple', 'red')\r\ntest.set('banana', 'yellow')\r\ntest.set('carrot', 'orange')\r\ntest.set('dog', 'brown')\r\ntest.set('elephant', 'gray')\r\ntest.set('frog', 'green')\r\ntest.set('grape', 'purple')\r\ntest.set('hat', 'black')\r\ntest.set('ice cream', 'white')\r\ntest.set('jacket', 'blue')\r\ntest.set('kite', 'pink')\r\ntest.set('lion', 'golden')\r\nconsole.log(test)\r\nconsole.log(test.get('banana'))\r\nconsole.log(test.has('banana'))\r\nconsole.log(test.remove('banana'))\r\nconsole.log(test.length() +' keys')\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;