**JavaScript MCQs: DOM, Events, Math.random(), Variables, Functions**

## **DOM (Document Object Model)**

1. **What does DOM stand for?**  
   a) Document Object Model  
   b) Data Object Model  
   c) Digital Object Mapper  
   d) Display Output Model  
Ans - (a) Document Object Model  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

2. **Which method is used to select an element by its ID?**  
   a) getElement()  
   b) getElementByClass()  
   c) getElementById()  
   d) selectById()  
Ans - (c) getElementById()  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

3. **What does document.querySelector(".box") select?**  
   a) All elements with class "box"  
   b) The first element with class "box"  
   c) An element with ID "box"  
   d) None of the above  
Ans - (b) The first element with class "box"  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

4. **How do you change the text of an element with ID "message"?**  
   a) document.getElementById("message").text = "Hello"  
   b) document.message.innerHTML = "Hello"  
   c) message.innerText = "Hello"  
   d) document.getElementById("message").innerText = "Hello"  
Ans - (d) document.getElementById("message").innerText = "Hello"  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText

5. **What is the purpose of innerHTML?**  
   a) To store data in the browser  
   b) To add CSS to elements  
   c) To get or set the HTML content of an element  
   d) To delete an element  
Ans - (c) To get or set the HTML content of an element  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

---

## **Events**

1. **What is an event in JavaScript?**  
   a) A built-in method  
   b) A user or browser action  
   c) A CSS property  
   d) A JavaScript object  
Ans - (b) A user or browser action  
Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

2. **Which event occurs when a user clicks on an HTML element?**  
   a) onmouseover  
   b) onload  
   c) onclick  
   d) onchange  
Ans - (c) onclick  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

3. **How can you add a click event to a button in JavaScript?**  
   a) button.onClick = function()  
   b) addEventListener("click")  
   c) button.click = handleClick()  
   d) button.onclickEvent = clickHandler  
Ans - (b) addEventListener("click")  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

4. **What does event.preventDefault() do?**  
   a) Prevents default CSS  
   b) Stops default action like form submission  
   c) Prevents HTML rendering  
   d) Deletes the event  
Ans - (b) Stops default action like form submission  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

5. **Which method is used to attach an event handler?**  
   a) attachEvent()  
   b) setEvent()  
   c) addEventListener()  
   d) handleEvent()  
Ans - (c) addEventListener()  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

---

## **Math.random()**

1. **What does Math.random() return?**  
   a) A random integer  
   b) A number between 1 and 100  
   c) A number between 0 and 1  
   d) A boolean value  
Ans - (c) A number between 0 and 1  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. **How do you get a random integer from 1 to 10?**  
   a) Math.random(1,10)  
   b) Math.floor(Math.random() * 10)  
   c) Math.floor(Math.random() * 10) + 1  
   d) Math.randomInt(1, 10)  
Ans - (c) Math.floor(Math.random() * 10) + 1  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive

3. **What is the output range of Math.random()?**  
   a) 0 to 10  
   b) 1 to 10  
   c) 0 (inclusive) to 1 (exclusive)  
   d) 1 to 100  
Ans - (c) 0 (inclusive) to 1 (exclusive)  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

4. **Which function converts a float to an integer?**  
   a) toInteger()  
   b) Math.floor()  
   c) parseFloat()  
   d) roundNumber()  
Ans - (b) Math.floor()  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

5. **What will Math.floor(4.9) return?**  
   a) 5  
   b) 4  
   c) 3  
   d) 4.9  
Ans - (b) 4  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

---

## **Variables**

1. **How do you declare a variable in JavaScript?**  
   a) var myVar;  
   b) let myVar;  
   c) const myVar;  
   d) All of the above  
Ans - (d) All of the above  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations

2. **Which variable type allows reassignment?**  
   a) const  
   b) let  
   c) function  
   d) string  
Ans - (b) let  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

3. **Which keyword declares a block-scoped variable?**  
   a) var  
   b) global  
   c) let  
   d) static  
Ans - (c) let  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

4. **What will happen if you use a variable without declaring it?**  
   a) Error  
   b) It becomes a global variable  
   c) It becomes undefined  
   d) It is ignored  
Ans - (b) It becomes a global variable  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_var

5. **Which keyword creates a constant in JavaScript?**  
   a) let  
   b) var  
   c) const  
   d) define  
Ans - (c) const  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

---

## **Functions**

1. **What is a function?**  
   a) A loop  
   b) A reusable block of code  
   c) A data type  
   d) A condition  
Ans - (b) A reusable block of code  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

2. **How do you define a function named sayHello?**  
   a) function sayHello() {}  
   b) def sayHello() {}  
   c) let sayHello = {}  
   d) function: sayHello {}  
Ans - (a) function sayHello() {}  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions

3. **How do you call a function in JavaScript?**  
   a) call sayHello  
   b) sayHello  
   c) sayHello()  
   d) call(sayHello)  
Ans - (c) sayHello()  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#calling_functions

4. **What is the keyword to return a value from a function?**  
   a) send  
   b) yield  
   c) return  
   d) output  
Ans - (c) return  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

5. **What is a parameter in a function?**  
   a) A return value  
   b) A variable passed into a function  
   c) A built-in variable  
   d) A type of function  
Ans - (b) A variable passed into a function  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#parameters

---

## **Mixed Concepts**

1. **What will typeof "hello" return?**  
   a) string  
   b) text  
   c) object  
   d) char  
Ans - (a) string  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

2. **What does console.log() do?**  
   a) Displays content on the webpage  
   b) Logs errors only  
   c) Outputs messages to the browser console  
   d) Saves data  
Ans - (c) Outputs messages to the browser console  
Reference: https://developer.mozilla.org/en-US/docs/Web/API/console/log

3. **How do you write a comment in JavaScript?**  
   a)  
   b) // comment  
   c) ## comment  
   d) ** comment **  
Ans - (b) // comment  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments

4. **Which of these is a valid function expression?**  
   a) function = () {}  
   b) let add = function(x, y) { return x + y; }  
   c) add = (x, y) return x + y;  
   d) func(x, y) => x + y  
Ans - (b) let add = function(x, y) { return x + y; }  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions

5. **What does NaN mean?**  
   a) Not a Number  
   b) Null and None  
   c) New and Null  
   d) No active Node  
Ans - (a) Not a Number  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN

6. **Which method is used to convert a string to a number?**  
   a) parseInt()  
   b) toNumber()  
   c) convertNumber()  
   d) parse()  
Ans - (a) parseInt()  
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
