export const JAVA_fundamentalsQuestions = [
  {
    id: 1,
    question: 'What is the correct way to declare a main method in Java?',
    options: [
      'public static void main(String[] args)',
      'public void main(String args[])',
      'static void main(String args)',
      'void main(String[] args)',
    ],
    correctAnswer: 'public static void main(String[] args)',
    explanation:
      'The main method in Java must be public, static, void, and accept an array of Strings as its parameter.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/getStarted/application/',
  },
  {
    id: 2,
    question: 'Which of the following is not a primitive data type in Java?',
    options: ['int', 'boolean', 'String', 'double'],
    correctAnswer: 'String',
    explanation:
      'String is a class in Java, not a primitive data type. The other options are all primitive types.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html',
  },
  {
    id: 3,
    question: 'What is the result of 5 + 3 + "2" in Java?',
    options: ['10', '532', '82', '55'],
    correctAnswer: '82',
    explanation:
      'Java evaluates from left to right. It first adds 5 and 3, resulting in 8, then concatenates "2" as a string.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/data/strings.html',
  },
  {
    id: 4,
    question: 'Which keyword is used to inherit a class in Java?',
    options: ['extends', 'implements', 'inherits', 'super'],
    correctAnswer: 'extends',
    explanation: "The 'extends' keyword is used to inherit a class in Java.",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html',
  },
  {
    id: 5,
    question: 'What is the default value of a boolean variable in Java?',
    options: ['true', 'false', 'null', '0'],
    correctAnswer: 'false',
    explanation: 'The default value of a boolean variable in Java is false.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html',
  },
  {
    id: 6,
    question: 'Which of the following is not a valid access modifier in Java?',
    options: ['public', 'private', 'protected', 'friend'],
    correctAnswer: 'friend',
    explanation:
      "Java does not have a 'friend' access modifier. The valid access modifiers are public, private, protected, and default (no modifier).",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html',
  },
  {
    id: 7,
    question: 'What is the correct way to create an array in Java?',
    options: [
      'int[] arr = new int[5];',
      'int arr[] = new int[];',
      'int array[5] = new int[];',
      'array int[] = new int[5];',
    ],
    correctAnswer: 'int[] arr = new int[5];',
    explanation:
      'This is the correct syntax to create an array of integers with a size of 5 in Java.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html',
  },
  {
    id: 8,
    question: 'Which statement is true about Java?',
    options: [
      'Java is a purely object-oriented language',
      'Java supports multiple inheritance for classes',
      'Java is platform-dependent',
      'Java supports both primitive data types and objects',
    ],
    correctAnswer: 'Java supports both primitive data types and objects',
    explanation:
      "Java is not purely object-oriented as it supports primitive types. It doesn't support multiple inheritance for classes, and it's platform-independent.",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html',
  },
  {
    id: 9,
    question: 'What is the output of System.out.println(1 + 2 + "3" + 4 + 5);?',
    options: ['3345', '3345', '15', '6345'],
    correctAnswer: '3345',
    explanation:
      'Java evaluates from left to right. 1+2 is 3, then "3" is concatenated, making it "33", then 4 and 5 are concatenated as strings.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/data/strings.html',
  },
  {
    id: 10,
    question:
      'Which of the following is used to explicitly throw an exception?',
    options: ['throw', 'throws', 'thrown', 'catch'],
    correctAnswer: 'throw',
    explanation:
      "The 'throw' keyword is used to explicitly throw an exception in Java.",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/essential/exceptions/throwing.html',
  },
  {
    id: 11,
    question: 'What is the correct way to declare a constant in Java?',
    options: [
      'final int MAX_VALUE = 100;',
      'const int MAX_VALUE = 100;',
      'static int MAX_VALUE = 100;',
      'int final MAX_VALUE = 100;',
    ],
    correctAnswer: 'final int MAX_VALUE = 100;',
    explanation: "In Java, constants are declared using the 'final' keyword.",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html',
  },
  {
    id: 12,
    question: 'Which of the following is not a valid loop in Java?',
    options: ['for loop', 'while loop', 'do-while loop', 'repeat-until loop'],
    correctAnswer: 'repeat-until loop',
    explanation:
      'Java does not have a repeat-until loop. It has for, while, and do-while loops.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html',
  },
  {
    id: 13,
    question:
      "What is the correct way to create an instance of a class named 'MyClass'?",
    options: [
      'MyClass obj = new MyClass();',
      'new MyClass obj;',
      'MyClass obj = MyClass();',
      'obj = new MyClass;',
    ],
    correctAnswer: 'MyClass obj = new MyClass();',
    explanation:
      "This is the correct syntax to create an instance of a class in Java using the 'new' keyword.",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html',
  },
  {
    id: 14,
    question: 'Which statement is used to exit a loop in Java?',
    options: ['break', 'exit', 'continue', 'return'],
    correctAnswer: 'break',
    explanation: "The 'break' statement is used to exit a loop in Java.",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html',
  },
  {
    id: 15,
    question: 'What is the default value of an int variable in Java?',
    options: ['0', '1', 'null', 'undefined'],
    correctAnswer: '0',
    explanation: 'The default value of an int variable in Java is 0.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html',
  },
];

