const ReactNative_Fundamentals_Questions = [
  {
    id: 1,
    question: 'Which of the following is NOT a core component in React Native?',
    options: ['View', 'Text', 'Div', 'Image'],
    correctAnswer: 'Div',
    explanation:
      'The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, <div>, android.view, etc.',
    referenceLink: 'https://reactnative.dev/docs/view',
  },
  {
    id: 2,
    question: 'What is the primary purpose of the ScrollView component?',
    options: [
      'To create scrollable content',
      'To navigate between screens',
      'To style components',
      'To handle user input',
    ],
    correctAnswer: 'To create scrollable content',
    explanation:
      'Component that wraps platform ScrollView while providing integration with touch locking "responder" system.',
    referenceLink: 'https://reactnative.dev/docs/scrollview',
  },
  {
    id: 3,
    question: 'Which component is used for user text input in React Native?',
    options: ['TextInput', 'Input', 'TextField', 'EditText'],
    correctAnswer: 'TextInput',
    explanation:
      'A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.',
    referenceLink: 'https://reactnative.dev/docs/textinput',
  },
  {
    id: 4,
    question: 'What is the correct way to apply inline styles in React Native?',
    options: [
      "style={{backgroundColor: 'blue'}}",
      'style="backgroundColor: blue"',
      "styles.backgroundColor = 'blue'",
      "backgroundColor: 'blue'",
    ],
    correctAnswer: "style={{backgroundColor: 'blue'}}",
    explanation:
      'With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.',
    referenceLink: 'https://reactnative.dev/docs/style',
  },
  {
    id: 5,
    question:
      'Which of the following is used for efficient rendering of long lists in React Native?',
    options: ['ScrollView', 'FlatList', 'ListView', 'LongList'],
    correctAnswer: 'FlatList',
    explanation:
      'latList renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.',
    referenceLink: 'https://reactnative.dev/docs/flatlist',
  },
  {
    id: 6,
    question:
      'What is the main difference between state and props in React Native?',
    options: [
      'State is mutable, props are immutable',
      'State is for parent components, props for child components',
      'State is for styling, props for data',
      'There is no difference',
    ],
    correctAnswer: 'State is mutable, props are immutable',
    explanation:
      'State is mutable and managed within the component, while props are immutable and passed from parent to child components.',
    referenceLink: 'https://react.dev/learn/adding-interactivity',
  },
  {
    id: 7,
    question: 'How do you create a button in React Native?',
    options: [
      '<button onClick={handleClick}>Press me</button>',
      '<Pressable onPress={handlePress}>Press me</Pressable>',
      '<Button onPress={handlePress} title="Press me"',
      'Both a and c are correct',
    ],
    correctAnswer: '<Button onPress={handlePress} title="Press me"',
    explanation:
      'A basic button component that should render nicely on any platform. Supports a minimal level of customization.',
    referenceLink: 'https://reactnative.dev/docs/button',
  },
  {
    id: 8,
    question:
      'Which of the following is NOT a valid flex direction in React Native?',
    options: ['column', 'vertical', 'row-reverse', 'row'],
    correctAnswer: 'vertical',
    explanation:
      'flexDirection controls the direction in which the children of a node are laid out. This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in.',
    referenceLink: 'https://reactnative.dev/docs/flexbox#flex-direction',
  },
  {
    id: 9,
    question: 'How can you add a tap event to a component in React Native?',
    options: [
      'Using the TouchableOpacity component',
      'Adding an onClick prop',
      ' Using the Tappable component',
      'Adding an onPress prop to any component',
    ],
    correctAnswer: 'Using the TouchableOpacity component',
    explanation:
      'In React Native, you add a tap event by wrapping a component with TouchableOpacity or other Touchable components that provide the onPress prop.',
    referenceLink: 'https://reactnative.dev/docs/touchableopacity',
  },
  {
    id: 10,
    question: 'What is the purpose of the Platform module in React Native?',
    options: [
      'To create platform-specific code',
      'To style components differently for iOS and Android',
      'To detect the operating system the app is running on',
      'All of the above',
    ],
    correctAnswer: 'To detect the operating system the app is running on',
    explanation:
      'The Platform module is used to identify the OS (iOS or Android) and can be helpful when you need to write platform-specific code or make decisions based on the platform your app is running on.',
    referenceLink: 'https://reactnative.dev/docs/platform',
  },
  {
    id: 11,
    question:
      'Which component is used to render multiple columns in a list view?',
    options: ['MultiColumnList', 'ColumnView', 'SectionList', 'GridView'],
    correctAnswer: 'SectionList',
    explanation:
      'SectionList is designed to render a list with sections and can be used to display multiple columns by customizing its rendering logic. If you want to create a grid or multi-column layout, you might use a different component like FlatList with a custom numColumns prop.',
    referenceLink: 'https://reactnative.dev/docs/sectionlist',
  },
  {
    id: 12,
    question:
      'How do you apply multiple styles to a component in React Native?',
    options: [
      'style={styles.container + styles.header}',
      'style={[styles.container, styles.header]}',
      'style={styles.container && styles.header}',
      'styles={[container, header]}',
    ],
    correctAnswer: 'style={[styles.container, styles.header]}',
    explanation:
      'This approach allows you to combine multiple style objects into a single style prop, where the styles are applied in the order they are listed, and later styles can override earlier ones.',
    referenceLink: 'https://reactnative.dev/docs/style',
  },
  {
    id: 13,
    question:
      'What is the correct way to use an image from a local source in React Native?',
    options: [
      "<Image source={require('./image.png')} />",
      '<Image src="./image.png" />',
      '<Image source="./image.png" />',
      "<Img source={require('./image.png')} />",
    ],
    correctAnswer: "<Image source={require('./image.png')} />",
    explanation:
      'A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.',
    referenceLink: 'https://reactnative.dev/docs/image',
  },
  {
    id: 14,
    question:
      'Which of the following is NOT a valid justifyContent value in React Native?',
    options: ['flex-start', 'center', 'space-between', 'align-center'],
    correctAnswer: 'align-center',
    explanation:
      'justifyContent describes how to align children within the main axis of their container. For example, you can use this property to center a child horizontally within a container with flexDirection set to row or vertically within a container with flexDirection set to column.',
    referenceLink: 'https://reactnative.dev/docs/flexbox#justify-content',
  },
  {
    id: 15,
    question: 'How can you conditionally render a component in React Native?',
    options: [
      'Using if-else statements in JSX',
      'Using the ternary operator',
      'Using logical && operator',
      'Both b and c are correct',
    ],
    correctAnswer: 'Both b and c are correct',
    explanation:
      'You can use the ternary operator (condition ? trueComponent : falseComponent) or the logical && operator (condition && Component) to conditionally render components in JSX. Both methods are commonly used depending on the complexity and requirements of the conditional rendering.',
    referenceLink: 'https://react.dev/learn/conditional-rendering',
  },
];

export default ReactNative_Fundamentals_Questions;
