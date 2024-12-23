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


9. //Logical operators

//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). 

//Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.

9.1  //|| (OR)

//The “OR” operator is represented with two vertical line symbols:


//There are four possible logical combinations:

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}


//The OR || operator does the following:

//Evaluates operands from left to right.
//For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
//If all operands have been evaluated (i.e. all were false), returns the last operand.
//A value is returned in its original form, without the conversion.

//In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.


alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)


let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// If all variables were falsy, "Anonymous" would show up.


//Short-circuit evaluation.

//Another feature of OR || operator is the so-called “short-circuit” evaluation.

//It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

//The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

//In the example below, only the second message is printed:

true || alert("not printed");
false || alert("printed");
//In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

//Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.


9.2 // && (AND)

//The AND operator is represented with two ampersands &&:

//In classical programming, AND returns true if both operands are truthy and false otherwise:

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


//AND “&&” finds the first falsy value


//The AND && operator does the following:

//Evaluates operands from left to right.
//For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
//If all operands have been evaluated (i.e. all were truthy), returns the last operand.
//In other words, AND returns the first falsy value or the last value if none were found.

//The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.


// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


//We can also pass several values in a row. See how the first falsy one is returned:

alert( 1 && 2 && null && 3 ); // null

//When all values are truthy, the last value is returned:

alert( 1 && 2 && 3 ); // 3, the last one


//Precedence of AND && is higher than OR ||
//The precedence of AND && operator is higher than OR ||.

//So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).


//Don’t replace if with || or &&
//Sometimes, people use the AND && operator as a "shorter way to write if".

//For instance:

`
let x = 1;

(x > 0) && alert( 'Greater than zero!' );
`
//The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.

//So we basically have an analogue for:

`
let x = 1;

if (x > 0) alert( 'Greater than zero!' );
`


9.3 //! (NOT)

//The boolean NOT operator is represented with an exclamation sign !.

//The operator accepts a single argument and does the following:

1. //Converts the operand to boolean type: true/false.
2. //Returns the inverse value.


// For instance:

alert( !true ); // false
alert( !0 ); // true


//A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false


//That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

//There’s a little more verbose way to do the same thing – a built-in Boolean function:

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.


$Tasks

1. //What's the result of OR?

//What is the code below going to output?

alert( null || 2 || undefined );

//The answer is 2, that’s the first truthy value.

alert( null || 2 || undefined );


2. //What's the result of OR'ed alerts?

//What will the code below output?

alert( alert(1) || 2 || alert(3) );

//The answer: first 1, then 2.

alert( alert(1) || 2 || alert(3) );
//The call to alert does not return a value. Or, in other words, it returns undefined.

//The first OR || evaluates its left operand alert(1). That shows the first message with 1.
//The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
//The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
//There will be no 3, because the evaluation does not reach alert(3).


3. //What is the result of AND?

//What is this code going to show?

alert( 1 && null && 2 );

//The answer: null, because it’s the first falsy value from the list.

alert(1 && null && 2);


4.  //What is the result of AND'ed alerts?

//What will this code show?

alert( alert(1) && alert(2) );

//The answer: 1, and then undefined.

alert( alert(1) && alert(2) );
//The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

//Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.

5. //The result of OR AND OR

//What will the result be?

alert( null || 2 && 3 || 4 );

//The answer: 3.

alert( null || 2 && 3 || 4 );
//The precedence of AND && is higher than ||, so it executes first.

//The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4
//Now the result is the first truthy value: 3.

6. //Check the range between

//Write an if condition to check that age is between 14 and 90 inclusively.

//“Inclusively” means that age can reach the edges 14 or 90.


`
if (age >= 14 && age <= 90)
`

7. //Check the range outside

//Write an if condition to check that age is NOT between 14 and 90 inclusively.

//Create two variants: the first one using NOT !, the second one – without it.

`
if (!(age >= 14 && age <= 90))


if (age < 14 || age > 90)
`

8. //A question about "if"

//Which of these alerts are going to execute?

//What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );


//The answer: the first and the third will execute.



// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );


9. //Check the login

//Write the code which asks for a login with prompt.

//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

//The password is checked as follows:

//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled”


let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}


10. //Nullish coalescing operator '??'

//The nullish coalescing operator is written as two question marks ??.

//As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

//The result of a ?? b is:

//if a is defined, then a,
//if a isn’t defined, then b.
//In other words, ?? returns the first argument if it’s not null/undefined. //Otherwise, the second one.

//The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.


