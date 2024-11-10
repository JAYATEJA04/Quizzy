export const JS_Fundamentals_Quiz_Questions = [
  {
    id: 1,
    question: 'What is the output of typeof null?',
    options: ['null', 'undefined', 'object', 'number'],
    correctAnswer: 'object',
    explanation:
      "In JavaScript, typeof null returns 'object'. This is a known language quirk that has persisted for historical reasons.",
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
  },
  {
    id: 2,
    question:
      'Which of the following is a correct way to declare a variable in modern JavaScript?',
    options: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation:
      'JavaScript supports three ways to declare variables: var (function-scoped), let (block-scoped), and const (block-scoped constant).',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations',
  },
  {
    id: 3,
    question: "What is the result of '5' + 2 in JavaScript?",
    options: ['7', '52', 'NaN', 'undefined'],
    correctAnswer: '52',
    explanation:
      'When using the + operator with a string and a number, JavaScript converts the number to a string and performs concatenation.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition',
  },
  {
    id: 4,
    question: 'Which statement correctly creates an empty array?',
    options: [
      'let arr = []',
      'let arr = new Array',
      'let arr = Array()',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'Arrays in JavaScript can be created using literal notation [] or the Array constructor.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  },
  {
    id: 5,
    question: "What is the scope of a variable declared with 'let'?",
    options: ['Function scope', 'Block scope', 'Global scope', 'Module scope'],
    correctAnswer: 'Block scope',
    explanation:
      "Variables declared with 'let' have block scope, meaning they are only accessible within the block they are declared in.",
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let',
  },
  {
    id: 6,
    question: 'Which operator is used for strict equality comparison?',
    options: ['==', '===', '=', '!='],
    correctAnswer: '===',
    explanation:
      'The === operator performs strict equality comparison without type coercion.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality',
  },
  {
    id: 7,
    question: "What is the result of Boolean('')?",
    options: ['true', 'false', 'undefined', 'null'],
    correctAnswer: 'false',
    explanation: 'An empty string is considered a falsy value in JavaScript.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
  },
  {
    id: 8,
    question: 'Which method is used to add elements to the end of an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    correctAnswer: 'push()',
    explanation:
      'The push() method adds one or more elements to the end of an array and returns the new length.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
  },
  {
    id: 9,
    question:
      'What is the correct way to write a single-line comment in JavaScript?',
    options: ['/* comment */', '// comment', '# comment', '<!-- comment -->'],
    correctAnswer: '// comment',
    explanation: 'Single-line comments in JavaScript start with //.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments',
  },
  {
    id: 10,
    question: 'What is the result of typeof undefined?',
    options: ['undefined', 'object', 'string', 'null'],
    correctAnswer: 'undefined',
    explanation:
      "typeof undefined returns 'undefined', which is a primitive type in JavaScript.",
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
  },
  {
    id: 11,
    question: 'Which loop is best suited for iterating over array elements?',
    options: ['for loop', 'while loop', 'for...of loop', 'do...while loop'],
    correctAnswer: 'for...of loop',
    explanation:
      'for...of loop is designed specifically for iterating over iterable objects like arrays.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of',
  },
  {
    id: 12,
    question: "What is the result of 3 + '3'?",
    options: ['6', '33', 'NaN', 'undefined'],
    correctAnswer: '33',
    explanation:
      'When adding a number and string, JavaScript converts the number to a string and performs concatenation.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition',
  },
  {
    id: 13,
    question: 'Which method is used to remove the last element from an array?',
    options: ['shift()', 'unshift()', 'pop()', 'push()'],
    correctAnswer: 'pop()',
    explanation:
      'The pop() method removes the last element from an array and returns that element.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
  },
  {
    id: 14,
    question: 'What is the default value of an uninitialized variable?',
    options: ['null', 'undefined', '0', "''"],
    correctAnswer: 'undefined',
    explanation:
      'Variables that are declared but not initialized have the value undefined.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
  },
  {
    id: 15,
    question: 'Which operator is used for logical AND?',
    options: ['&', '&&', 'AND', '|'],
    correctAnswer: '&&',
    explanation:
      'The && operator performs logical AND operation between two operands.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND',
  },
];

export const JS_Intermediate_Quiz_Questions = [
  {
    id: 1,
    question: 'What is the difference between localStorage and sessionStorage?',
    options: [
      'localStorage is larger in size',
      'sessionStorage persists after browser close',
      'localStorage persists after browser close',
      'They are exactly the same',
    ],
    correctAnswer: 'localStorage persists after browser close',
    explanation:
      'While both store data in the browser, localStorage data persists even after the browser is closed, while sessionStorage data is cleared when the session ends.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
  },
  {
    id: 2,
    question: 'What is the purpose of the MutationObserver API?',
    options: [
      'To observe changes in DOM elements',
      'To detect JavaScript mutations',
      'To track variable changes',
      'To monitor network requests',
    ],
    correctAnswer: 'To observe changes in DOM elements',
    explanation:
      'MutationObserver provides a way to watch for changes being made to the DOM tree, such as attributes, text content, or child elements.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver',
  },
  {
    id: 3,
    question:
      'What is the difference between Promise.all() and Promise.race()?',
    options: [
      'Promise.all() returns first resolved promise',
      'Promise.race() waits for all promises',
      'Promise.race() returns first settled promise',
      'They are the same',
    ],
    correctAnswer: 'Promise.race() returns first settled promise',
    explanation:
      'Promise.race() returns the first promise that settles (resolves or rejects), while Promise.all() waits for all promises to resolve.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race',
  },
  {
    id: 4,
    question: 'What is event capturing?',
    options: [
      'Events propagating from parent to target',
      'Events propagating from target to parent',
      'Events staying at target',
      'Events moving between siblings',
    ],
    correctAnswer: 'Events propagating from parent to target',
    explanation:
      'Event capturing is a phase where the event travels from the root element down to the target element, opposite of bubbling.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_capture',
  },
  {
    id: 5,
    question: "What is the purpose of using the 'debugger' statement?",
    options: [
      'To pause code execution in debuggers',
      'To remove bugs automatically',
      'To log errors to console',
      'To prevent code execution',
    ],
    correctAnswer: 'To pause code execution in debuggers',
    explanation:
      'The debugger statement pauses code execution if developer tools are open, allowing for debugging.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger',
  },
  {
    id: 6,
    question: "What is the purpose of using the 'try...catch...finally' block?",
    options: [
      'To handle runtime errors',
      'To improve code performance',
      'To define new variables',
      'To create loops',
    ],
    correctAnswer: 'To handle runtime errors',
    explanation:
      'try...catch...finally allows you to handle errors gracefully and ensure certain code runs regardless of errors.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch',
  },
  {
    id: 7,
    question: 'What is the purpose of the CustomEvent constructor?',
    options: [
      'To create custom DOM events',
      'To modify existing events',
      'To remove event listeners',
      'To prevent event bubbling',
    ],
    correctAnswer: 'To create custom DOM events',
    explanation:
      'CustomEvent allows you to create custom events that can carry additional data and be dispatched on DOM elements.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent',
  },
  {
    id: 8,
    question:
      "What is the difference between 'defer' and 'async' script attributes?",
    options: [
      'No difference',
      "defer maintains order, async doesn't",
      'async is faster',
      'defer is deprecated',
    ],
    correctAnswer: "defer maintains order, async doesn't",
    explanation:
      "defer scripts execute in order after HTML is parsed, while async scripts execute as soon as they're downloaded.",
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script',
  },
  {
    id: 9,
    question: 'What is the purpose of using WebSockets?',
    options: [
      'For real-time bidirectional communication',
      'For storing data locally',
      'For handling form submissions',
      'For making HTTP requests',
    ],
    correctAnswer: 'For real-time bidirectional communication',
    explanation:
      'WebSockets provide a persistent connection between client and server for real-time data exchange.',
    referenceLink: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
  },
  {
    id: 10,
    question: "What is the purpose of the 'new.target' property?",
    options: [
      'To detect if function was called with new',
      'To create new objects',
      'To set constructor targets',
      'To define class properties',
    ],
    correctAnswer: 'To detect if function was called with new',
    explanation:
      'new.target lets you detect whether a function or constructor was called using the new operator.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target',
  },
  {
    id: 11,
    question: "What is the purpose of using the 'import.meta' object?",
    options: [
      "To access module's metadata",
      'To import modules dynamically',
      'To modify module behavior',
      'To export module data',
    ],
    correctAnswer: "To access module's metadata",
    explanation:
      'import.meta provides metadata about the current module, such as its URL.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta',
  },
  {
    id: 12,
    question:
      'What is the advantage of using requestAnimationFrame over setInterval?',
    options: [
      'Better animation performance',
      'Easier to implement',
      'Works with all browsers',
      'More precise timing',
    ],
    correctAnswer: 'Better animation performance',
    explanation:
      "requestAnimationFrame synchronizes with the browser's refresh rate and pauses in inactive tabs.",
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame',
  },
  {
    id: 13,
    question: 'What is the purpose of using the URL API?',
    options: [
      'To parse and manipulate URLs',
      'To make HTTP requests',
      'To handle routing',
      'To validate web addresses',
    ],
    correctAnswer: 'To parse and manipulate URLs',
    explanation:
      'The URL API provides methods for parsing, constructing, normalizing, and encoding URLs.',
    referenceLink: 'https://developer.mozilla.org/en-US/docs/Web/API/URL',
  },
  {
    id: 14,
    question: 'What is the purpose of using the FormData API?',
    options: [
      'To construct form data sets',
      'To validate form inputs',
      'To style form elements',
      'To handle form submission',
    ],
    correctAnswer: 'To construct form data sets',
    explanation:
      'FormData provides a way to easily construct a set of key/value pairs representing form fields and values.',
    referenceLink: 'https://developer.mozilla.org/en-US/docs/Web/API/FormData',
  },
  {
    id: 15,
    question: 'What is the purpose of using the IntersectionObserver API?',
    options: [
      'To detect element visibility',
      'To observe DOM mutations',
      'To track mouse movements',
      'To handle scroll events',
    ],
    correctAnswer: 'To detect element visibility',
    explanation:
      'IntersectionObserver provides a way to asynchronously observe changes in the intersection of a target element with its parent or viewport.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver',
  },
];

export const JS_Advance_Quiz_Questions = [
  {
    id: 1,
    question:
      'What is the output of the following code?\n\nObject.prototype.toString.call(Object.prototype.__proto__)',
    options: [
      '[object Object]',
      '[object Null]',
      '[object Function]',
      'TypeError',
    ],
    correctAnswer: '[object Null]',
    explanation:
      "Object.prototype is the end of the prototype chain. Its __proto__ is null, and when toString is called on null, it returns '[object Null]'.",
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto',
  },
  {
    id: 2,
    question:
      "In the context of JavaScript engines, what is 'hidden class optimization'?",
    options: [
      'A way to encrypt private class properties',
      'An internal mechanism to optimize object property access',
      'A special class that cannot be instantiated',
      'A way to hide class methods from external access',
    ],
    correctAnswer: 'An internal mechanism to optimize object property access',
    explanation:
      'Hidden classes are an optimization technique used by V8 and other engines to improve property access performance by creating internal layouts for objects with the same structure.',
    referenceLink: 'https://v8.dev/blog/fast-properties',
  },
  {
    id: 3,
    question: "What is the primary purpose of the Proxy's 'has' trap?",
    options: [
      'To intercept property lookup operations',
      "To intercept 'in' operator usage",
      'To check if a property exists',
      'To validate property assignments',
    ],
    correctAnswer: "To intercept 'in' operator usage",
    explanation:
      "The 'has' trap intercepts the 'in' operator, allowing custom logic when checking for property existence in an object.",
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has',
  },
  {
    id: 4,
    question: 'What happens when you use SharedArrayBuffer with Web Workers?',
    options: [
      'Data is copied between workers',
      'Memory is shared between workers',
      'Workers cannot access the buffer',
      'It throws a security error',
    ],
    correctAnswer: 'Memory is shared between workers',
    explanation:
      'SharedArrayBuffer allows multiple Web Workers to share the same memory space, enabling true concurrent access to data.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer',
  },
  {
    id: 5,
    question: "What is the purpose of the 'Intl.Segmenter' API?",
    options: [
      'To split strings into arrays',
      'To segment text into linguistic units',
      'To parse JSON data',
      'To divide arrays into chunks',
    ],
    correctAnswer: 'To segment text into linguistic units',
    explanation:
      'Intl.Segmenter enables language-sensitive text segmentation, allowing proper breaking of text into words, sentences, or other units based on locale.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter',
  },
  {
    id: 6,
    question: 'What is tail call optimization in JavaScript?',
    options: [
      'A way to optimize loops',
      'An optimization for recursive function calls',
      'A method to reduce memory usage',
      'A technique for optimizing async operations',
    ],
    correctAnswer: 'An optimization for recursive function calls',
    explanation:
      'Tail call optimization allows recursive functions to execute in constant stack space, preventing stack overflow in proper tail calls.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
  },
  {
    id: 7,
    question: "What is the purpose of the 'FinalizationRegistry' object?",
    options: [
      'To manage garbage collection',
      'To finalize class definitions',
      'To close database connections',
      'To terminate Web Workers',
    ],
    correctAnswer: 'To manage garbage collection',
    explanation:
      'FinalizationRegistry lets you request a callback when an object is garbage collected, useful for resource cleanup.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry',
  },
  {
    id: 8,
    question: "What is the significance of the 'Temporal' API?",
    options: [
      'For basic date operations',
      'For managing timeouts',
      'For modern date/time calculations',
      'For scheduling tasks',
    ],
    correctAnswer: 'For modern date/time calculations',
    explanation:
      'Temporal is a modern API for working with dates, times, and timestamps, providing better accuracy and functionality than the Date object.',
    referenceLink: 'https://tc39.es/proposal-temporal/docs/',
  },
  {
    id: 9,
    question: 'What is the purpose of using a WeakRef?',
    options: [
      'To create weak passwords',
      'To hold a weak reference to an object',
      'To reference private properties',
      'To create temporary variables',
    ],
    correctAnswer: 'To hold a weak reference to an object',
    explanation:
      "WeakRef allows holding a weak reference to an object, which doesn't prevent the object from being garbage collected.",
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef',
  },
  {
    id: 10,
    question: "What is the purpose of the 'Atomics' object in JavaScript?",
    options: [
      'To perform atomic operations on shared memory',
      'To create small, independent functions',
      'To manage DOM updates',
      'To handle micro-tasks',
    ],
    correctAnswer: 'To perform atomic operations on shared memory',
    explanation:
      'Atomics provides operations that atomically read and write shared memory, used with SharedArrayBuffer.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics',
  },
  {
    id: 11,
    question: "What is the purpose of the 'queueMicrotask' function?",
    options: [
      'To queue a task in the microtask queue',
      'To create a new Web Worker',
      'To schedule macrotasks',
      'To manage event loop timing',
    ],
    correctAnswer: 'To queue a task in the microtask queue',
    explanation:
      'queueMicrotask schedules a microtask to be executed before the next macrotask, useful for ensuring consistent ordering of operations.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask',
  },
  {
    id: 12,
    question: 'What is the purpose of using TypedArrays in JavaScript?',
    options: [
      'To enforce type checking',
      'To work with binary data efficiently',
      'To create arrays with type hints',
      'To optimize array operations',
    ],
    correctAnswer: 'To work with binary data efficiently',
    explanation:
      'TypedArrays provide a mechanism for accessing raw binary data buffers, useful for working with WebGL, file processing, and network protocols.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays',
  },
  {
    id: 13,
    question: "What is the purpose of the 'globalThis' property?",
    options: [
      'To access global scope consistently',
      'To create global variables',
      'To share data between modules',
      'To define global constants',
    ],
    correctAnswer: 'To access global scope consistently',
    explanation:
      'globalThis provides a standard way to access the global object across different JavaScript environments (browser, Node.js, WebWorkers).',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis',
  },
  {
    id: 14,
    question: "What is the purpose of using the 'AbortController' interface?",
    options: [
      'To stop program execution',
      'To cancel async operations',
      'To handle runtime errors',
      'To terminate Web Workers',
    ],
    correctAnswer: 'To cancel async operations',
    explanation:
      'AbortController allows you to abort one or more Web requests as and when desired, useful for canceling fetch requests and other async operations.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/API/AbortController',
  },
  {
    id: 15,
    question: "What is the significance of the 'Reflect' API?",
    options: [
      'To create mirrors of objects',
      'To perform metaprogramming operations',
      'To reflect DOM changes',
      'To handle HTTP responses',
    ],
    correctAnswer: 'To perform metaprogramming operations',
    explanation:
      'Reflect provides methods for interceptable JavaScript operations, useful for metaprogramming and implementing proxies.',
    referenceLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect',
  },
];
