# presentation2
# TABLE OF CONTENTS
1. scope
2. hoisting
3. recursion
4. closure

# What is scope
The scope is the current context of execution in which values and expressions
are "visible" or can be referenced. If a variable or expression is not in the current
scope, it will not be available for use. Scopes can also be layered in a hierarchy,
so that child scopes have access to parent scopes, but not vice versa. Types of scopes:
1. Global scope: The default scope for all code running in script mode.
2. Function scope: The scope created with a function.
3. Block scope: This scope restricts the variable that is declared
inside a specific block, from access by the outside of the block.

# What is hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

ex:
1. | a = 2
2. | let a
3. | console.log( a )

# hoisting - variable (VAR)
There’s a temptation to think that all of the code you see in a JavaScript program is interpreted line-by-line, top-down in order, as the program
execute. While that is essentially true, there’s one part of that as‐ assumption that can lead to incorrect thinking about your program.

ex:
1. | a = 2
2. | var a
3. | console.log( a )

# hoisting - function declaration 
There’s a temptation to think that all of the code you see in a JavaScript program is interpreted line-by-line, top-down in order, as the program
execute. While that is essentially true, there’s one part of that as‐ assumption that can lead to incorrect thinking about your program.

ex:
1. | foo()
1. | function foo() {
1. | console.log ( a )
1. | var a = 2
1. | }

The function foo’s declaration (which in this case includes the implied value of it as an
actual function) is hoisted, such that the call on the first line is able to execute

# What is recursion 
Recursion is when a function calls itself until someone stops it. If no one stops it then it'll
recurse (call itself) forever. Recursive functions let you perform a unit of work multiple times.
Modern programming languages like JavaScript already have the for and while statements as
alternatives to recursive functions. But some languages like Closure do not have any looping
statements, so you need to use recursion to repeatedly execute a piece of code.

ex:
1. | function recurse() {
2. |    //function code
3. |    recurse();
4. | }
5. | 
6. | recurse();

A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely. Once the condition is met, the function stops calling itself. This is called the base condition. To prevent infinite recursion, you can use if...else statement (or similar approach)
where one branch makes the recursive call, and the other doesn't.

1. | function recurse {
2. |    if (condition) {
3. |         recurse;
4. |     }
5. | 
6. |     else {
7. |        //stop calling recurse()
8. |     }
9. | }
10. | 
11. | recurse();

# What is closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function

1. | function makeAdder (x) {
1. |    //parameter 'x' is an inner variable
1. |    
1. |    //inner function 'add()' uses 'x', so
1. |    //it has a "closure" over it 
1. |    function add(y) {
1. |        return x + y
1. |    }
1. | 
1. |    return add
1. | }
1. | 
1. | var plusOne = makeAdder ( 1 )
1. | 
1. | var plusTen = makeAdder ( 10 )
1. | 
1. | plusOne ( 3 )
1. | plusOne ( 41 )
1. | 
1. | plusTen ( 13 )