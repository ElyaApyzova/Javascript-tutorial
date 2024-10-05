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



6.  // Basic operators, maths


6.1 //Terms: “unary”, “binary”, “operand”

//An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.


//An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied


//An operator is binary if it has two operands. The same minus exists in binary form as well:

`
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

`

6.2 // Maths
//The following math operations are supported:

`
Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.

`


6.3//Remainder %
//The remainder operator %, despite its appearance, is not related to percents.

//The result of a % b is the remainder of the integer division of a by b.

//For instance:

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4


6.4 //Exponentiation **

//The exponentiation operator a ** b raises a to the power of b.

//For instance:

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16


6.5 //String concatenation with binary +


alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"
//operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.


alert('1' + 2 + 2); // "122" and not "14"
//the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

//The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers


6.6 // Numeric conversion, unary +

//The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings


//If we want to treat them as numbers, we need to convert and then sum them:

let apps = "2";
let orans = "3";

// both values converted to numbers before the binary plus
alert( +apps + +orans ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

//unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.



6.7//Operator precedence

//There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

//Here’s an extract from the precedence table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones):


`
Precedence	                   Name	                              Sign

14	                           unary plus	                       +
14	                           unary negation	                   -
13	                           exponentiation	                   **
12	                           multiplication	                   *
12	                           division	                           /
11	                           addition	                           +
11	                           subtraction	                       -

2	                           assignment	                       =

`

//As we can see, the “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.


6.8 //Assignment


//Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

//when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

let d = 2 * 2 + 1;

alert( d ); // 5


//Assignment = returns a value

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

//In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.
//Although, please don’t write the code like that. Such tricks definitely don’t make code clearer or readable.


//Chaining assignments
//Another interesting feature is the ability to chain assignments:

`
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
`
//Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

//Once again, for the purposes of readability it’s better to split such code into few lines:

c = 2 + 2;
b = c;
a = c;

//Modify-in-place
//We often need to apply an operator to a variable and store the new result in that same variable.

//For example:

`
let n = 2;
n = n + 5;
n = n * 2;
//This notation can be shortened using the operators += and *=:

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14
`
//Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.


//Such operators have the same precedence as a normal assignment, so they run after most other calculations:

`
let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16

`

6.9 //Increment/decrement

//Increment ++ increases a variable by 1:

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3


//Decrement -- decreases a variable by 1:

let counter2 = 2;
counter2--;        // works the same as counter = counter - 1, but is shorter
alert( counter2 ); // 1


//Important:
//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.


//The operators ++ and -- can be placed either before or after a variable.

//When the operator goes after the variable, it is in “postfix form”: counter++.
//The “prefix form” is when the operator goes before the variable: ++counter.
//Both of these statements do the same thing: increase counter by 1.

//Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

//Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

//To see the difference, here’s an example:

`
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2
`

//Now, let’s use the postfix form:

`
let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1
`

//In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.


//To summarize:

//If the result of increment/decrement is not used, there is no difference in which form to use:

`
let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same
`
//If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

`
let counter = 0;
alert( ++counter ); // 1

`
//If we’d like to increment a value but use its previous value, we need the postfix form:

`
let counter = 0;
alert( counter++ ); // 0
`


//Increment/decrement among other operators
//The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

//For instance:

`
let counter = 1;
alert( 2 * ++counter ); // 4
`
//Compare with:

`
let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value
`
//Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.

//While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.

//We advise a style of “one line – one action”:

`
let counter = 1;
alert( 2 * counter );
counter++;
`

6.10 //


//Bitwise operators
//Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

//These operators are not JavaScript-specific. They are supported in most programming languages.

//The list of operators:

`
AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
`
//These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful.

6.11 //Comma

// For example:

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    //...
   }
   //Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.




   //Tasks

//What are the final values of all variables a, b, c and d after the code below?

`
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
`


//The answer is:

`
a = 2
b = 2
c = 2
d = 1
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once
`

//Assignment result

//What are the values of a and x after the code below?

`
let a = 2;

let x = 1 + (a *= 2);
`


//The answer is:

`
a = 4 (multiplied by 2)
x = 5 (calculated as 1 + 4)
`

//Type conversions

//What are results of these expressions?


`
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

`

//Fix the addition

//Here’s a code that asks the user for two numbers and shows their sum.

//It works incorrectly. The output in the example below is 12 (for default prompt values).

//Why? Fix it. The result should be 3.

`
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
`