//The common use case for ?? is to provide a default value.

//For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:

`
let user;

alert(user ?? "Anonymous");
` // Anonymous (user is undefined)

//Here’s the example with user assigned to a name:

let user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)


//We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.

//Let’s say we have a user’s data in variables firstName, lastName or nickName. //All of them may be not defined, if the user decided not to fill in the corresponding values.

//We’d like to display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.

//Let’s use the ?? operator for that:

`
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
`

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

10.1 //Comparison with ||
//The OR || operator can be used in the same way as ??, as it was described in the previous chapter.

//For example, in the code above we could replace ?? with || and still get the same result:

`
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
`

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

//The important difference between them is that:

`
|| returns the first truthy value.
?? returns the first defined value.
`

//In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

//In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

//For example, consider this:

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

//The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
//so the result of || is the second argument, 100.
//The height ?? 100 checks height for being null/undefined, and it’s not,
//so the result is height “as is”, that is 0.
//In practice, the zero height is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.


10.2//Precedence
//The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.

//That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.

//So we may need to add parentheses in expressions like this:

`
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

`

//Otherwise, if we omit parentheses, then as * has the higher precedence than ??, it would execute first, leading to incorrect results.

// without parentheses
`
let area = height ?? 100 * width ?? 50
`;

// ...works this way (not what we want):
`
let area = height ?? (100 * width) ?? 50;
`

10.3 //Using ?? with && or ||
//Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

//The code below triggers a syntax error:

`
let x = 1 && 2 ?? 3;
` // Syntax error

//The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from || to ??.

//Use explicit parentheses to work around it:

`
let x = (1 && 2) ?? 3; // Works

alert(x); // 2
`

Summary

//The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

//It’s used to assign default values to variables:

// set height=100, if height is null or undefined
height = height ?? 100;
//The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

//It’s forbidden to use it with || or && without explicit parentheses.


11. //Loops: while and for

//We often need to repeat actions.

//For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

//Loops are a way to repeat the same code multiple times.

11.1 // The “while” loop
//The while loop has the following syntax:

while (condition) {
  // code
  // so-called "loop body"
}


//While the condition is truthy, the code from the loop body is executed.

//For instance, the loop below outputs i while i < 3:

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

//If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

//Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

//For instance, a shorter way to write while (i != 0) is while (i):

let j = 3;
while (j) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( j );
  j--;
}

//Curly braces are not required for a single-line body
//If the loop body has a single statement, we can omit the curly braces {…}:

let k = 3;
while (k) alert(k--);


11.2 //The “do…while” loop

//The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body
} while (condition);


//The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

//For example:

let l = 0;
do {
  alert( l );
  l++;
} while (l < 3);


//This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.


11.3 //The “for” loop

//The for loop is more complex, but it’s also the most commonly used loop.

//It looks like this:

for (begin; condition; step) {
  // ... loop body ...
}


//Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

//Let’s examine the for statement part-by-part:

		
//begin	let i = 0	Executes once upon entering the loop.
//condition	i < 3	Checked before every loop iteration. If false, the loop stops.
//body	alert(i)	Runs again and again while the condition is truthy.
//step	i++	Executes after the body on each iteration.


//The general loop algorithm works like this:

//Run begin
//→ (if condition → run body and run step)
//→ (if condition → run body and run step)
//→ (if condition → run body and run step)
//→ ...

//That is, begin executes once, and then it iterates: after each condition test, body and step are executed.


//Here’s exactly what happens in our case:

// for (let i = 0; i < 3; i++) alert(i)

// run begin
`let i = 0`
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3


//Inline variable declaration
//Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.

`for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no such variable`

//Instead of defining a variable, we could use an existing one:

`let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop`


//Skipping parts

//Any part of for can be skipped.

//For example, we can omit begin if we don’t need to do anything at the loop start.

//Like here:

`let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}`

//We can also remove the step part:

`let i = 0;

for (; i < 3;) {
  alert( i++ );
}`

//This makes the loop identical to while (i < 3).

//We can actually remove everything, creating an infinite loop:

`for (;;) {
  // repeats without limits
}`
//Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.


11.4 //Breaking the loop

//Normally, a loop exits when its condition becomes falsy.

//But we can force the exit at any time using the special break directive.

//For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );


//The break directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

//The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.


11.5  //Continue to the next iteration

//The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

//We can use it if we’re done with the current iteration and would like to move on to the next one.

//The loop below uses continue to output only odd values:

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