export const JAVA_intermediateQuestions = [
  {
    id: 1,
    question:
      "What is the purpose of the 'final' keyword when applied to a method?",
    options: [
      'It makes the method private',
      'It prevents the method from being overridden',
      'It makes the method static',
      'It forces the method to throw an exception',
    ],
    correctAnswer: 'It prevents the method from being overridden',
    explanation:
      "When applied to a method, the 'final' keyword prevents the method from being overridden in subclasses.",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/IandI/final.html',
  },
  {
    id: 2,
    question:
      'Which collection type should be used when you need to maintain insertion order and allow duplicates?',
    options: ['ArrayList', 'HashSet', 'TreeSet', 'LinkedHashSet'],
    correctAnswer: 'ArrayList',
    explanation:
      'ArrayList maintains insertion order and allows duplicate elements.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html',
  },
  {
    id: 3,
    question: "What is the purpose of the 'synchronized' keyword in Java?",
    options: [
      'To create a new thread',
      'To improve performance',
      'To prevent thread interference and memory consistency errors',
      'To declare a variable as constant',
    ],
    correctAnswer:
      'To prevent thread interference and memory consistency errors',
    explanation:
      "The 'synchronized' keyword is used to create synchronized methods or blocks, which help in preventing thread interference and memory consistency errors in multithreaded programs.",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/essential/concurrency/syncmeth.html',
  },
  {
    id: 4,
    question:
      'Which interface should a class implement to be used as a key in a HashMap?',
    options: ['Comparable', 'Cloneable', 'Serializable', 'Hashable'],
    correctAnswer: 'Comparable',
    explanation:
      'While not strictly necessary, implementing the Comparable interface (and overriding equals() and hashCode()) is a good practice for objects used as keys in a HashMap to ensure proper behavior.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html',
  },
  {
    id: 5,
    question: "What is the purpose of the 'transient' keyword in Java?",
    options: [
      'To make a variable thread-safe',
      'To prevent a variable from being serialized',
      'To make a variable constant',
      'To allow a variable to be accessed from other packages',
    ],
    correctAnswer: 'To prevent a variable from being serialized',
    explanation:
      "The 'transient' keyword is used to indicate that a variable should not be serialized when the object containing it is serialized.",
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html',
  },
  {
    id: 6,
    question:
      "Which of the following is true about the 'try-with-resources' statement?",
    options: [
      "It's used for exception handling only",
      'It automatically closes resources that implement AutoCloseable',
      "It's a feature introduced in Java 5",
      'It can only be used with file handling',
    ],
    correctAnswer:
      'It automatically closes resources that implement AutoCloseable',
    explanation:
      'The try-with-resources statement ensures that each resource is closed at the end of the statement. Any object that implements java.lang.AutoCloseable can be used as a resource.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html',
  },
  {
    id: 7,
    question: "What is the purpose of the 'volatile' keyword in Java?",
    options: [
      'To make a variable constant',
      'To make a variable thread-safe',
      'To prevent a variable from being garbage collected',
      'To store the variable in main memory for visibility to all threads',
    ],
    correctAnswer:
      'To store the variable in main memory for visibility to all threads',
    explanation:
      "The 'volatile' keyword ensures that the variable is always read from and written to main memory, making its value visible to all threads.",
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/essential/concurrency/atomic.html',
  },
  {
    id: 8,
    question: 'Which of the following is not a functional interface in Java 8?',
    options: ['Predicate', 'Consumer', 'Supplier', 'Collector'],
    correctAnswer: 'Collector',
    explanation:
      'Collector is not a functional interface. Predicate, Consumer, and Supplier are functional interfaces introduced in Java 8.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html',
  },
  {
    id: 9,
    question: "What is the purpose of the 'default' method in Java interfaces?",
    options: [
      'To define a constant',
      'To provide a default implementation for a method',
      'To make the interface abstract',
      'To declare a private method',
    ],
    correctAnswer: 'To provide a default implementation for a method',
    explanation:
      'Default methods in interfaces allow the addition of new methods to interfaces without breaking the existing implementation of these interfaces.',
    referenceLink:
      'https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html',
  },
];

