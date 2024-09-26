1. //An Introduction to JavaScript


//What is JavaScript?


//JavaScript was initially created to “make web pages alive”.

//The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.

//Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.


//Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.


//The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

//Different engines have different “codenames”. For example:

//V8 – in Chrome, Opera and Edge.
//…There are other codenames like “Chakra” for IE, “JavaScriptCore”, “Nitro” and //“SquirrelFish” for Safari, etc.



//How do engines work?
//Engines are complicated. But the basics are easy.

//The engine (embedded if it’s a browser) reads (“parses”) the script.
//Then it converts (“compiles”) the script to machine code.
//And then the machine code runs, pretty fast.
//The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.




//What can in-browser JavaScript do?


// in-browser JavaScript is able to:

//Add new HTML to the page, change the existing content, modify styles.
//React to user actions, run on mouse clicks, pointer movements, key presses.
//Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
//Get and set cookies, ask questions to the visitor, show messages.
//Remember the data on the client-side (“local storage”).



//What makes JavaScript unique?
//There are at least three great things about JavaScript:

//Full integration with HTML/CSS.
//Simple things are done simply.
//Supported by all major browsers and enabled by default.
//JavaScript is the only browser technology that combines these three things.

//That’s what makes JavaScript unique. That’s why it’s the most widespread tool for creating browser interfaces.

//That said, JavaScript can be used to create servers, mobile applications, etc.




// Summary
//JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.
//Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.
//There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.



1.2  //IDE

//The term IDE (Integrated Development Environment)


//An IDE loads the project (which can be many files), allows navigation between files, provides autocompletion based on the whole project (not just the open file), and integrates with a version management system (like git), a testing environment, and other “project-level” stuff.

//If you haven’t selected an IDE yet, consider the following options:

//Visual Studio Code (cross-platform, free).
//WebStorm (cross-platform, paid).




1.3 //Developer console 

//Developer tools allow us to see errors, run commands, examine variables, and much more.
//They can be opened with F12 for most browsers on Windows. Chrome for Mac needs Cmd+Opt+J, Safari: Cmd+Opt+C (need to enable first).





2. //The “script” tag


//We can use a <script> tag to add JavaScript code to a page.
//The type and language attributes are not required.
//A script in an external file can be inserted with <script src="path/to/script.js"></script>.


2.1 // Comments


//One-line comments start with two forward slash characters //.


//Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.

//Nested comments are not supported!
//There may not be /*...*/ inside another /*...*/.


2.2 //“use strict”

//The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.



2.3 //A variable

//A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.



2.4  //Variable naming

//There are two limitations on variable names in JavaScript:

//The name must contain only letters, digits, or the symbols $ and _.
//The first character must not be a digit.

//When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

//What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.

//We can declare variables to store data by using the var, let, or const keywords.

//let – is a modern variable declaration.
//var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
//const – is like let, but the value of the variable can’t be changed.
//Variables should be named in a way that allows us to easily understand what’s inside them.



3. //Data types


//There are eight basic data types in JavaScript. 


3.1 //Number

//The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;


//Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

//We can get it as a result of division by zero:
alert( 1 / 0 ); // Infinity

//NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

alert( "not a number" / 2 ); // NaN, such division is erroneous
//NaN is sticky. Any further mathematical operation on NaN returns NaN:

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN


//So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).


//A BigInt value is created by appending n to the end of an integer:

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;



3.2 //String


//A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


//In JavaScript, there are 3 types of quotes.

//Double quotes: "Hello".
//Single quotes: 'Hello'.
//Backticks: `Hello`


//Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}


let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3


3.3 //Boolean (logical type)


//The boolean type has only two values: true and false.

//This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.


//Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")


3.4 //The “null” value


//The special null value does not belong to any of the types described above.

//It forms a separate type of its own which contains only the null value:


//It’s just a special value which represents “nothing”, “empty” or “value unknown”.


3.5 //The “undefined” value

//The special value undefined also stands apart. It makes a type of its own, just like null.

//The meaning of undefined is “value is not assigned”.


//If a variable is declared, but not assigned, then its value is undefined:

let age;

alert(age); // shows "undefined"


3.6 //Objects and Symbols

//The object type is special.

//All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.


//The symbol type is used to create unique identifiers for objects. 


3.7 //The typeof operator

`
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

`

//Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here

//There are 8 basic data types in JavaScript.

//Seven primitive data types:
//number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
//bigint for integer numbers of arbitrary length.
//string for strings. A string may have zero or more characters, there’s no separate single-character type.
//boolean for true/false.
//null for unknown values – a standalone type that has a single value null.
//undefined for unassigned values – a standalone type that has a single value undefined.
//symbol for unique identifiers.
//And one non-primitive data type:
//object for more complex data structures.
//The typeof operator allows us to see which type is stored in a variable.

//Usually used as typeof x, but typeof(x) is also possible.
//Returns a string with the name of the type, like "string".
//For null returns "object" – this is an error in the language, it’s not actually an object.





4. //Interaction: alert, prompt, confirm


4.1 //alert
//It shows a message and waits for the user to press “OK”.

//For example:

alert("Hello");


4.2 //prompt
//The function prompt accepts two arguments:

`
result = prompt(title, [default]);
`

//It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

`
title
The text to show the visitor.

default
An optional second parameter, the initial value for the input field.

`

let ageShow = prompt('How old are you?', 100);

alert(`You are ${ageShow} years old!`); // You are 100 years old!


4.3 //confirm

//The function confirm shows a modal window with a question and two buttons: OK and Cancel.

//The result is true if OK is pressed and false otherwise.


let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

//There are two limitations shared by all the methods above:

//The exact location of the modal window is determined by the browser. Usually, it’s in the center.
//The exact look of the window also depends on the browser. We can’t modify it.


`
let name = prompt("What is your name?", "");
alert(name);
`




5. //Type Conversions


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0



alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false



//the string with zero "0" is true

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)


//The three most widely used type conversions are to string, to number, and to boolean.

//String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

//Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

`
undefined	NaN

null	0

true / false	1 / 0

string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.
`

//Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).



`
Value	                      Becomes…

0, null, undefined, NaN, ""	   false

any other value	                true

`