//What we should do is to convert strings to numbers before +. For example, using Number() or prepending them with +.

//For example, right before prompt:

`
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

`
//Or in the alert:

`
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
`
//Using both unary and binary + in the latest code. Looks funny, doesn’t it?




7. //Comparisons

//Greater/less than: a > b, a < b.
//Greater/less than or equals: a >= b, a <= b.


//Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.

//Not equals: In JavaScript it’s written as a != b.


7.1//Boolean is the result
//All comparison operators return a boolean value:

//true – means “yes”, “correct” or “the truth”.
//false – means “no”, “wrong” or “not the truth”.


//For example:

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)
//A comparison result can be assigned to a variable, just like any value:

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true


7.2//String comparison
//To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

//In other words, strings are compared letter-by-letter.

//For example:

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true


//The algorithm to compare two strings is simple:

//Compare the first character of both strings.
//If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
//Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
//Repeat until the end of either string.
//If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
//In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

//The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

//G is the same as G.
//l is the same as l.
//o is greater than e. Stop here. The first string is greater.


//A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode).


7.3 //Comparison of different types
//When comparing values of different types, JavaScript converts the values to numbers.

//For example:

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

//For boolean values, true becomes 1 and false becomes 0.

//For example:

alert( true == 1 ); // true
alert( false == 0 ); // true


//A funny consequence
//It is possible that at the same time:

//Two values are equal.
//One of them is true as a boolean and the other one is false as a boolean.
//For example:

`
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
`
//From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.


7.4 //Strict equality
//A regular equality check == has a problem. It cannot differentiate 0 from false:

alert( 0 == false ); // true
//The same thing happens with an empty string:

alert( '' == false ); // true
//This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

//What to do if we’d like to differentiate 0 from false?



//A strict equality operator === checks the equality without type conversion.

//In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

//Let’s try it:

alert( 0 === false ); // false, because the types are different
//There is also a “strict non-equality” operator !== analogous to !=.

//The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.



7.5 //Comparison with null and undefined

alert( null === undefined ); // false

alert( null == undefined ); // true


//Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true


//An incomparable undefined
//The value undefined shouldn’t be compared to other values:

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)


//Avoid problems


//Treat any comparison with undefined/null except the strict equality === with exceptional care.

//Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.


`
Summary

Comparison operators return a boolean value.

Strings are compared letter-by-letter in the “dictionary” order.

When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).

The values null and undefined equal == each other and do not equal any other value.

Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
`

//Tasks


//Comparisons

//What will be the result for these expressions?


`
5 > 4 → true

"apple" > "pineapple" → false

"2" > "12" → true

undefined == null → true

undefined === null → false

null == "\n0\n" → false

null === +"\n0\n" → false

`


8. // Conditional branching: if, '?'

//Sometimes, we need to perform different actions based on different conditions.

//To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.


8.1//The “if” statement

//The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.


//The “else” clause
//The if statement may contain an optional else block. It executes when the condition is falsy.

//For example:

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}



//Several conditions: “else if”

//Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

//For example:

`
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

`


//In the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last alert.

//There can be more else if blocks. The final else is optional.



8.2 //Conditional operator ‘?’

//Sometimes, we need to assign a variable depending on a condition.

//The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

//The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

//The syntax is:

`
let result = condition ? value1 : value2;
`

//The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

//For example:

let accessAllowed = (age > 18) ? true : false;


//Please note:
//In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

// the same

`
let accessAllowed = age > 18;
`

8.3 //Multiple ‘?’


`
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
`

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}


8.4 // Non-traditional use of ‘?’


//It’s not recommended to use the question mark operator in this way.

//The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable.

//Here is the same code using if for comparison:

let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}


//Tasks

//if (a string with zero)

//Will alert be shown?

if ("0") {
  alert( 'Hello' );
}

//Yes, it will.

//Any string except an empty one (and "0" is not empty) becomes true in the logical context.


2. //The name of JavaScript

//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

`
<!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';

    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }
  </script>


</body>

</html>
`

3. //Show the sign

//Using if..else, write the code which gets a number via prompt and then shows in alert:

//1,if the value is greater than zero,
//-1,if less than zero,
//0,if equals zero.

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}


4. //Rewrite 'if' into '?'

//Rewrite this if using the conditional operator '?':

`
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
`

`
let result = (a + b < 4) ? 'Below' : 'Over';
`


5. //Rewrite 'if..else' into '?'

//Rewrite if..else using multiple ternary operators '?'.

//For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}



`
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

`