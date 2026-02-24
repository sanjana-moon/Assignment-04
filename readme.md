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
    Answer: Event Bubbling: Event Bubbling is a DOM event propagation mechanism where an event(like a click) starts from the target element (the clicked element) and then bubbles up (moves upward) through its parent and ancestor elements until it reaches the root.

    Working Process of Event Bubbling: When we click the target element it handles events by going through three distinct phases:

        Capturing Phase: The event moves from the window down to the target element.

        Target Phase: The event reaches the actual element that has been clicked.

        Bubbling Phase: The event "bubbles" back up from the button through its parent elements to the window.


### 4. What is Event Delegation in JavaScript? Why is it useful?
    Answer: Event Delegation is a technique in JavaScript. It is a design pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding multiple listeners to individual child elements. When an event occurs on a child, it bubbles up to the parent, which can then detect which child triggered the event using event.target.

    Why it is useful:

        1. Efficiency: It reduces memory usage by using one listener instead of many.
        2. Handles Dynamic Elements: Newly added child elements automatically work without adding extra listeners.
        3. Simpler, Cleaner Code: It centralizes event handling in one place, making it easier to maintain.
        4. Better Performance: It is specially important in large lists or dynamic UIs where many elements exist.



### 5. What is the difference between preventDefault() and stopPropagation() methods?
1. event.preventDefault(): It is a method of the event object that prevents the browser from performing its default action associated with the event.
    Example: Preventing a form from submitting or a link from navigating.

2. event.stopPropagation(): It is a method of the event object that stops the event from bubbling up (or capturing down) the DOM tree,
    preventing parent or ancestor elements from receiving the event.
    Example: Clicking a button inside a card without triggering the card’s click handler.

    Difference:
        1. Purpose: preventDefault() stops browser’s default action for the event where stopPropagation() Stops event propagation to parent elements.
        2. Bubbling: preventDefault() event still bubbles to parent elements and stopPropagation() Event stops at this element, won’t reach parent.
        3. UI impact: preventDefault() prevent form submission, link navigation but stopPropagation() Prevent child click from triggering parent click.
        4. Syntax:  preventDefault() = event.preventDefault()
                    stopPropagation() = event.stopPropagation()