//For even values of i, the continue directive stops executing the body and passes control to the next iteration of for (with the next number). So the alert is only called for odd values.


//The continue directive helps decrease nesting

//A loop that shows odd values could look like this:

for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}

//From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an if block instead of using continue.

//But as a side effect, this created one more level of nesting (the alert call inside the curly braces). If the code inside of if is longer than a few lines, that may decrease the overall readability.

`No break/continue to the right side of ‘?’
Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.`


11.6 //Labels for break/continue

//Sometimes we need to break out from multiple nested loops at once.

//We need a way to stop the process if the user cancels the input.

//The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

//A label is an identifier with a colon before a loop:

`labelName: for (...) {
  ...
}`
//The break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');


//In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

//So the control goes straight from (*) to alert('Done!').

//We can also move the label onto a separate line:

outer:
`for (let i = 0; i < 3; i++) { ... }`

//The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

`Labels do not allow to “jump” anywhere
Labels do not allow us to jump into an arbitrary place in the code.

For example, it is impossible to do this:

break label; // jump to the label below (doesn't work)

label: for (...)
A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

label: {
  // ...
  break label; // works
  // ...
}
…Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples above.

A continue is only possible from inside a loop.`


Summary

//We covered 3 types of loops:

1. //while – The condition is checked before each iteration.
2. //do..while – The condition is checked after each iteration.
3. //for (;;) – The condition is checked before each iteration, additional settings available.

4.//To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

5.//If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

6.//break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.


Tasks(7)

1. //Last loop value

//What is the last value alerted by this code? Why?

//The answer: 1.

`let i = 3;

while (i) {
  alert( i-- );
}`

2. //Which values does the while loop show?

//For every loop iteration, write down which value it outputs and then compare it with the solution.

//Both loops alert the same values, or not?


//From 1 to 4

`let i = 0;
while (++i < 5) alert( i );`


//From 1 to 5

`let i = 0;
while (i++ < 5) alert( i );`

//returns the old value


3. //Which values get shown by the "for" loop?

//For each loop write down which values it is going to show. Then compare with the answer.

//Both loops alert same values or not?

//The answer: from 0 to 4 in both cases.

for (let i = 0; i < 5; ++i) alert( i );   //The prefix form:

for (let i = 0; i < 5; i++) alert( i );   //The postfix form:


4. //Output even numbers in the loop

//Use the for loop to output even numbers from 2 to 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

//We use the “modulo” operator % to get the remainder and check for the evenness here.


5. //Replace "for" with "while"

//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let r = 0;
while (r < 3) {
  alert( `number ${r}!` );
  r++;
}


6. //Repeat until the input is correct

//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

//The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

//Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.


let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//The loop do..while repeats while both checks are truthy:


7. //Output prime numbers

//An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

//In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

//For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

//Write the code which outputs prime numbers in the interval from 2 to n.

//For n = 10 the result will be 2,3,5,7.

P.S //The code should work for any n, not be hard-tuned for any fixed value.


`let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}`


12. //The "switch" statement
//A switch statement can replace multiple if checks.

//It gives a more descriptive way to compare a value with multiple variants.


12.1 //The syntax


//The switch has one or more case blocks and an optional default.

//It looks like this:

`switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}`

//The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
//If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
//If no case is matched then the default code is executed (if it exists).


`let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
`
//Here the switch starts to compare a from the first case variant that is 3. The match fails.

//Then 4. That’s a match, so the execution starts from case 4 until the nearest break.

//If there is no break then the execution continues with the next case without any checks.


12.2 //Grouping of “case”

//Several variants of case which share the same code can be grouped.


`let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}`

//Now both 3 and 5 show the same message.

//The ability to “group” cases is a side effect of how switch/case works without break. Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.


12.3 // Type matters

//Let’s emphasize that the equality check is always strict. The values must be of the same type to match.



let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}


//For 0, 1, the first alert runs.
//For 2 the second alert runs.
//But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.


Tasks  


1. //Rewrite the "switch" into an "if"

//Write the code using if..else which would correspond to the following switch:


switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

//But the switch construct is still cleaner and more descriptive.


2. //Rewrite "if" into "switch"

//Rewrite the code below using a single switch statement:


`let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}`


`let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}`


13. //Functions

//Quite often we need to perform a similar action in many places of the script.

//For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

//We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

13.1  //Function Declaration

//To create a function we can use a function declaration.


function showMessage() {
  alert( 'Hello everyone!' );
}

