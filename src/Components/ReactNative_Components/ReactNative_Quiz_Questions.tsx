export const ReactNative_Fundamentals_Quiz_Questions = [
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

export const ReactNative_Intermediate_Topics_Quiz_Questions = [
  {
    id: 1,
    question: 'Which library is commonly used for navigation in React Native?',
    options: [
      'React Navigation',
      'React Router',
      'React Native Router',
      'Native Navigation',
    ],
    correctAnswer: 'React Navigation',
    explanation:
      'React Navigation provides a straightforward navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both Android and iOS.',
    referenceLink: 'https://reactnavigation.org/',
  },
  {
    id: 2,
    question:
      'What is the primary method used for making network requests in React Native?',
    options: ['axios', 'fetch', 'request', 'ajax'],
    correctAnswer: 'fetch',
    explanation:
      'React Native provides the Fetch API for your networking needs. Fetch will seem familiar if you have used XMLHttpRequest or other networking APIs before. ',
    referenceLink: 'https://reactnative.dev/docs/network',
  },
  {
    id: 3,
    question:
      'Which of the following is NOT a valid property of the Animated API?',
    options: ['timing', 'spring', 'bounce', 'decay'],
    correctAnswer: 'bounce',
    explanation:
      'The valid properties of the Animated API in React Native include timing, spring, and decay. However, bounce is not a valid property.',
    referenceLink: 'https://reactnative.dev/docs/animations#animated-api',
  },
  {
    id: 4,
    question: 'How can you access device information in React Native?',
    options: [
      'Using the Device API',
      'Using the Platform API',
      'Using the DeviceInfo module from react-native-device-info',
      'Using the SystemInfo API',
    ],
    correctAnswer: 'Using the DeviceInfo module from react-native-device-info',
    explanation:
      'The correct way to access device information in React Native is by using the DeviceInfo module from the "react-native-device-info" package.',
    referenceLink:
      'https://github.com/react-native-device-info/react-native-device-info',
  },
  {
    id: 5,
    question: 'What is the purpose of the AppState API in React Native?',
    options: [
      'To manage the overall state of the app',
      'To detect when the app moves between foreground and background',
      'To store app-wide data',
      'To manage app settings',
    ],
    correctAnswer:
      'To detect when the app moves between foreground and background',
    explanation:
      'The AppState API is used to detect when the app transitions between the foreground and background, allowing for handling such events.',
    referenceLink: 'https://reactnative.dev/docs/appstate',
  },
  {
    id: 6,
    question:
      'Which of the following is used to handle deep linking in React Native?',
    options: ['DeepLink API', 'Linking API', 'URLScheme API', 'DeepRouter'],
    correctAnswer: 'Linking API',
    explanation:
      'The Linking API in React Native is used to handle deep linking, allowing apps to respond to external URLs.',
    referenceLink: 'https://reactnative.dev/docs/linking',
  },
  {
    id: 7,
    question: 'What is the purpose of the InteractionManager in React Native?',
    options: [
      'To manage user interactions',
      'To schedule long-running tasks after interactions and animations have completed',
      'To handle touch events',
      'To manage component interactions',
    ],
    correctAnswer:
      'To schedule long-running tasks after interactions and animations have completed',
    explanation:
      'InteractionManager allows you to schedule long-running tasks to run after animations and interactions have been completed.',
    referenceLink: 'https://reactnative.dev/docs/interactionmanager',
  },
  {
    id: 8,
    question:
      'Which of the following is NOT a valid transform property in React Native?',
    options: ['scale', 'rotate', 'skew', 'move'],
    correctAnswer: 'move',
    explanation:
      'In React Native, valid transform properties include "scale", "rotate", and "skew", but "move" is not a valid property.',
    referenceLink: 'https://reactnative.dev/docs/transforms',
  },
  {
    id: 9,
    question: 'How can you implement a timer in React Native?',
    options: [
      'Using the Timer API',
      'Using setTimeout and setInterval',
      'Using the Clock component',
      'Using the TimerMixin',
    ],
    correctAnswer: 'Using setTimeout and setInterval',
    explanation:
      'Timers in React Native can be implemented using the JavaScript functions setTimeout and setInterval.',
    referenceLink: 'https://reactnative.dev/docs/timers',
  },
  {
    id: 10,
    question:
      'What is the purpose of the AccessibilityInfo API in React Native?',
    options: [
      "To provide information about the device's accessibility settings",
      'To make the app more accessible',
      'To handle accessibility gestures',
      'To add accessibility labels to components',
    ],
    correctAnswer:
      "To provide information about the device's accessibility settings",
    explanation:
      "The AccessibilityInfo API provides information about the device's accessibility settings, such as whether the screen reader is enabled.",
    referenceLink: 'https://reactnative.dev/docs/accessibilityinfo',
  },
  {
    id: 11,
    question: 'Which of the following is used to handle color in React Native?',
    options: ['ColorPicker', 'PaletteManager', 'ColorValue type', 'ChromaAPI'],
    correctAnswer: 'ColorValue type',
    explanation:
      'React Native uses the ColorValue type to handle color values in its components.',
    referenceLink: 'https://reactnative.dev/docs/colors',
  },
  {
    id: 12,
    question: 'How can you persist data locally in a React Native app?',
    options: [
      'Using LocalStorage',
      'Using AsyncStorage',
      'Using SQLite',
      'Both b and c are correct',
    ],
    correctAnswer: 'Both b and c are correct',
    explanation:
      'Data can be persisted locally in React Native using AsyncStorage for simple key-value storage and SQLite for relational database storage.',
    referenceLink: 'https://reactnative.dev/docs/asyncstorage',
  },
  {
    id: 13,
    question: 'What is the purpose of the PixelRatio API in React Native?',
    options: [
      'To convert between device-independent pixels and physical pixels',
      'To measure the screen size',
      "To adjust the app's resolution",
      'To handle image pixelation',
    ],
    correctAnswer:
      'To convert between device-independent pixels and physical pixels',
    explanation:
      'The PixelRatio API in React Native is used to convert between device-independent pixels (dp) and physical pixels.',
    referenceLink: 'https://reactnative.dev/docs/pixelratio',
  },
  {
    id: 14,
    question:
      'Which of the following is NOT a valid method of the Animated API?',
    options: ['start()', 'stop()', 'reset()', 'pause()'],
    correctAnswer: 'pause()',
    explanation:
      'The Animated API includes methods like start(), stop(), and reset(), but pause() is not a valid method.',
    referenceLink: 'https://reactnative.dev/docs/animations#animated-api',
  },
  {
    id: 15,
    question: 'How can you handle orientation changes in a React Native app?',
    options: [
      'Using the Orientation API',
      'Using the Dimensions API',
      'Using a third-party library like react-native-orientation',
      'Both b and c are correct',
    ],
    correctAnswer: 'Both b and c are correct',
    explanation:
      'Orientation changes can be handled using the Dimensions API or third-party libraries like react-native-orientation.',
    referenceLink: 'https://reactnative.dev/docs/dimensions',
  },
];