export const JAVA_advancedQuestions = [
  {
    id: 1,
    question: "What is the purpose of the 'ForkJoinPool' in Java?",
    options: [
      'To manage database connections',
      'To implement the producer-consumer pattern',
      'To efficiently execute recursive tasks using multiple threads',
      'To handle HTTP requests in a web application',
    ],
    correctAnswer:
      'To efficiently execute recursive tasks using multiple threads',
    explanation:
      'ForkJoinPool is a special thread pool implementation designed to efficiently execute recursive tasks using multiple processor cores.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ForkJoinPool.html',
  },
  {
    id: 2,
    question: 'Which of the following is not a feature introduced in Java 9?',
    options: [
      'Module System',
      'JShell',
      'Private methods in interfaces',
      'Stream API',
    ],
    correctAnswer: 'Stream API',
    explanation:
      'The Stream API was introduced in Java 8, not Java 9. The other options (Module System, JShell, and private methods in interfaces) were introduced in Java 9.',
    referenceLink: 'https://docs.oracle.com/javase/9/whatsnew/toc.htm',
  },
  {
    id: 3,
    question: "What is the purpose of the 'CompletableFuture' class in Java?",
    options: [
      'To represent a future result of an asynchronous computation',
      'To implement a complete binary tree',
      'To handle file compression',
      'To manage database transactions',
    ],
    correctAnswer:
      'To represent a future result of an asynchronous computation',
    explanation:
      'CompletableFuture is used for asynchronous programming in Java. It can be explicitly completed (setting its value and status), and can be used as a CompletionStage, supporting dependent functions and actions.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html',
  },
  {
    id: 4,
    question:
      'Which design pattern is used when you want to decouple an abstraction from its implementation so that the two can vary independently?',
    options: ['Factory Method', 'Bridge', 'Adapter', 'Decorator'],
    correctAnswer: 'Bridge',
    explanation:
      'The Bridge pattern is used to separate an abstraction from its implementation so that both can be modified independently without affecting each other.',
    referenceLink: 'https://refactoring.guru/design-patterns/bridge',
  },
  {
    id: 5,
    question: "What is the purpose of the 'Unsafe' class in Java?",
    options: [
      'To perform low-level, unsafe operations',
      'To handle unchecked exceptions',
      'To create thread-safe code',
      'To implement security features',
    ],
    correctAnswer: 'To perform low-level, unsafe operations',
    explanation:
      'The Unsafe class provides methods for performing low-level, unsafe operations. This includes direct memory access and manipulation, which can be dangerous if used incorrectly.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/sun/misc/Unsafe.html',
  },
  {
    id: 6,
    question:
      "Which of the following is true about Java's G1 (Garbage First) Garbage Collector?",
    options: [
      "It's designed for small heaps",
      'It aims to provide high throughput with minimal pauses',
      "It's the default garbage collector in Java 8",
      "It doesn't support concurrent collection",
    ],
    correctAnswer: 'It aims to provide high throughput with minimal pauses',
    explanation:
      'G1 is a server-style garbage collector, targeted for multi-processor machines with large memories. It aims to provide high throughput while maintaining low pause times.',
    referenceLink:
      'https://docs.oracle.com/javase/9/gctuning/garbage-first-garbage-collector.htm',
  },
  {
    id: 7,
    question:
      "What is the purpose of the 'VarHandle' class introduced in Java 9?",
    options: [
      'To declare variables with inferred types',
      'To handle variations in method implementations',
      'To provide fine-grained access to variable handles',
      'To manage variable-length argument lists',
    ],
    correctAnswer: 'To provide fine-grained access to variable handles',
    explanation:
      'VarHandle provides a way to perform atomic and memory-ordered operations on objects, arrays, and variables, similar to the functionality of sun.misc.Unsafe, but in a more controlled manner.',
    referenceLink:
      'https://docs.oracle.com/javase/9/docs/api/java/lang/invoke/VarHandle.html',
  },
  {
    id: 8,
    question:
      "Which of the following is not a type of reference in Java's Reference Objects framework?",
    options: [
      'Strong Reference',
      'Soft Reference',
      'Weak Reference',
      'Phantom Reference',
    ],
    correctAnswer: 'Strong Reference',
    explanation:
      'Strong References are regular object references and are not part of the Reference Objects framework. The framework includes Soft, Weak, and Phantom references.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/lang/ref/package-summary.html',
  },
  {
    id: 9,
    question: "What is the purpose of the 'invokedynamic' instruction in Java?",
    options: [
      'To invoke dynamic SQL queries',
      'To support dynamic method invocation for languages implemented on the JVM',
      'To dynamically allocate memory',
      'To invoke native methods dynamically',
    ],
    correctAnswer:
      'To support dynamic method invocation for languages implemented on the JVM',
    explanation:
      'The invokedynamic instruction provides language implementers the flexibility to determine the linkage between a call site and a method implementation at runtime, allowing for more efficient implementation of dynamic languages on the JVM.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/technotes/guides/vm/multiple-language-support.html',
  },
  {
    id: 10,
    question: "Which of the following is true about Java's Project Loom?",
    options: [
      "It's a new build tool for Java",
      'It introduces value types to Java',
      'It aims to introduce lightweight concurrency constructs to Java',
      "It's a new garbage collection algorithm",
    ],
    correctAnswer:
      'It aims to introduce lightweight concurrency constructs to Java',
    explanation:
      'Project Loom aims to introduce lightweight user-mode threads (fibers) and continuations to Java, making it easier to write, debug, and maintain concurrent applications.',
    referenceLink: 'https://openjdk.java.net/projects/loom/',
  },
  {
    id: 11,
    question: "What is the purpose of the 'Nashorn' engine in Java?",
    options: [
      'To execute JavaScript code within Java applications',
      'To optimize database queries',
      'To handle network protocols',
      'To generate bytecode at runtime',
    ],
    correctAnswer: 'To execute JavaScript code within Java applications',
    explanation:
      'Nashorn is a JavaScript engine developed by Oracle for the Java platform. It allows developers to embed JavaScript code within Java applications.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/',
  },
  {
    id: 12,
    question:
      "Which of the following is a key feature of Java's Project Valhalla?",
    options: [
      'Introducing new concurrency models',
      'Adding support for value types',
      'Improving the performance of the JVM',
      'Enhancing the Java Collections Framework',
    ],
    correctAnswer: 'Adding support for value types',
    explanation:
      'Project Valhalla aims to introduce value types to Java, which would allow for more efficient handling of small, immutable objects.',
    referenceLink: 'https://openjdk.java.net/projects/valhalla/',
  },
  {
    id: 13,
    question: "What is the purpose of Java's SecurityManager?",
    options: [
      'To encrypt sensitive data',
      'To manage user authentication',
      'To control access to sensitive operations',
      'To detect and prevent SQL injection attacks',
    ],
    correctAnswer: 'To control access to sensitive operations',
    explanation:
      'The SecurityManager in Java is used to define a security policy for an application, controlling access to sensitive operations like file I/O, network access, and system property access.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/lang/SecurityManager.html',
  },
  {
    id: 14,
    question: 'Which of the following is not a type of Java ClassLoader?',
    options: [
      'Bootstrap ClassLoader',
      'Extension ClassLoader',
      'Application ClassLoader',
      'Dynamic ClassLoader',
    ],
    correctAnswer: 'Dynamic ClassLoader',
    explanation:
      "The three types of built-in ClassLoaders in Java are Bootstrap, Extension (Platform in Java 9+), and Application ClassLoader. 'Dynamic ClassLoader' is not a standard type.",
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html',
  },
  {
    id: 15,
    question: "What is the purpose of Java's MethodHandle API?",
    options: [
      'To handle HTTP methods in web applications',
      'To provide a way to lookup, invoke, and customize methods dynamically',
      'To optimize method calls at compile time',
      'To handle method overloading',
    ],
    correctAnswer:
      'To provide a way to lookup, invoke, and customize methods dynamically',
    explanation:
      'The MethodHandle API provides a way to find, adapt, and invoke methods, constructors, and fields in a dynamic and flexible way, similar to reflection but with better performance.',
    referenceLink:
      'https://docs.oracle.com/javase/8/docs/api/java/lang/invoke/MethodHandle.html',
  },
];