// The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated) and finally the code of the function, also named “the function body”, between curly braces.

function name(parameter1, parameter2, ... parameterN) {
  // body
 }


 function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();


//The call showMessage() executes the code of the function. Here we will see the message two times.

//This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.

//If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.

13.2 //Local variables

//A variable declared inside a function is only visible inside that function.

//For example:

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function


13.3 // Outer variables

//A function can access an outer variable as well, for example:

`let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John`

//The function has full access to the outer variable. It can modify it as well.

//For instance:

`let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function`

//The outer variable is only used if there’s no local one.


//If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

`let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable`

//Global variables

//Variables declared outside of any function, such as the outer userName in the code above, are called global.

//Global variables are visible from any function (unless shadowed by locals).


13.4 // Parameters

//We can pass arbitrary data to functions using parameters.

//In the example below, the function has two parameters: from and text.

function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)


//When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

//Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:

function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann


//When a value is passed as a function parameter, it’s also called an argument.

//In other words, to put these terms straight:

//A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
//An argument is the value that is passed to the function when it is called (it’s a call time term).
//We declare functions listing their parameters, then call them passing arguments.

//In the example above, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"".


13.5  //Returning a value

//The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

//There may be many occurrences of return in a single function. For instance:

`function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}`

//It is possible to use return without a value. That causes the function to exit immediately.


Summary

1.//A function declaration looks like this:

function name(parameters, delimited, by, comma) {
  /* code */
}

2.//Values passed to a function as parameters are copied to its local variables.
3. //A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
4. //A function can return a value. If it doesn’t, then its result is undefined.
5. //To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.
6.//It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

1. //Function naming:

1. //A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
2. //A function is an action, so function names are usually verbal.
3. //There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.


//Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.

Tasks

1. //Is "else" required?

//The following function returns true if the parameter age is greater than 18.

//Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

//Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

//Is there any difference in the behavior of these two variants?

solution

//No difference!

//In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

2. //Rewrite the function using '?' or '||'

//The following function returns true if the parameter age is greater than 18.

//Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}


//Rewrite it, to perform the same, but without if, in a single line.

//Make two variants of checkAge:

//Using a question mark operator ?
//Using OR ||
solution
//Using a question mark operator '?':

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

//Using OR || (the shortest variant):

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}


//*Note that the parentheses around age > 18 are not required here. They exist for better readability.


3. //Function min(a, b)

//Write a function min(a,b) which returns the least of two numbers a and b.

//For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

solution

//A solution using if:

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//A solution with a question mark operator '?':

function min(a, b) {
  return a < b ? a : b;
}

//P.S. In the case of an equality a == b it does not matter what to return.

4. // Function pow(x,n)

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

`pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1`

//Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

solution


function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

`let x = prompt("x?", '');
let n = prompt("n?", '');`

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}


14. // Function expressions

let sayHi = function() {
  alert( "Hello" );
};

//Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.

`Why is there a semicolon at the end?
You might wonder, why do Function Expressions have a semicolon ; at the end, but Function Declarations do not:

function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.`


14.1 //Callback functions


function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


// The arguments showOk and showCancel of ask are called callback functions or just callbacks.


`A function is a value representing an “action”
Regular values like strings or numbers represent the data.

A function can be perceived as an action.

We can pass it between variables and run when we want.`


14.2  //Function Expression vs Function Declaration

//Let’s formulate the key differences between Function Declarations and Expressions.

//First, the syntax: how to differentiate between them in the code.


1. //Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
  return a + b;
}

2. //Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum = function(a, b) {
  return a + b;
};

// The more subtle difference is when a function is created by the JavaScript engine.

//A Function Expression is created when the execution reaches it and is usable only from that moment.

1.//Once the execution flow passes to the right side of the assignment let sum = function…  – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

2.//Function Declarations are different.

//A Function Declaration can be called earlier than it is defined.

//For example, a global Function Declaration is visible in the whole script, no matter where it is.

//That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

//And after all Function Declarations are processed, the code is executed. So it has access to these functions.

//For example, this works:

sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

3. //The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

//…If it were a Function Expression, then it wouldn’t work:

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};

//Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

//Another special feature of Function Declarations is their block scope.

//In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

// That’s because a Function Declaration is only visible inside the code block in which it resides.

//The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

//This code works as intended:

`let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now`

//Or we could simplify it even further using a question mark operator ?:

`let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now`


`When to choose Function Declaration versus Function Expression?
As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.`

Summary

1.//Functions are values. They can be assigned, copied or declared in any place of the code.

