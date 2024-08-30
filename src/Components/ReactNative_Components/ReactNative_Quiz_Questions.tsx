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

export const ReactNative_Advance_Topics_Quiz_Questions = [
  {
    id: 1,
    question: 'What is the purpose of Hermes in React Native?',
    options: [
      'To improve app performance',
      'To handle native module bridging',
      'To manage app state',
      'To handle deep linking',
    ],
    correctAnswer: 'To improve app performance',
    explanation:
      'Hermes is an open-source JavaScript engine optimized for running React Native on Android, helping to improve performance, particularly in terms of startup times.',
    referenceLink: 'https://reactnative.dev/docs/profile-hermes',
  },
  {
    id: 2,
    question:
      'Which of the following is NOT a valid method for debugging React Native apps?',
    options: [
      'Using Chrome Developer Tools',
      'Using React Native Debugger',
      'Using console.log statements',
      'Using Visual Studio Debugger',
    ],
    correctAnswer: 'Using Visual Studio Debugger',
    explanation:
      'Visual Studio Debugger is generally used for .NET development, and not typically for React Native debugging.',
    referenceLink: 'https://reactnative.dev/docs/debugging',
  },
  {
    id: 3,
    question:
      'What is the primary purpose of the Metro bundler in React Native?',
    options: [
      'To bundle and serve the JavaScript code',
      'To handle native module compilation',
      'To manage app dependencies',
      'To optimize images',
    ],
    correctAnswer: 'To bundle and serve the JavaScript code',
    explanation:
      'Metro is the JavaScript bundler used by React Native, responsible for bundling and serving the JavaScript code.',
    referenceLink: 'https://reactnative.dev/docs/metro',
  },
  {
    id: 4,
    question:
      'Which of the following is used to run JavaScript code in the background?',
    options: ['BackgroundTask', 'Headless JS', 'Service Workers', 'AsyncTask'],
    correctAnswer: 'Headless JS',
    explanation:
      'Headless JS allows running JavaScript code even when the app is in the background in React Native.',
    referenceLink: 'https://reactnative.dev/docs/headless-js-android',
  },
  {
    id: 5,
    question: 'What is the purpose of the Systrace tool in React Native?',
    options: [
      'To analyze app performance',
      'To handle system-level events',
      'To manage system resources',
      'To debug native code',
    ],
    correctAnswer: 'To analyze app performance',
    explanation:
      'Systrace is used for profiling and analyzing performance issues in React Native apps.',
    referenceLink: 'https://reactnative.dev/docs/systrace',
  },
  {
    id: 6,
    question:
      'Which of the following is NOT a valid way to optimize React Native app performance?',
    options: [
      'Using PureComponent',
      'Implementing shouldComponentUpdate',
      'Using FlatList instead of ScrollView for long lists',
      'Always using Animated API for all animations',
    ],
    correctAnswer: 'Always using Animated API for all animations',
    explanation:
      'While the Animated API is useful, it may not always be necessary for all animations, and overuse can lead to performance issues.',
    referenceLink: 'https://reactnative.dev/docs/animated',
  },
  {
    id: 7,
    question: 'What is the purpose of the react-native run-android command?',
    options: [
      'To start an Android emulator',
      'To build and run the app on an Android device or emulator',
      'To generate an Android APK',
      'To start the Metro bundler for Android',
    ],
    correctAnswer: 'To build and run the app on an Android device or emulator',
    explanation:
      'The react-native run-android command builds and runs the React Native app on a connected Android device or emulator.',
    referenceLink: 'https://reactnative.dev/docs/running-on-device',
  },
  {
    id: 8,
    question: 'How can you implement platform-specific code in React Native?',
    options: [
      'Using the Platform.select method',
      'Using .ios.js and .android.js file extensions',
      'Using the isPlatform prop',
      'Both a and b are correct',
    ],
    correctAnswer: 'Both a and b are correct',
    explanation:
      'You can implement platform-specific code by using the Platform.select method or by using different file extensions like .ios.js and .android.js.',
    referenceLink: 'https://reactnative.dev/docs/platform-specific-code',
  },
  {
    id: 9,
    question: 'What is the purpose of the Yoga layout engine in React Native?',
    options: [
      'To handle cross-platform layouts',
      'To optimize JavaScript execution',
      'To manage app state',
      'To handle native module bridging',
    ],
    correctAnswer: 'To handle cross-platform layouts',
    explanation:
      'Yoga is a layout engine that enables cross-platform UI design by implementing a subset of Flexbox.',
    referenceLink:
      'https://reactnative.dev/blog/2024/08/12/release-0.75#yoga-31-and-layout-improvements',
  },
  {
    id: 10,
    question:
      'Which of the following is NOT a valid method for integrating React Native into an existing native app?',
    options: [
      'Using a single React Native screen',
      'Using multiple React Native components',
      'Rewriting the entire app in React Native',
      'Using React Native as a library',
    ],
    correctAnswer: 'Rewriting the entire app in React Native',
    explanation:
      'While you can integrate React Native into an existing native app, rewriting the entire app in React Native is not considered integration.',
    referenceLink:
      'https://reactnative.dev/docs/integration-with-existing-apps',
  },
  {
    id: 11,
    question:
      'What is the purpose of the JSI (JavaScript Interface) in React Native?',
    options: [
      'To improve performance by allowing direct communication between JavaScript and native code',
      'To provide a JavaScript-like interface for native modules',
      'To handle JavaScript syntax in native code',
      'To manage JavaScript dependencies',
    ],
    correctAnswer:
      'To improve performance by allowing direct communication between JavaScript and native code',
    explanation:
      'The JSI (JavaScript Interface) allows for more efficient communication between JavaScript and native code, improving performance in React Native.',
    referenceLink:
      'https://reactnative.dev/architecture/glossary#javascript-interfaces-jsi',
  },
  {
    id: 12,
    question:
      'Which of the following is used to handle memory leaks in React Native?',
    options: [
      'MemoryManager',
      'LeakCanary',
      'React Native Profiler',
      'Instruments (for iOS)',
    ],
    correctAnswer: 'LeakCanary',
    explanation:
      'LeakCanary is an open-source tool used to detect memory leaks in Android applications, including those built with React Native.',
    referenceLink: 'https://reactnative.dev/',
  },
  {
    id: 13,
    question: 'What is the purpose of the react-native-codegen package?',
    options: [
      'To generate native code from JavaScript',
      'To generate JavaScript code from native modules',
      'To optimize the build process',
      'To handle code signing',
    ],
    correctAnswer: 'To generate JavaScript code from native modules',
    explanation:
      'The react-native-codegen package is used to generate JavaScript code from native modules, facilitating the integration of native code with JavaScript.',
    referenceLink:
      'https://reactnative.dev/blog/2022/11/22/react-native-core-contributor-summit-2022#react-native-codegen--typescript-support',
  },
  {
    id: 14,
    question: 'How can you implement custom native modules in React Native?',
    options: [
      'By creating a new npm package',
      'By adding native code and bridging it to JavaScript',
      'By using the CustomModule API',
      'By extending the React Native core modules',
    ],
    correctAnswer: 'By adding native code and bridging it to JavaScript',
    explanation:
      'Custom native modules in React Native can be implemented by adding native code (Java/Objective-C) and creating a bridge to communicate with JavaScript.',
    referenceLink: 'https://reactnative.dev/docs/native-modules-intro',
  },
  {
    id: 15,
    question:
      'What is the purpose of the New Architecture (Fabric) in React Native?',
    options: [
      'To improve performance and reduce the bridge overhead',
      'To provide a new set of core components',
      'To handle state management more efficiently',
      'To replace the existing JavaScript engine',
    ],
    correctAnswer: 'To improve performance and reduce the bridge overhead',
    explanation:
      "Fabric, part of React Native's New Architecture, aims to reduce the overhead caused by the bridge, improving performance.",
    referenceLink:
      'https://reactnative.dev/docs/the-new-architecture/landing-page',
  },
];
