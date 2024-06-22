const Questions = [
  {
    number: 1,
    question: 'If I want to write a sentence, which component should I use?',
    options: [
      {
        option: '<p> p tag </p>',
        explanation:
          'The <p> tag in HTML is used to define a paragraph. It is a block-level element, meaning it creates a new line before and after the content. Paragraphs are typically used to separate blocks of text for better readability',
        isItTrue: false,
      },
      {
        option: '<b> b tag </b>',
        explanation:
          'The <b> tag in HTML is used to make text bold. It does not add any special importance or emphasis to the text, but simply renders it in a bold typeface.',
        isItTrue: false,
      },
      {
        option: '<i> i tag </i>',
        explanation:
          'The <i> tag in HTML is used to italicize text. It generally represents a range of text that is set off from the normal text for stylistic purposes, such as a term, phrase, or foreign language word.\nYou can refer to the following article for more information: https://claude.ai/chat/c486a6df-a809-4e9a-aed0-d9ef0394d09a',
        isItTrue: false,
      },
      {
        option: '<Text> Text tag </Text>',
        explanation:
          'The Text component in React Native is used to display text. It supports nesting, styling, and touch handling.}',
        isItTrue: true,
      },
    ],
  },
  {
    number: 2,
    question:
      'Which of the following components is the optimized way to show a long list of data?',
    options: [
      {
        option: 'View',
        explanation:
          'In React Native, View is a fundamental component used for building the layout of an application. It acts as a container for other components, such as Text, Image, or even other View components. ',
        isItTrue: false,
      },
      {
        option: 'ScrollView',
        explanation:
          'In React Native, ScrollView is a component that enables scrolling within a content area. It can hold multiple child components and allows vertical and/or horizontal scrolling if the content overflows the screen.',
        isItTrue: false,
      },
      {
        option: 'SafeAreaView',
        explanation:
          'In React Native, SafeAreaView is a component that ensures content is rendered within the safe area boundaries of a device. This is particularly useful for iOS devices with notches, home indicators, or other screen obstructions.',
        isItTrue: false,
      },
      {
        option: 'FlatList',
        explanation:
          'In React Native, FlatList is a performant component for rendering large lists of data. It only renders items that are currently visible on the screen, optimizing memory and performance.',
        isItTrue: true,
      },
    ],
    correctOption: 'View',
  },
  {
    number: 3,
    question: 'How do you style your React Native component?',
    options: [
      {
        option: 'Stylesheet.create',
        explanation:
          'In React Native, StyleSheet.create is a method used to create an optimized and centralized style object for your components. It helps manage and improve the performance of style declarations.',
        isItTrue: true,
      },
      {
        option: 'Stylesheet.css',
        explanation:
          'there is no StyleSheet.css method in React Native. Styles are typically created using StyleSheet.create.',
        isItTrue: false,
      },
      {
        option: 'SafeAreaView',
        explanation:
          'In React Native, SafeAreaView is a component that ensures content is rendered within the safe area boundaries of a device. This is particularly useful for iOS devices with notches, home indicators, or other screen obstructions.',
        isItTrue: false,
      },
      {
        option: 'FlatList',
        explanation:
          'In React Native, FlatList is a performant component for rendering large lists of data. It only renders items that are currently visible on the screen, optimizing memory and performance.',
        isItTrue: false,
      },
    ],
  },
  {
    number: 4,
    question:
      'Which of the following is the correct plugin to navigate from one screen to another?',
    options: [
      {
        option: 'React Hooks',
        explanation:
          'React Hooks are functions that let you use state and other React features in functional components. They simplify managing component logic and lifecycle without using class components.',
        isItTrue: false,
      },
      {
        option: 'React Navigation',
        explanation:
          'React Navigation is a popular library for navigating between screens in a React Native app. It provides a straightforward way to implement navigation patterns, such as stacks, tabs, and drawers.',
        isItTrue: true,
      },
      {
        option: 'React Router',
        explanation:
          'React Router is a library for handling navigation and routing in React applications, including React Native. It allows you to define routes and navigate between different screens or components in a React app.',
        isItTrue: false,
      },
      {
        option: 'Screen',
        explanation:
          'In React Native, a screen typically refers to a component representing a distinct view or page within an application. Screens are often managed by a navigation library, such as React Navigation, to allow users to move between different parts of the app.',
        isItTrue: false,
      },
    ],
    correctOption: 'React Navigation',
  },
  {
    number: 5,
    question: 'Which of the following is the correct way to render a webpage.',
    options: [
      {
        option: 'React Native webview',
        explanation:
          'In React Native, WebView is a component used to embed web content within a React Native application. It allows you to render web pages or HTML content directly in your app.',
        isItTrue: false,
      },
      {
        option: 'React Native HTML',
        explanation:
          'In React Native, rendering HTML content can be done using libraries like react-native-render-html or react-native-webview. These libraries allow you to display HTML and CSS content within your React Native app.',
        isItTrue: false,
      },
      {
        option: 'View',
        explanation:
          'In React Native, a "View" is a fundamental component used to structure and organize other components and elements.',
        isItTrue: true,
      },
      {
        option: 'ScrollView',
        explanation:
          'In React Native, a ScrollView is a component that allows users to scroll through a list of elements that are larger than the screen size.',
        isItTrue: false,
      },
    ],
  },
  {
    number: 6,
    question:
      'Which of the following is the correct method(hook) to make an api call on page load?',
    options: [
      {
        option: 'useState',
        explanation:
          'In React Native, useState is a Hook that allows you to add state to functional components. It returns a state variable and a function to update that state.',
        isItTrue: false,
      },
      {
        option: 'useEffect',
        explanation:
          'In React Native, useEffect is a Hook that performs side effects in functional components. It runs after the component renders and can handle tasks such as data fetching, subscriptions, and manually updating the DOM.',
        isItTrue: true,
      },
      {
        option: 'useReducer',
        explanation:
          'In React Native, useReducer is a Hook that manages complex state logic in functional components. It is an alternative to useState, particularly useful for state with multiple sub-values or when the next state depends on the previous state.',
        isItTrue: false,
      },
      {
        option: 'useSelector',
        explanation:
          'In React Native, useSelector is a Hook provided by the React-Redux library. It allows you to extract and use data from the Redux store in your functional components.',
        isItTrue: false,
      },
    ],
    correctOption: 'useEffect',
  },
  {
    number: 7,
    question:
      "Which of the following is used to make sure that your input fields don't hide behind the keyboard?",
    options: [
      {
        option: 'KeyboardAvoidingView',
        explanation:
          'In React Native, KeyboardAvoidingView is a component that automatically adjusts its position or padding to avoid the on-screen keyboard, ensuring that the input fields remain visible.',
        isItTrue: true,
      },
      {
        option: 'KeyboardView',
        explanation:
          'In React Native, there is no specific KeyboardView component. However, you might be referring to handling the keyboard using components like KeyboardAvoidingView, Keyboard, and TextInput to manage keyboard interactions.',
        isItTrue: false,
      },
      {
        option: 'View',
        explanation:
          "In React Native, a View is a fundamental component used to structure and group other components together in a layout. It's similar to <div> in web development.",
        isItTrue: false,
      },
      {
        option: 'Scrollview',
        explanation:
          'In React Native, ScrollView is a component that enables scrolling within a content area. It can hold multiple child components and allows vertical and/or horizontal scrolling if the content overflows the screen.',
        isItTrue: false,
      },
    ],
    correctOption: 'KeyBoardAvoidingView',
  },
  {
    number: 8,
    question: 'What is the use case of ActivityIndicator in React Native?',
    options: [
      {option: 'To display a circular loading activity', isItTrue: false},
      {option: 'To display a progress bar activity', isItTrue: true},
      {option: 'To open the app', isItTrue: false},
      {option: 'To exit the app', isItTrue: false},
    ],
  },
  {
    number: 9,
    question: 'How do we detect platforms in React Native?',
    options: [
      {
        option: 'Platform.OS',
        explanation:
          'In React Native, Platform.OS is a built-in module that provides information about the operating system on which the app is running. It returns a string representing the current platform: either "ios" for iOS devices or "android" for Android devices.',
        isItTrue: true,
      },
      {
        option: 'Phone.OS',
        explanation:
          "In React Native, there isn't a direct concept of Phone.OS. If you're referring to detecting the operating system or platform of the device (like iOS or Android), you would typically use Platform.OS as mentioned earlier.",
        isItTrue: false,
      },
      {
        option: 'Dimension.OS',
        explanation:
          "In React Native, there is no Dimension.OS concept. However, if you are referring to dimensions related to the screen or device size, you can use Dimensions from React Native's core library. ",
        isItTrue: false,
      },
      {
        option: 'RN.OS',
        explanation:
          'In React Native, there is no specific concept or module named RN.OS. If you are looking to determine the operating system (OS) in React Native, you typically use Platform.OS.',
        isItTrue: false,
      },
    ],
  },
  {
    number: 10,
    question:
      'Which of the following is the correct way to store data in a local device?',
    options: [
      {
        option: 'Async storage',
        explanation:
          'In React Native, AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system. It provides a way to store key-value pairs locally on the device.',
        isItTrue: true,
      },
      {
        option: 'Local storage',
        explanation:
          'In React Native, Local storage typically refers to storage options like AsyncStorage or SQLite databases for persisting data locally on the device.',
        isItTrue: false,
      },
      {
        option: 'Session storage',
        explanation:
          'In React Native, there is no direct equivalent of "session storage" as in web development. In web browsers, session storage stores data temporarily for the duration of the page session, while AsyncStorage in React Native provides persistent storage across sessions.',
        isItTrue: false,
      },
      {
        option: 'RN Storage',
        explanation:
          'In React Native, there isn\'t a specific module or concept called "RN storage." Developers typically use AsyncStorage or SQLite for persistent storage needs in React Native applications.',
        isItTrue: false,
      },
    ],
    correctOption: 'Localstorage',
  },
];

export default Questions;
