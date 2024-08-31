export const ReactJS_Fundamentals_Quiz_Questions = [
  {
    id: 1,
    question:
      'What is the correct way to create a functional component in React?',
    options: [
      'function MyComponent() { return <div>Hello</div>; }',
      'class MyComponent extends React.Component { render() { return <div>Hello</div>; } }',
      'const MyComponent = () => { <div>Hello</div> }',
      'var MyComponent = function() { return <div>Hello</div>; }',
    ],
    correctAnswer: 'function MyComponent() { return <div>Hello</div>; }',
    explanation:
      'Functional components in React are JavaScript functions that return JSX. The first option correctly defines a functional component.',
    referenceLink: 'https://react.dev/learn/your-first-component',
  },
  {
    id: 2,
    question:
      'Which of the following is the correct syntax for using JavaScript expressions in JSX?',
    options: [
      '{expression}',
      '{{expression}}',
      '<%expression%>',
      '${expression}',
    ],
    correctAnswer: '{expression}',
    explanation:
      'In JSX, you can embed any JavaScript expression by wrapping it in curly braces {}.',
    referenceLink:
      'https://react.dev/learn/javascript-in-jsx-with-curly-braces',
  },
  {
    id: 'RF3',
    question: 'How do you pass a prop called "name" to a component?',
    options: [
      '<Component name="John" />',
      '<Component props.name="John" />',
      '<Component "name"="John" />',
      '<Component {name: "John"} />',
    ],
    correctAnswer: '<Component name="John" />',
    explanation:
      'Props are passed to components as attributes in JSX, similar to HTML attributes.',
    referenceLink: 'https://react.dev/learn/passing-props-to-a-component',
  },
  {
    id: 'RF4',
    question: 'What is the correct way to render a list of items in React?',
    options: [
      'Using a for loop inside JSX',
      'Using the map() function',
      'Using a while loop inside JSX',
      'Using the forEach() function',
    ],
    correctAnswer: 'Using the map() function',
    explanation:
      'The map() function is commonly used in React to transform an array of data into an array of JSX elements.',
    referenceLink: 'https://react.dev/learn/rendering-lists',
  },
  {
    id: 'RF5',
    question: 'How do you conditionally render a component in React?',
    options: [
      'Using if-else statements in JSX',
      'Using the ternary operator',
      'Using logical && operator',
      'Both b and c are correct',
    ],
    correctAnswer: 'Both b and c are correct',
    explanation:
      'Conditional rendering in React can be achieved using the ternary operator for if-else conditions, or the logical && operator for if-only conditions.',
    referenceLink: 'https://react.dev/learn/conditional-rendering',
  },
  {
    id: 'RF6',
    question: 'What is the purpose of the useState hook?',
    options: [
      'To create a new component',
      'To manage state in functional components',
      'To handle side effects',
      'To optimize rendering performance',
    ],
    correctAnswer: 'To manage state in functional components',
    explanation:
      'The useState hook allows functional components to have state variables, previously only possible in class components.',
    referenceLink: 'https://react.dev/reference/react/useState',
  },
  {
    id: 'RF7',
    question: 'Which of the following is NOT a rule of JSX?',
    options: [
      'JSX tags can self-close',
      'JSX must return multiple elements without a wrapper',
      'JSX uses camelCase for attribute names',
      'JSX allows embedding expressions in curly braces',
    ],
    correctAnswer: 'JSX must return multiple elements without a wrapper',
    explanation:
      'JSX requires a single root element. Multiple elements must be wrapped in a parent element or fragment.',
    referenceLink: 'https://react.dev/learn/writing-markup-with-jsx',
  },
  {
    id: 'RF8',
    question: 'How do you handle a click event in React?',
    options: [
      '<button onclick={handleClick}>Click me</button>',
      '<button onClick={handleClick}>Click me</button>',
      '<button on-click={handleClick}>Click me</button>',
      '<button onClick="handleClick()">Click me</button>',
    ],
    correctAnswer: '<button onClick={handleClick}>Click me</button>',
    explanation:
      'React uses camelCase for event names (onClick) and passes a function as the event handler, not a string.',
    referenceLink: 'https://react.dev/learn/responding-to-events',
  },
  {
    id: 'RF9',
    question: 'What is the correct way to update state in React?',
    options: [
      'this.state.count = this.state.count + 1',
      'setState({ count: state.count + 1 })',
      'setCount(count + 1)',
      'Both b and c are correct, depending on the component type',
    ],
    correctAnswer: 'Both b and c are correct, depending on the component type',
    explanation:
      'Class components use setState(), while functional components use the state updater function returned by useState().',
    referenceLink: 'https://react.dev/learn/state-a-components-memory',
  },
  {
    id: 'RF10',
    question: 'Which of the following is true about state updates in React?',
    options: [
      'They are always synchronous',
      'They are always asynchronous',
      'They can be either synchronous or asynchronous',
      'They are only asynchronous in class components',
    ],
    correctAnswer: 'They can be either synchronous or asynchronous',
    explanation:
      'State updates can be either synchronous or asynchronous depending on the context and the specific update operation.',
    referenceLink: 'https://react.dev/learn/queueing-a-series-of-state-updates',
  },
  {
    id: 'RF11',
    question:
      'What is the purpose of the key prop when rendering lists in React?',
    options: [
      'To style list items',
      'To filter list items',
      'To help React identify which items have changed, been added, or been removed',
      'To sort list items',
    ],
    correctAnswer:
      'To help React identify which items have changed, been added, or been removed',
    explanation:
      'Keys help React identify which items in a list have changed, been added, or been removed, and play a crucial role in handling dynamic lists efficiently.',
    referenceLink:
      'https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key',
  },
  {
    id: 'RF12',
    question: 'How can you prevent a component from rendering in React?',
    options: [
      'Return null from the render method',
      'Use the shouldComponentUpdate lifecycle method',
      'Use the React.memo higher-order component',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'A component can prevent rendering by returning null, using shouldComponentUpdate, or using React.memo for functional components.',
    referenceLink:
      'https://react.dev/reference/react/Component#conditionally-returning-null',
  },
  {
    id: 'RF13',
    question:
      'What is the correct way to bind a method to a component instance in a class component?',
    options: [
      'this.handleClick.bind(this) in the constructor',
      'Using an arrow function in the class field',
      'Wrapping the method call in an arrow function in the JSX',
      'All of the above are correct',
    ],
    correctAnswer: 'All of the above are correct',
    explanation:
      'Methods can be bound in the constructor, as class fields using arrow functions, or inline in the JSX using arrow functions.',
    referenceLink: 'https://react.dev/learn/passing-props-to-a-component',
  },
  {
    id: 'RF14',
    question:
      'Which of the following is NOT a valid way to define a React component?',
    options: [
      'Function declaration',
      'Arrow function',
      'Class extending React.Component',
      'Object literal',
    ],
    correctAnswer: 'Object literal',
    explanation:
      'React components can be defined using function declarations, arrow functions, or classes, but not as object literals.',
    referenceLink: 'https://react.dev/learn/your-first-component',
  },
  {
    id: 'RF15',
    question: 'What is the purpose of the React.Fragment component?',
    options: [
      'To create a new DOM node',
      'To group multiple elements without adding an extra DOM node',
      'To memoize a component',
      'To create a reference to a DOM node',
    ],
    correctAnswer:
      'To group multiple elements without adding an extra DOM node',
    explanation:
      'React.Fragment allows you to group multiple elements without adding an extra DOM node to the rendered HTML.',
    referenceLink: 'https://react.dev/reference/react/Fragment',
  },
];