2.//If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.

3.//If the function is created as a part of an expression, it’s called a “Function Expression”. 

4.//Function Declarations are processed before the code block is executed. They are visible everywhere in the block.

5.//Function Expressions are created when the execution flow reaches them.


//In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

//So we should use a Function Expression only when a Function Declaration is not fit for the task. 


15.  //Arrow functions, the basics

//There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

//It’s called “arrow functions”, because it looks like this:

`let func = (arg1, arg2, ..., argN) => expression;`


let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3


//If there are no arguments, parentheses are empty, but they must be present:

let sayHi = () => alert("Hello!");

sayHi();

//Arrow functions can be used in the same way as Function Expressions.

//For instance, to dynamically create a function:

`let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();`

//Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as the eyes get used to the structure.

//They are very convenient for simple one-line actions, when we’re just too lazy to write many words.

15.1 //Multiline arrow functions

//The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them.

//Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

//Like this:

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3


Summary

//Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

1. //Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.

2. //With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.


Tasks

//Rewrite with arrow functions
//Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);


solution


function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);




16. // JavaScript specials

//This chapter briefly recaps the features of JavaScript that we’ve learned by now, paying special attention to subtle moments.


17. // Debugging in the browser

//Before writing more complex code, let’s talk about debugging.

//Debugging is the process of finding and fixing errors within a script. All modern browsers and most other environments support debugging tools – a special UI in developer tools that makes debugging much easier. It also allows to trace the code step by step to see what exactly is going on.

//We’ll be using Chrome here, because it has enough features, most other browsers have a similar process.


Summary

//As we can see, there are three main ways to pause a script:

1.//A breakpoint.
2.//The debugger statements.
3.//An error (if dev tools are open and the button  is “on”).

//When paused, we can debug: examine variables and trace the code to see where the execution goes wrong.

//There are many more options in developer tools than covered here. The full manual is at https://developers.google.com/web/tools/chrome-devtools.


18.  //Coding Style

//Our code must be as clean and easy to read as possible.

//That is actually the art of programming – to take a complex task and code it in a way that is both correct and human-readable. A good code style greatly assists in that.

//😃 The best variant:
if (n < 0) {
  alert(`Power ${n} is not supported`);
}

//For a very brief code, one line is allowed, e.g. if (cond) return null. But a code block (the last variant) is usually more readable.


19. // Comments

//As we know from the chapter Code structure, comments can be single-line: starting with // and multiline: /* ... */.

//We normally use them to describe how and why the code works.

//At first sight, commenting might be obvious, but novices in programming often use them wrongly.

//Good comments

//So, explanatory comments are usually bad. Which comments are good?

//Describe the architecture
//Provide a high-level overview of components, how they interact, what’s the control flow in various situations… In short – the bird’s eye view of the code. //There’s a special language UML to build high-level architecture diagrams explaining the code. Definitely worth studying.
//Document function parameters and usage
//There’s a special syntax JSDoc to document a function: usage, parameters, returned value.
//For instance:

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  
}

//Such comments allow us to understand the purpose of the function and use it the right way without looking in its code.

Summary

//An important sign of a good developer is comments: their presence and even their absence.

//Good comments allow us to maintain the code well, come back to it after a delay and use it more effectively.

//Comment this:

//Overall architecture, high-level view.
//Function usage.
//Important solutions, especially when not immediately obvious.
//
//That tell “how code works” and “what it does”.
//Put them in only if it’s impossible to make the code so simple and self-descriptive that it doesn’t require them.
//Comments are also used for auto-documenting tools like JSDoc3: they read them and generate HTML-docs (or docs in another format).



20. // Ninja code

// Learning without thought is labor lost; thought without learning is perilous.

20.1 //Brevity is the soul of wit


//Make the code as short as possible. Show how smart you are.

//Let subtle language features guide you.

//For instance, take a look at this ternary operator '?':

// taken from a well-known javascript library
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

//Cool, right? If you write like that, a developer who comes across this line and tries to understand what is the value of i is going to have a merry time. Then come to you, seeking for an answer.

//Tell them that shorter is always better. Initiate them into the paths of ninja.

20.2 // One-letter variables

//The Dao hides in wordlessness. Only the Dao is well begun and well completed.

//Laozi (Tao Te Ching)
//Another way to code shorter is to use single-letter variable names everywhere. //Like a, b or c.

//A short variable disappears in the code like a real ninja in the forest. No one will be able to find it using “search” of the editor. And even if someone does, they won’t be able to “decipher” what the name a or b means.

