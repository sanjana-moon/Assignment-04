## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
The JavaScript methods used to select HTML elements from the DOM (Document Object Model) are called DOM selection methods.
The 4 common DOM selection methods are:

1. getElementById()
2. getElementsByClassName()
3. querySelector()
4. querySelectorAll()

Difference among them:
1. getElementById(): It selects a single HTML element bu its id and returns an object. 
    Syntax,
        const variable_name = document.getElementById("id_name");

2. getElementsByClassName(): It selects all the elements with the given class name and returns an HTMLCollection. 
    Syntax,
        const variable_name = document.getElementsByClassName("class_name");

3. querySelector(): It selects the first element that matches any CSS selector and returns a single element.
    Syntax, 
        const variable_name = document.querySelector(".css_selector");
4. querySelectorAll(): It selects all the elements matching a CSS selector and returns a NodeList.
    Syntax,
        const variable_name = document.querySelectorAll(".css_selector");

### 2. How do you create and insert a new element into the DOM?



### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
