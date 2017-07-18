# Functional Programming in JS

## What is it?

In Functional Programming, **functions are treated as values**. 
Just like, we can assign a value to any variable, 
in the same way we can assign **functions to variables**. 
And also, we can pass a **function as an argument** and **return a 
function** (the same behaviour that exists with values).

## Higher Order Functions

A higher-order function is a function that can take 
**another function as an argument**, or that **returns a function as a result**.

Aim is to make your code **composable**.

## What are First-Class citizens?

In programming languages, when you are able to **pass, return and assign** a type, 
that **type** is considered to be a **first class citizen**.

**Types** inside of Javascript are first class citizens, we are able to assign, 
pass and return **all the different types** in JS.

## Difference between map and filter function.

**map** is used to transform values inside an array and put
them into another array.  
Whereas, **filter** only returns a filtered array. It doesn't do 
any modification. 

## Promises
Refer to ***[this](https://github.com/mattdesl/promise-cookbook)*** for more info on Promises.

### Promise Chaining
Refer **[this](https://html5hive.org/how-to-chain-javascript-promises/)** and
 **[this](http://odetocode.com/blogs/scott/archive/2015/09/28/chaining-promises-in-javascript.aspx)**.

## Functors
Q. What are they?  
A. ***[See this](https://www.youtube.com/watch?v=DisD9ftUyCk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=10)***

**Objects** that implement functions like **map** are called as ***functors***.  
It is **not** the function, but the object to which we refer as ***functor***.


The 3 rules which determine what is a functor and what's not:
1. **Transformation** of content
2. It **maintains** the structure (for example in Array.map, the size 
and the structure of the Array remains exactly the same).
3. **Return** a new functor.

**P.S.** Functors also need to be able to contain any type. They need to be
generic in nature.

For more, please refer ***[here](https://www.quora.com/Functional-Programming/Functional-Programming-What-is-a-functor/answer/Tikhon-Jelvis?share=1)***
 