//…But there’s an exception. A real ninja will never use i as the counter in a "for" loop. Anywhere, but not here. Look around, there are many more exotic letters. For instance, x or y.

//An exotic variable as a loop counter is especially cool if the loop body takes 1-2 pages (make it longer if you can). Then if someone looks deep inside the loop, they won’t be able to quickly figure out that the variable named x is the loop counter.


20.3 // Use abbreviations

//If the team rules forbid the use of one-letter and vague names – shorten them, make abbreviations.

//Like this:

`list → lst.
userAgent → ua.
browser → brsr.
…etc`

//Only the one with truly good intuition will be able to understand such names. Try to shorten everything. Only a worthy person should be able to uphold the development of your code.


20.4 // Soar high. Be abstract.

//While choosing a name try to use the most abstract word. 
`Like obj, data, value, item, elem and so on.`

//The ideal name for a variable is data. Use it everywhere you can. Indeed, every variable holds data, right?

//…But what to do if data is already taken? Try value, it’s also universal. After all, a variable eventually gets a value.


20.5 //Name a variable by its type: 
`str, num…`

//Give them a try. A young initiate may wonder – are such names really useful for a ninja? Indeed, they are!

//Sure, the variable name still means something. It says what’s inside the variable: a string, a number or something else. But when an outsider tries to understand the code, they’ll be surprised to see that there’s actually no information at all! And will ultimately fail to alter your well-thought code.

//The value type is easy to find out by debugging. But what’s the meaning of the variable? Which string/number does it store?

//There’s just no way to figure out without a good meditation!

//…But what if there are no more such names? 
`Just add a number: data1, item2, elem5…`

20.6 // Smart synonyms

//Using similar names for same things makes life more interesting and shows your creativity to the public.

//For instance, consider function prefixes. If a function shows a message on the screen – start it with display…, like displayMessage. And then if another function shows on the screen something else, like a user name, start it with show… (like showName).

20.7 // Reuse names

//Add a new variable only when absolutely necessary.

//Instead, reuse existing names. Just write new values into them.

//In a function try to use only variables passed as parameters.

20.8 // Underscores for fun

// Put underscores _ and __ before variable names. Like _name or __value. It would be great if only you knew their meaning. Or, better, add them just for fun, without particular meaning at all. Or different meanings in different places.

//You kill two rabbits with one shot. First, the code becomes longer and less readable, and the second, a fellow developer may spend a long time trying to figure out what the underscores mean.

//A smart ninja puts underscores at one spot of code and evades them at other places. That makes the code even more fragile and increases the probability of future errors.

20.9 // Overlap outer variables

//Use same names for variables inside and outside a function. As simple. No efforts to invent new names.

`let user = authenticateUser();

function render() {
  let user = anotherValue();
  ...
  ...many lines...
  ...
  ... // <-- a programmer wants to work with user here and...
  ...
}
`
//A programmer who jumps inside the render will probably fail to notice that there’s a local user shadowing the outer one.

//Then they’ll try to work with user assuming that it’s the external variable, the result of authenticateUser()… The trap is sprung! Hello, debugger…


20.10 // Side-effects everywhere!

//There are functions that look like they don’t change anything. Like isReady(), checkPermission(), findTags()… They are assumed to carry out calculations, find and return the data, without changing anything outside of them. In other words, without “side-effects”.

//A really beautiful trick is to add a “useful” action to them, besides the main task.

//An expression of dazed surprise on the face of your colleague when they see a function named is.., check.. or find... changing something – will definitely broaden your boundaries of reason.

//Another way to surprise is to return a non-standard result.

//Show your original thinking! Let the call of checkPermission return not true/false, but a complex object with the results of the check.

//Those developers who try to write if (checkPermission(..)), will wonder why it doesn’t work. Tell them: “Read the docs!”. And give this article.


20.11 // Powerful functions!

// Don’t limit the function by what’s written in its name. Be broader.

//For instance, a function validateEmail(email) could (besides checking the email for correctness) show an error message and ask to re-enter the email.

//Additional actions should not be obvious from the function name. A true ninja coder will make them not obvious from the code as well.

//Joining several actions into one protects your code from reuse.

//Imagine, another developer wants only to check the email, and not output any message. Your function validateEmail(email) that does both will not suit them. //So they won’t break your meditation by asking anything about it.


21. // Automated testing with Mocha

// Automated testing will be used in further tasks, and it’s also widely used in real projects.

