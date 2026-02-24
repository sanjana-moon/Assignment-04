## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: The JavaScript methods used to select HTML elements from the DOM (Document Object Model) are called DOM selection methods.
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
Answer: The process we follow to create and insert a new element into the DOM is given below:    
    1. Create a new element into the DOM:
        
        Step 1: Create a new element: We use document.createElement() to create a new HTML element in memory. It is not yet in the DOM.
            Example,
                const newDiv = document.createElement("div");
        
        Step 2: Add text content: We can add plain text in the element using textContent.
            Example,
                newDiv.textContent = "Hello World!";
        
        Step 3: Add attributes or classes: We can also add an id, class, or other attributes in the created element.
            Example,
                newDiv.id = "myDiv";
                newDiv.classList.add("highlight");

    2. Insert the element into the DOM:

        Step 1: Select the parent or reference element: We need to choose where in the DOM we want the new element to place.
            Example,
                const parent = document.getElementById("container");
                const reference = document.getElementById("refElement");
        
        Step 2: Insert the :
            a. appendChild(): It adds the new element as the last child.
                parent.appendChild(newDiv);
            b. prepend(): It adds as the new element the first child
                parent.prepend(newDiv);
            c. insertBefore(): It adds before a specific element
                parent.insertBefore(newDiv, reference);
            d. before() / after(): It adds as a sibling relative to another element
                reference.after(newDiv);
            reference.before(newDiv);
            e. insertAdjacentHTML(): It insert a string of HTML at a position
                parent.insertAdjacentHTML('beforeend', '<p>New HTML content</p>');
        
        Step 3: Result: After insertion, the element becomes a part of the DOM and is visible on the page.

            Example HTML after appending:
                <div id="container">
                <p>Existing content</p>
                <div id="myDiv" class="highlight">Hello World!</div>
                </div>



### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
