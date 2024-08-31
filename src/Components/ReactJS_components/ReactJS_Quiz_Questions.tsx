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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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

export const ReactJS_Intermediate_Quiz_Questions = [
  {
    id: 1,
    question: 'What is the purpose of the useReducer hook?',
    options: [
      'To manage complex state logic in components',
      'To optimize component rendering',
      'To handle side effects',
      'To create custom hooks',
    ],
    correctAnswer: 'To manage complex state logic in components',
    explanation:
      'useReducer is used for managing more complex state logic in React components, especially when the next state depends on the previous one.',
    referenceLink: 'https://react.dev/reference/react/useReducer',
  },
  {
    id: 1,
    question:
      'How can you pass data deeply into a component tree without explicitly passing props at every level?',
    options: [
      'Using the useContext hook',
      'Using the useReducer hook',
      'Using the useMemo hook',
      'Using the useCallback hook',
    ],
    correctAnswer: 'Using the useContext hook',
    explanation:
      'The useContext hook allows you to subscribe to React context without introducing nesting, enabling you to pass data deeply into the component tree.',
    referenceLink: 'https://react.dev/reference/react/useContext',
  },
  {
    id: 3,
    question: 'What is the primary use case for the useRef hook?',
    options: [
      "To store mutable values that don't cause re-renders",
      'To optimize performance of functional components',
      'To create controlled form inputs',
      'To manage component state',
    ],
    correctAnswer: "To store mutable values that don't cause re-renders",
    explanation:
      'useRef is used to store mutable values that persist across re-renders without causing additional renders when they change.',
    referenceLink: 'https://react.dev/reference/react/useRef',
  },
  {
    id: 1,
    question:
      'Which hook would you use to perform side effects in a functional component?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    correctAnswer: 'useEffect',
    explanation:
      'The useEffect hook is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.',
    referenceLink: 'https://react.dev/reference/react/useEffect',
  },
  {
    id: 1,
    question:
      'What is the purpose of the dependency array in the useEffect hook?',
    options: [
      'To specify when the effect should run',
      "To optimize the effect's performance",
      'To declare variables used in the effect',
      'Both a and b are correct',
    ],
    correctAnswer: 'Both a and b are correct',
    explanation:
      'The dependency array in useEffect specifies when the effect should run and helps optimize performance by avoiding unnecessary effect executions.',
    referenceLink:
      'https://react.dev/reference/react/useEffect#specifying-reactive-dependencies',
  },
  {
    id: 1,
    question:
      'How can you preserve state when a component is unmounted and remounted?',
    options: [
      'Using the useMemo hook',
      'Using the useCallback hook',
      'Using a key prop',
      'Using the useRef hook',
    ],
    correctAnswer: 'Using a key prop',
    explanation:
      'The key prop can be used to control component instances. Changing the key will unmount the old instance and mount a new one, effectively resetting its state.',
    referenceLink: 'https://react.dev/learn/preserving-and-resetting-state',
  },
  {
    id: 1,
    question: 'What is the primary purpose of the useContext hook?',
    options: [
      'To create a new context',
      'To consume a context value',
      'To provide a context value',
      'To update a context value',
    ],
    correctAnswer: 'To consume a context value',
    explanation:
      'The primary purpose of useContext is to consume (read) the current value of a context in a functional component.',
    referenceLink: 'https://react.dev/reference/react/useContext',
  },
  {
    id: 1,
    question:
      'Which of the following is NOT a valid way to optimize React component performance?',
    options: [
      'Using React.memo',
      'Using the useMemo hook',
      'Using the useCallback hook',
      'Using the useEffect hook with an empty dependency array',
    ],
    correctAnswer: 'Using the useEffect hook with an empty dependency array',
    explanation:
      "While useEffect with an empty array can optimize certain scenarios, it's not primarily a performance optimization technique like the others listed.",
    referenceLink: 'https://react.dev/learn/render-and-commit',
  },
  {
    id: 1,
    question: 'What is the purpose of the useLayoutEffect hook?',
    options: [
      'To perform measurements',
      'To synchronously update the DOM',
      'To handle side effects after all DOM mutations',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'useLayoutEffect is used for all of these purposes: measurements, synchronous DOM updates, and handling effects after DOM mutations but before browser paint.',
    referenceLink: 'https://react.dev/reference/react/useLayoutEffect',
  },
  {
    id: 1,
    question: 'How can you implement a custom hook in React?',
    options: [
      'By using the createCustomHook function',
      'By creating a function that uses other hooks',
      'By extending the React.Hook class',
      'By using the useCustomHook function',
    ],
    correctAnswer: 'By creating a function that uses other hooks',
    explanation:
      'Custom hooks are created by writing a function that uses existing hooks. The function name should start with "use" by convention.',
    referenceLink: 'https://react.dev/learn/reusing-logic-with-custom-hooks',
  },
  {
    id: 1,
    question:
      'What is the primary difference between useEffect and useLayoutEffect?',
    options: [
      'useEffect runs after the browser has painted, useLayoutEffect runs synchronously before the browser has painted',
      'useEffect is for class components, useLayoutEffect is for functional components',
      'useEffect is for side effects, useLayoutEffect is for state updates',
      'There is no difference, they are aliases',
    ],
    correctAnswer:
      'useEffect runs after the browser has painted, useLayoutEffect runs synchronously before the browser has painted',
    explanation:
      'useLayoutEffect runs synchronously immediately after React has performed all DOM mutations, while useEffect runs after the browser has painted.',
    referenceLink: 'https://react.dev/reference/react/useLayoutEffect',
  },
  {
    id: 1,
    question: 'Which hook would you use to memoize expensive computations?',
    options: ['useMemo', 'useCallback', 'useReducer', 'useRef'],
    correctAnswer: 'useMemo',
    explanation:
      'useMemo is used to memoize expensive computations so that they are only recalculated when their dependencies change.',
    referenceLink: 'https://react.dev/reference/react/useMemo',
  },
  {
    id: 1,
    question:
      "What is the purpose of the key prop in React's reconciliation process?",
    options: [
      'To uniquely identify elements in a list',
      'To optimize rendering performance',
      'To trigger re-renders',
      'Both a and b are correct',
    ],
    correctAnswer: 'Both a and b are correct',
    explanation:
      'The key prop is used to uniquely identify elements in a list and helps React optimize rendering performance by efficiently updating only the changed elements.',
    referenceLink:
      'https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key',
  },
  {
    id: 1,
    question: 'How can you skip effects from running on every render?',
    options: [
      'By using the useCallback hook',
      'By providing a dependency array to useEffect',
      'By using the useMemo hook',
      'By returning a cleanup function from useEffect',
    ],
    correctAnswer: 'By providing a dependency array to useEffect',
    explanation:
      "Providing a dependency array to useEffect allows you to control when the effect runs, skipping it when the dependencies haven't changed.",
    referenceLink:
      'https://react.dev/reference/react/useEffect#specifying-reactive-dependencies',
  },
  {
    id: 1,
    question: 'What is the primary use case for the useImperativeHandle hook?',
    options: [
      'To optimize component rendering',
      'To handle form submissions',
      'To customize the instance value exposed when using ref',
      'To manage component state',
    ],
    correctAnswer: 'To customize the instance value exposed when using ref',
    explanation:
      'useImperativeHandle customizes the instance value that is exposed to parent components when using ref, allowing fine-grained control over what is exposed.',
    referenceLink: 'https://react.dev/reference/react/useImperativeHandle',
  },
];

export const ReactJS_Advance_Quiz_Questions = [
  {
    id: 1,
    question: 'What is the purpose of React.lazy?',
    options: [
      'To implement code splitting',
      'To optimize state updates',
      'To handle asynchronous rendering',
      'To implement server-side rendering',
    ],
    correctAnswer: 'To implement code splitting',
    explanation:
      'React.lazy is used for code splitting in React applications. It allows you to dynamically import components, which can significantly improve the performance of your app by reducing the initial bundle size.',
    referenceLink: 'https://react.dev/reference/react/lazy',
  },
  {
    id: 2,
    question: 'Which of the following is NOT a feature of Server Components?',
    options: [
      'They can directly access the backend resources',
      'They are rendered on the client',
      "They can't use state or effects",
      'They help reduce the bundle size',
    ],
    correctAnswer: 'They are rendered on the client',
    explanation:
      'Server Components are rendered on the server, not the client. This is one of their key features that distinguishes them from traditional React components.',
    referenceLink:
      'https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components',
  },
  {
    id: 3,
    question: 'What is the primary purpose of the Suspense component?',
    options: [
      'To handle errors in the component tree',
      'To optimize rendering performance',
      'To show a fallback while content is loading',
      'To implement code splitting',
    ],
    correctAnswer: 'To show a fallback while content is loading',
    explanation:
      "The primary purpose of Suspense is to display a fallback UI while content is loading. It's commonly used with lazy loading and data fetching.",
    referenceLink: 'https://react.dev/reference/react/Suspense',
  },
  {
    id: 4,
    question:
      'What is the main advantage of using concurrent rendering in React?',
    options: [
      'It allows React to interrupt a long-running render to handle a high-priority update',
      'It automatically optimizes all component renders',
      'It eliminates the need for state management',
      'It replaces the need for hooks in functional components',
    ],
    correctAnswer:
      'It allows React to interrupt a long-running render to handle a high-priority update',
    explanation:
      'Concurrent rendering allows React to interrupt rendering to handle more urgent updates, improving the responsiveness of complex applications.',
    referenceLink:
      'https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react',
  },
  {
    id: 5,
    question: 'Which hook would you use to defer updating a part of the UI?',
    options: [
      'useDeferredValue',
      'useTransition',
      'useMemo',
      'useLayoutEffect',
    ],
    correctAnswer: 'useDeferredValue',
    explanation:
      "useDeferredValue is used to defer updating a part of the UI. It's useful for optimizing performance by deprioritizing less important updates.",
    referenceLink: 'https://react.dev/reference/react/useDeferredValue',
  },
  {
    id: 6,
    question: 'What is the purpose of the useInsertionEffect hook?',
    options: [
      'To insert elements into the DOM',
      'To perform side effects before any DOM mutations',
      'To optimize CSS-in-JS libraries',
      'Both b and c are correct',
    ],
    correctAnswer: 'Both b and c are correct',
    explanation:
      'useInsertionEffect is designed to perform side effects before any DOM mutations and is specifically intended to optimize CSS-in-JS libraries.',
    referenceLink: 'https://react.dev/reference/react/useInsertionEffect',
  },
  {
    id: 7,
    question: 'How can you implement an error boundary in React?',
    options: [
      'Using the ErrorBoundary component',
      'Using the try-catch statement in render methods',
      'Creating a class component with getDerivedStateFromError or componentDidCatch lifecycle methods',
      'Using the useError hook',
    ],
    correctAnswer:
      'Creating a class component with getDerivedStateFromError or componentDidCatch lifecycle methods',
    explanation:
      'Error boundaries in React are implemented using class components that define either the getDerivedStateFromError or componentDidCatch lifecycle methods (or both).',
    referenceLink:
      'https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary',
  },
  {
    id: 8,
    question: 'What is the primary use case for the useImperativeHandle hook?',
    options: [
      'To optimize component rendering',
      'To handle form submissions',
      'To customize the instance value exposed when using ref',
      'To manage component state',
    ],
    correctAnswer: 'To customize the instance value exposed when using ref',
    explanation:
      'useImperativeHandle is used to customize the instance value that is exposed when using ref on a component. It allows you to control what is exposed to parent components.',
    referenceLink: 'https://react.dev/reference/react/useImperativeHandle',
  },
  {
    id: 9,
    question:
      'Which of the following is NOT a valid use case for the useMemo hook?',
    options: [
      'Memoizing expensive calculations',
      'Optimizing re-renders of child components',
      'Caching API response data',
      'Memoizing event handler functions',
    ],
    correctAnswer: 'Memoizing event handler functions',
    explanation:
      'Memoizing event handler functions is typically done with useCallback, not useMemo. useMemo is for memoizing values, while useCallback is for memoizing functions.',
    referenceLink: 'https://react.dev/reference/react/useMemo',
  },
  {
    id: 10,
    question: 'What is the purpose of the startTransition API in React?',
    options: [
      'To mark updates as non-urgent',
      'To handle component transitions',
      'To implement animations',
      'To optimize state updates',
    ],
    correctAnswer: 'To mark updates as non-urgent',
    explanation:
      'The startTransition API in React is used to mark updates as non-urgent, allowing React to prioritize more critical updates and maintain responsiveness.',
    referenceLink: 'https://react.dev/reference/react/startTransition',
  },
  {
    id: 11,
    question: 'How can you implement a portal in React?',
    options: [
      'Using the React.createPortal method',
      'Using the usePortal hook',
      'Using the Portal component',
      'Using the ReactDOM.createPortal method',
    ],
    correctAnswer: 'Using the ReactDOM.createPortal method',
    explanation:
      'Portals in React are implemented using the ReactDOM.createPortal method. This allows rendering a component into a DOM node that exists outside the hierarchy of the parent component.',
    referenceLink: 'https://react.dev/reference/react-dom/createPortal',
  },
  {
    id: 12,
    question: 'What is the main difference between useMemo and useCallback?',
    options: [
      'useMemo is for values, useCallback is for functions',
      'useMemo is for functions, useCallback is for values',
      'useMemo is synchronous, useCallback is asynchronous',
      'There is no difference, they are interchangeable',
    ],
    correctAnswer: 'useMemo is for values, useCallback is for functions',
    explanation:
      'The main difference is that useMemo is used to memoize values, while useCallback is used to memoize functions. Both are optimization hooks, but they serve slightly different purposes.',
    referenceLink: 'https://react.dev/reference/react/useMemo',
  },
  {
    id: 13,
    question: 'Which of the following is true about the useLayoutEffect hook?',
    options: [
      'It runs after all DOM mutations',
      "It's recommended for most use cases over useEffect",
      'It runs synchronously after all DOM mutations',
      "It's only available in class components",
    ],
    correctAnswer: 'It runs synchronously after all DOM mutations',
    explanation:
      'useLayoutEffect runs synchronously immediately after React has performed all DOM mutations. This can be useful for measuring layout before the browser has a chance to paint.',
    referenceLink: 'https://react.dev/reference/react/useLayoutEffect',
  },
  {
    id: 14,
    question: 'What is the purpose of the useId hook?',
    options: [
      'To generate unique IDs for accessibility attributes',
      'To identify components in the React DevTools',
      'To optimize list rendering',
      'To generate keys for list items',
    ],
    correctAnswer: 'To generate unique IDs for accessibility attributes',
    explanation:
      "The useId hook is used to generate unique IDs for accessibility attributes or for linking labels with form controls. It's particularly useful for server-rendered content.",
    referenceLink: 'https://react.dev/reference/react/useId',
  },
  {
    id: 15,
    question: 'Which of the following is NOT a principle of Server Components?',
    options: [
      'Zero bundle size',
      'Full access to the backend',
      'Automatic code splitting',
      'Always render on every request',
    ],
    correctAnswer: 'Always render on every request',
    explanation:
      "Server Components don't always render on every request. They can be cached and reused across requests, which is one of their performance benefits.",
    referenceLink:
      'https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components',
  },
];