21.1 //Why do we need tests?

//When we write a function, we can usually imagine what it should do: which parameters give which results.

//During development, we can check the function by running it and comparing the outcome with the expected one. For instance, we can do it in the console.

//If something is wrong – then we fix the code, run again, check the result – and so on till it works.

//But such manual “re-runs” are imperfect.

21.2 // Behavior Driven Development (BDD)
//Let’s start with a technique named Behavior Driven Development or, in short, BDD.

//BDD is three things in one: tests AND documentation AND examples.

21.3 // Development of “pow”: the spec

//Let’s say we want to make a function pow(x, n) that raises x to an integer power n. We assume that n≥0.

//That task is just an example: there’s the ** operator in JavaScript that can do that, but here we concentrate on the development flow that can be applied to more complex tasks as well.

//Before creating the code of pow, we can imagine what the function should do and describe it.

//Such description is called a specification or, in short, a spec, and contains descriptions of use cases together with tests for them, like this:

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});


21.4 // A spec has three main building blocks that you can see above:

`describe("title", function() { ... })`
//What functionality we’re describing? In our case we’re describing the function pow. Used to group “workers” – the it blocks.

`it("use case description", function() { ... })`
//In the title of it we in a human-readable way describe the particular use case, and the second argument is a function that tests it.

`assert.equal(value1, value2)`
//The code inside it block, if the implementation is correct, should execute without errors.

//Functions assert.* are used to check whether pow works as expected. Right here we’re using one of them – assert.equal, it compares arguments and yields an error if they are not equal. Here it checks that the result of pow(2, 3) equals 8. There are other types of comparisons and checks, that we’ll add later.


21.5 //The development flow
//The flow of development usually looks like this:

1. //An initial spec is written, with tests for the most basic functionality.
2. //An initial implementation is created.
3. //To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. While the functionality is not complete, errors are displayed. We make corrections until everything works.
4. //Now we have a working initial implementation with tests.
5. //We add more use cases to the spec, probably not yet supported by the implementations. Tests start to fail.
6. //Go to 3, update the implementation till tests give no errors.
7. //Repeat steps 3-6 till the functionality is ready.


//So, the development is iterative. We write the spec, implement it, make sure tests pass, then write more tests, make sure they work etc. At the end we have both a working implementation and tests for it.

21.6 //The spec in action
//Here in the tutorial we’ll be using the following JavaScript libraries for tests:

1. //Mocha – the core framework: it provides common testing functions including describe and it and the main function that runs tests.
2. //Chai – the library with many assertions. It allows to use a lot of different assertions, for now we need only assert.equal.
3. //Sinon – a library to spy over functions, emulate built-in functions and more, we’ll need it much later.

//These libraries are suitable for both in-browser and server-side testing. Here we’ll consider the browser variant.

//The full HTML page with these frameworks and pow spec:

`<!DOCTYPE html>
<html>
<head>
  <!-- add mocha css, to show results -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- add mocha framework code -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    mocha.setup('bdd'); // minimal setup
  </script>
  <!-- add chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
    // chai has a lot of stuff, let's make assert global
    let assert = chai.assert;
  </script>
</head>

<body>

  <script>
    function pow(x, n) {
      /* function code is to be written, empty now */
    }
  </script>

  <!-- the script with tests (describe, it...) -->
  <script src="test.js"></script>

  <!-- the element with id="mocha" will contain test results -->
  <div id="mocha"></div>

  <!-- run tests! -->
  <script>
    mocha.run();
  </script>
</body>

</html>`

21.7 // Improving the spec

//What we’ve done is definitely a cheat. The function does not work: an attempt to calculate pow(3,4) would give an incorrect result, but tests pass.

//…But the situation is quite typical, it happens in practice. Tests pass, but the function works wrong. Our spec is imperfect. We need to add more use cases to it.

//Let’s add one more test to check that pow(3, 4) = 81.

//We can select one of two ways to organize the test here:

//The first variant – add one more assert into the same it:

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });

});

//The second – make two tests:

describe("pow", function() {

  it("2 raised to power 3 is 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3 raised to power 4 is 81", function() {
    assert.equal(pow(3, 4), 81);
  });

});

21.8 // Improving the implementation

//Let’s write something more real for tests to pass:

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

//To be sure that the function works well, let’s test it for more values. Instead of writing it blocks manually, we can generate them in for:

describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});


