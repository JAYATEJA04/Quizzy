export const TS_Fundamentals_Quiz_Questions = [
  {
    id: 1,
    question: 'What is TypeScript?',
    options: [
      'A new programming language',
      'A superset of JavaScript',
      'A JavaScript framework',
      'A JavaScript compiler',
    ],
    correctAnswer: 'A superset of JavaScript',
    explanation:
      'TypeScript is a strongly typed superset of JavaScript that adds optional static typing and other features to the language.',
    referenceLink: 'https://www.typescriptlang.org/docs/handbook/intro.html',
  },
  {
    id: 2,
    question: 'Which of the following is NOT a basic type in TypeScript?',
    options: ['number', 'string', 'boolean', 'char'],
    correctAnswer: 'char',
    explanation:
      'TypeScript includes number, string, and boolean as basic types, but not char. Character values are represented as strings.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html',
  },
  {
    id: 3,
    question:
      'How do you declare a variable with a specific type in TypeScript?',
    options: [
      'let x: number = 5;',
      'var x = 5 as number;',
      'const x = (number)5;',
      'number x = 5;',
    ],
    correctAnswer: 'let x: number = 5;',
    explanation:
      'In TypeScript, you can specify a type by using a colon (:) followed by the type after the variable name.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables',
  },
  {
    id: 4,
    question: 'What does the "any" type represent in TypeScript?',
    options: [
      'A union of all types',
      'A type that can be anything',
      'An error in type checking',
      'A placeholder for an unknown type',
    ],
    correctAnswer: 'A type that can be anything',
    explanation:
      'The "any" type is used when you want to opt-out of type checking for a variable.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any',
  },
  {
    id: 5,
    question: 'Which keyword is used to define an interface in TypeScript?',
    options: ['interface', 'type', 'class', 'struct'],
    correctAnswer: 'interface',
    explanation:
      'The "interface" keyword is used to define an interface in TypeScript.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces',
  },
  {
    id: 6,
    question:
      'What is the correct way to define an array of numbers in TypeScript?',
    options: [
      'let arr: number[] = [1, 2, 3];',
      'let arr: array<number> = [1, 2, 3];',
      'let arr: number = [1, 2, 3];',
      'let arr: [number] = [1, 2, 3];',
    ],
    correctAnswer: 'let arr: number[] = [1, 2, 3];',
    explanation:
      'In TypeScript, you can define an array of numbers using the number[] syntax.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays',
  },
  {
    id: 7,
    question: 'What is the purpose of the "void" type in TypeScript?',
    options: [
      'To represent the absence of a return value',
      'To indicate an error',
      'To represent an empty object',
      'To define a variable with no initial value',
    ],
    correctAnswer: 'To represent the absence of a return value',
    explanation:
      'The "void" type is commonly used as the return type of functions that do not return a value.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/functions.html#void',
  },
  {
    id: 8,
    question:
      'Which of the following is a valid way to define a function type in TypeScript?',
    options: [
      'type Func = (x: number, y: number) => number;',
      'type Func = function(x: number, y: number): number;',
      'type Func = {(x: number, y: number): number};',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'TypeScript provides multiple ways to define function types, including arrow function syntax, function keyword, and object literal syntax.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions',
  },
  {
    id: 9,
    question: 'What is the purpose of the "as" keyword in TypeScript?',
    options: [
      'To perform type assertion',
      'To create an alias for a type',
      'To define a new type',
      'To import a module',
    ],
    correctAnswer: 'To perform type assertion',
    explanation:
      'The "as" keyword is used for type assertion in TypeScript, allowing you to tell the compiler to treat a value as a specific type.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions',
  },
  {
    id: 10,
    question: 'What is the difference between "let" and "const" in TypeScript?',
    options: [
      '"let" is block-scoped, "const" is function-scoped',
      '"let" allows reassignment, "const" doesn\'t',
      '"let" is used for primitives, "const" for objects',
      'There is no difference',
    ],
    correctAnswer: '"let" allows reassignment, "const" doesn\'t',
    explanation:
      'Both "let" and "const" are block-scoped, but "let" allows reassignment of the variable while "const" doesn\'t.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/variable-declarations.html',
  },
  {
    id: 11,
    question: 'What is the purpose of the "readonly" modifier in TypeScript?',
    options: [
      'To make a property immutable',
      'To make a class abstract',
      'To prevent a class from being instantiated',
      'To make a method private',
    ],
    correctAnswer: 'To make a property immutable',
    explanation:
      'The "readonly" modifier makes a property immutable, meaning it can only be assigned a value when it\'s declared or in the constructor.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly',
  },
  {
    id: 12,
    question:
      'Which of the following is NOT a valid way to declare a tuple in TypeScript?',
    options: [
      'let tuple: [string, number] = ["hello", 10];',
      'let tuple: Array<string | number> = ["hello", 10];',
      'let tuple = ["hello", 10] as [string, number];',
      'let tuple: [string, number] = new Array("hello", 10);',
    ],
    correctAnswer: 'let tuple: Array<string | number> = ["hello", 10];',
    explanation:
      'This option declares a union type array, not a tuple. Tuples have a fixed number of elements of specific types.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types',
  },
  {
    id: 13,
    question: 'What is the purpose of the "never" type in TypeScript?',
    options: [
      'To represent a type that never occurs',
      'To indicate an infinite loop',
      "To define a variable that can't be assigned",
      'To represent an empty array',
    ],
    correctAnswer: 'To represent a type that never occurs',
    explanation:
      'The "never" type represents the type of values that never occur, such as a function that always throws an exception or never returns.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type',
  },
  {
    id: 14,
    question: 'What is the purpose of type inference in TypeScript?',
    options: [
      'To automatically assign types to variables',
      'To convert JavaScript to TypeScript',
      'To optimize code execution',
      'To catch runtime errors',
    ],
    correctAnswer: 'To automatically assign types to variables',
    explanation:
      'Type inference in TypeScript allows the compiler to automatically determine and assign types to variables based on their usage and initialization.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/type-inference.html',
  },
  {
    id: 15,
    question: 'Which of the following is true about enums in TypeScript?',
    options: [
      'Enums are always numeric',
      'Enums can be string-based',
      'Enums cannot have custom values',
      'Enums are not supported in TypeScript',
    ],
    correctAnswer: 'Enums can be string-based',
    explanation:
      'TypeScript supports both numeric and string-based enums, allowing you to define a set of named constants.',
    referenceLink: 'https://www.typescriptlang.org/docs/handbook/enums.html',
  },
];

export const TS_GearUp_Quiz_Questions = [
  {
    id: 1,
    question: 'What is a union type in TypeScript?',
    options: [
      'A type that can be one of several types',
      'A type that combines multiple types into one',
      'A type that represents a union of sets',
      'A type used for database operations',
    ],
    correctAnswer: 'A type that can be one of several types',
    explanation:
      'A union type in TypeScript allows a value to be one of several types, denoted using the | operator.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types',
  },
  {
    id: 2,
    question: 'What is the purpose of the "keyof" operator in TypeScript?',
    options: [
      'To get the keys of an object type as a union',
      'To create a new key in an object',
      'To check if a key exists in an object',
      'To remove a key from an object',
    ],
    correctAnswer: 'To get the keys of an object type as a union',
    explanation:
      'The "keyof" operator in TypeScript is used to get a union type of all the keys (as literal types) of an object type.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/keyof-types.html',
  },
  {
    id: 3,
    question: 'What is a generic type in TypeScript?',
    options: [
      'A type that can work with multiple types',
      'A type that is automatically inferred',
      'A type that represents any value',
      'A type used for global variables',
    ],
    correctAnswer: 'A type that can work with multiple types',
    explanation:
      'Generic types in TypeScript allow you to create reusable components that can work with a variety of types rather than a single one.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/generics.html',
  },
  {
    id: 4,
    question:
      'What is the purpose of the "extends" keyword in TypeScript interfaces?',
    options: [
      'To create a subclass',
      'To merge multiple interfaces',
      'To extend the functionality of a class',
      'To create a new interface based on an existing one',
    ],
    correctAnswer: 'To create a new interface based on an existing one',
    explanation:
      'The "extends" keyword in TypeScript interfaces is used to create a new interface that inherits properties and methods from one or more existing interfaces.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types',
  },
  {
    id: 5,
    question: 'What is a mapped type in TypeScript?',
    options: [
      'A type that transforms properties of an existing type',
      'A type used for mapping functions',
      'A type that represents a map data structure',
      'A type used for geographical mapping',
    ],
    correctAnswer: 'A type that transforms properties of an existing type',
    explanation:
      'Mapped types in TypeScript allow you to create new types based on old ones by transforming properties in some way.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html',
  },
  {
    id: 6,
    question: 'What is the purpose of the "infer" keyword in TypeScript?',
    options: [
      'To infer types in conditional types',
      'To automatically assign types to variables',
      'To create type inference rules',
      'To infer the return type of a function',
    ],
    correctAnswer: 'To infer types in conditional types',
    explanation:
      'The "infer" keyword is used within conditional types to infer type variables from the type we\'re comparing against.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types',
  },
  {
    id: 7,
    question: 'What is a literal type in TypeScript?',
    options: [
      'A type that represents a specific value',
      'A type used for string literals',
      'A type used for number literals',
      'A type that cannot be changed',
    ],
    correctAnswer: 'A type that represents a specific value',
    explanation:
      'Literal types in TypeScript allow you to specify exact values that a string, number, or boolean must have.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types',
  },
  {
    id: 8,
    question:
      'What is the purpose of the "Partial<T>" utility type in TypeScript?',
    options: [
      'To make all properties of T optional',
      'To select a part of T',
      'To make T partially mutable',
      'To create a subset of T',
    ],
    correctAnswer: 'To make all properties of T optional',
    explanation:
      'The "Partial<T>" utility type constructs a type with all properties of T set to optional.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype',
  },
  {
    id: 9,
    question: 'What is a discriminated union in TypeScript?',
    options: [
      'A union type with a common property to distinguish between variants',
      'A union of discriminated types',
      'A type used to discriminate between different unions',
      'A union type that excludes certain types',
    ],
    correctAnswer:
      'A union type with a common property to distinguish between variants',
    explanation:
      'A discriminated union is a union type where each member has a common property (the discriminant) that can be used to narrow down the specific type within the union.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions',
  },
  {
    id: 10,
    question: 'What is the purpose of index signatures in TypeScript?',
    options: [
      'To define a type for properties with dynamic names',
      'To create indexed arrays',
      'To access object properties using bracket notation',
      'To define the order of properties in an object',
    ],
    correctAnswer: 'To define a type for properties with dynamic names',
    explanation:
      'Index signatures allow you to type objects with properties that have dynamic names.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures',
  },
  {
    id: 11,
    question: 'What is a type assertion in TypeScript?',
    options: [
      'A way to tell the compiler to treat a value as a specific type',
      'A way to check types at runtime',
      'A method to assert that a type exists',
      'A technique to create new types',
    ],
    correctAnswer:
      'A way to tell the compiler to treat a value as a specific type',
    explanation:
      'Type assertions in TypeScript allow you to tell the compiler to treat a value as a specific type, overriding its inferred type.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions',
  },
  {
    id: 12,
    question: 'What is the purpose of the "readonly" modifier in TypeScript?',
    options: [
      'To make properties immutable',
      'To create read-only arrays',
      'To prevent class inheritance',
      'To define constant variables',
    ],
    correctAnswer: 'To make properties immutable',
    explanation:
      'The "readonly" modifier in TypeScript is used to make properties immutable, meaning they can only be assigned a value when they are initialized or in the constructor.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly',
  },
  {
    id: 13,
    question: 'What is a tuple type in TypeScript?',
    options: [
      'An array with a fixed number of elements of specific types',
      'A type alias for arrays',
      'A special kind of object type',
      'A type for key-value pairs',
    ],
    correctAnswer: 'An array with a fixed number of elements of specific types',
    explanation:
      'Tuple types allow you to express an array with a fixed number of elements, where each element may have a different type.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types',
  },
  {
    id: 14,
    question: 'What is the "unknown" type in TypeScript?',
    options: [
      'A type-safe alternative to "any"',
      'A type for unknown variables',
      'A placeholder for generic types',
      'A type for null and undefined values',
    ],
    correctAnswer: 'A type-safe alternative to "any"',
    explanation:
      'The "unknown" type is a type-safe counterpart of "any". It ensures you can\'t use a value until you\'ve narrowed its type.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown',
  },
  {
    id: 15,
    question:
      'What is the purpose of the "Pick<T, K>" utility type in TypeScript?',
    options: [
      "To create a type with a subset of T's properties",
      'To select random properties from T',
      'To remove properties from T',
      'To reorder properties in T',
    ],
    correctAnswer: "To create a type with a subset of T's properties",
    explanation:
      'The "Pick<T, K>" utility type constructs a type by picking the set of properties K from T.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys',
  },
];

export const TS_Advance_Quiz_Questions = [
  {
    id: 1,
    question: 'What is a conditional type in TypeScript?',
    options: [
      'A type that depends on a condition',
      'A type used in if-else statements',
      'A type for boolean conditions',
      'A type that changes at runtime',
    ],
    correctAnswer: 'A type that depends on a condition',
    explanation:
      'Conditional types in TypeScript allow you to create types that depend on other types, using a syntax similar to conditional expressions.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html',
  },
  {
    id: 2,
    question: 'What is the purpose of the "unknown" type in TypeScript?',
    options: [
      'To represent any value, but in a type-safe manner',
      'To indicate an error in type checking',
      'To represent a value of unknown origin',
      'To bypass type checking',
    ],
    correctAnswer: 'To represent any value, but in a type-safe manner',
    explanation:
      'The "unknown" type is the type-safe counterpart of "any". It ensures you can\'t use a value until you\'ve narrowed its type.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown',
  },
  {
    id: 3,
    question: 'What is a decorator in TypeScript?',
    options: [
      'A special kind of declaration that can be attached to classes, methods, or properties',
      'A function that returns a new type',
      'A type of comment used for documentation',
      'A way to decorate console output',
    ],
    correctAnswer:
      'A special kind of declaration that can be attached to classes, methods, or properties',
    explanation:
      'Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/decorators.html',
  },
  {
    id: 4,
    question: 'What is the "satisfies" operator in TypeScript?',
    options: [
      'An operator that checks if a value matches a type without changing the inferred type',
      'An operator that satisfies all type constraints',
      'An operator used in conditional types',
      'An operator that checks if all properties of an object are satisfied',
    ],
    correctAnswer:
      'An operator that checks if a value matches a type without changing the inferred type',
    explanation:
      'The "satisfies" operator allows you to validate that a value matches a type without changing the resulting type of the expression.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator',
  },
  {
    id: 5,
    question: 'What is a type predicate in TypeScript?',
    options: [
      'A function that returns a boolean and narrows the type',
      'A type that predicts another type',
      'A conditional statement in a type',
      'A way to define predicates as types',
    ],
    correctAnswer: 'A function that returns a boolean and narrows the type',
    explanation:
      'Type predicates are functions that return a boolean and can be used to narrow the type of a variable in TypeScript.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates',
  },
  {
    id: 6,
    question: 'What is the purpose of the "Readonly<T>" utility type?',
    options: [
      'To make all properties of T readonly',
      'To create a read-only version of a type',
      'To make T immutable',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'The "Readonly<T>" utility type constructs a type with all properties of T set to readonly, effectively making it immutable.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype',
  },
  {
    id: 7,
    question: 'What is a template literal type in TypeScript?',
    options: [
      'A type constructed from string literal types',
      'A type for template strings',
      'A type that uses backticks',
      'A type for HTML templates',
    ],
    correctAnswer: 'A type constructed from string literal types',
    explanation:
      'Template literal types allow you to create complex string literal types by combining simpler ones.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html',
  },
  {
    id: 8,
    question: 'What is the "--strict" compiler option in TypeScript?',
    options: [
      'An option that enables all strict type checking options',
      'An option that enforces strict null checks',
      'An option that makes all types non-nullable by default',
      'An option that disallows implicit any types',
    ],
    correctAnswer: 'An option that enables all strict type checking options',
    explanation:
      'The "--strict" compiler option enables all strict type checking options in TypeScript.',
    referenceLink: 'https://www.typescriptlang.org/tsconfig#strict',
  },
  {
    id: 9,
    question: 'What is the purpose of the "NonNullable<T>" utility type?',
    options: [
      'To create a type by excluding null and undefined from T',
      'To make all properties of T non-nullable',
      'To check if T is null',
      'To create a nullable version of T',
    ],
    correctAnswer: 'To create a type by excluding null and undefined from T',
    explanation:
      'NonNullable<T> constructs a type by excluding null and undefined from T.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype',
  },
  {
    id: 10,
    question: 'What is a "const assertion" in TypeScript?',
    options: [
      'A way to tell TypeScript to infer the most specific type possible',
      'A way to declare a constant variable',
      "A type assertion that can't be changed",
      'An assertion that a variable is constant',
    ],
    correctAnswer:
      'A way to tell TypeScript to infer the most specific type possible',
    explanation:
      'Const assertions (using "as const") tell TypeScript to infer the most specific type possible, making the type readonly and literal.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions',
  },
  {
    id: 11,
    question: 'What is the "indexed access type" in TypeScript?',
    options: [
      'A way to look up a specific property on another type',
      'A type for indexed arrays',
      'A type for object indexers',
      'A way to access types by index',
    ],
    correctAnswer: 'A way to look up a specific property on another type',
    explanation:
      'Indexed access types allow you to use an index to look up a specific property on another type.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html',
  },
  {
    id: 12,
    question: 'What is the purpose of the "ReturnType<T>" utility type?',
    options: [
      'To extract the return type of a function type',
      'To define the return type of a function',
      'To create a type that returns T',
      'To make a function return a specific type',
    ],
    correctAnswer: 'To extract the return type of a function type',
    explanation:
      'ReturnType<T> constructs a type consisting of the return type of the function T.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype',
  },
  {
    id: 13,
    question: 'What is a "mapped type" in TypeScript?',
    options: [
      'A type that transforms each property in an object type',
      'A type for Map objects',
      'A type that maps one type to another',
      'A type used in array mapping',
    ],
    correctAnswer: 'A type that transforms each property in an object type',
    explanation:
      'Mapped types allow you to create new types based on old ones by transforming properties in some way.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html',
  },
  {
    id: 14,
    question:
      'What is the purpose of the "never" type in advanced TypeScript usage?',
    options: [
      'To represent types that should never occur',
      'To create exhaustive checks in switch statements',
      'To indicate unreachable code',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'The "never" type is used to represent types that should never occur, create exhaustive checks, and indicate unreachable code in advanced TypeScript scenarios.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/basic-types.html#never',
  },
  {
    id: 15,
    question: 'What is a "discriminated union" in TypeScript?',
    options: [
      'A union type where all members have a common property that can be used to differentiate between them',
      'A union of discriminated types',
      'A type that discriminates between different unions',
      'A union type that excludes certain types',
    ],
    correctAnswer:
      'A union type where all members have a common property that can be used to differentiate between them',
    explanation:
      'A discriminated union is a union type where each member has a common property (the discriminant) that can be used to narrow down the specific type within the union.',
    referenceLink:
      'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions',
  },
];