21.9 // Nested describe
//We’re going to add even more tests. But before that let’s note that the helper function makeTest and for should be grouped together. We won’t need makeTest in other tests, it’s needed only in for: their common task is to check how pow raises into the given power.

//Grouping is done with a nested describe:

describe("pow", function() {

  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... more tests to follow here, both describe and it can be added
});



`before/after and beforeEach/afterEach
We can setup before/after functions that execute before/after running tests, and also beforeEach/afterEach functions that execute before/after every it.

For instance:

describe("test", function() {

  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});
The running sequence will be:

Testing started – before all tests (before)
Before a test – enter a test (beforeEach)
1
After a test – exit a test   (afterEach)
Before a test – enter a test (beforeEach)
2
After a test – exit a test   (afterEach)
Testing finished – after all tests (after)
Open the example in the sandbox.
Usually, beforeEach/afterEach and before/after are used to perform initialization, zero out counters or do something else between the tests (or test groups).`


`Other assertions
Please note the assertion assert.isNaN: it checks for NaN.

There are other assertions in Chai as well, for instance:

assert.equal(value1, value2) – checks the equality value1 == value2.
assert.strictEqual(value1, value2) – checks the strict equality value1 === value2.
assert.notEqual, assert.notStrictEqual – inverse checks to the ones above.
assert.isTrue(value) – checks that value === true
assert.isFalse(value) – checks that value === false
…the full list is in the docs`

Summary

//In BDD, the spec goes first, followed by implementation. At the end we have both the spec and the code.

//The spec can be used in three ways:

1. //As Tests – they guarantee that the code works correctly.
2. //As Docs – the titles of describe and it tell what the function does.
3. //As Examples – the tests are actually working examples showing how a function can be used.

//With the spec, we can safely improve, change, even rewrite the function from scratch and make sure it still works right.

//That’s especially important in large projects when a function is used in many places. When we change such a function, there’s just no way to manually check if every place that uses it still works right.

//Without tests, people have two ways:

//To perform the change, no matter what. And then our users meet bugs, as we probably fail to check something manually.
//Or, if the punishment for errors is harsh, as there are no tests, people become afraid to modify such functions, and then the code becomes outdated, no one wants to get into it. Not good for development.


Tasks

//What's wrong in the test?

//What’s wrong in the test of pow below?

it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});


solution 

describe("Raises x to power n", function() {
  it("5 in the power of 1 equals 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 in the power of 2 equals 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equals 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});

22. // Polyfills and transpilers

//On the other hand, how to make our modern code work on older engines that don’t understand recent features yet?

//There are two tools for that:

1. //Transpilers.
2. //Polyfills.


22.1 //Transpilers

//A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.

//E.g. JavaScript before year 2020 didn’t have the “nullish coalescing operator” ??. So, if a visitor uses an outdated browser, it may fail to understand the code like height = height ?? 100.

//A transpiler would analyze our code and rewrite height ?? 100 into (height !== undefined && height !== null) ? height : 100.

// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;

//Now the rewritten code is suitable for older JavaScript engines.


22.2 //Polyfills

//New language features may include not only syntax constructs and operators, but also built-in functions.

//For example, Math.trunc(n) is a function that “cuts off” the decimal part of a number, e.g Math.trunc(1.23) returns 1.

//In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail.

//As we’re talking about new functions, not syntax changes, there’s no need to transpile anything here. We just need to declare the missing function.

//A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.

//For this particular case, the polyfill for Math.trunc is a script that implements it, like this:

if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}

//JavaScript is a highly dynamic language. Scripts may add/modify any function, even built-in ones.

//* core js that supports a lot, allows to include only needed features.

Summary

//In this chapter we’d like to motivate you to study modern and even “bleeding-edge” language features, even if they aren’t yet well-supported by JavaScript engines.

//Just don’t forget to use a transpiler (if using modern syntax or operators) and polyfills (to add functions that may be missing). They’ll ensure that the code works.

//For example, later when you’re familiar with JavaScript, you can setup a code build system based on webpack with the babel-loader plugin.

//Good resources that show the current state of support for various features:

//https://compat-table.github.io/compat-table/es6/ – for pure JavaScript.
//https://caniuse.com/ – for browser-related functions.


23. //Objects: the basics

23.1  //Literals and properties

//Usually, the figure brackets {...} are used. That declaration is called an object literal.

//We can immediately put some properties into {...} as “key: value” pairs:

let user1 = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// We can also use multiword property names, but then they must be quoted:

let user2 = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};


23.2 // Square brackets