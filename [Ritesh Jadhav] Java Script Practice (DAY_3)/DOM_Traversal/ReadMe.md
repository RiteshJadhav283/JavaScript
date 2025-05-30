1. Create nested div structure in HTML
HTML nesting means placing elements inside other elements, forming a tree-like structure called the DOM tree. Each element can have parent, child, and sibling relationships.

2. Use parentElement to log a child’s parent
parentElement is a property that returns the parent element of the specified element in the DOM tree. If the element has no parent, it returns null.

3. Use .children to log all children of a div
.children returns a live HTMLCollection of all child elements of a node (excluding text and comment nodes).
Difference:
.childNodes returns all child nodes (including text, comment, and element nodes).
.children returns only element nodes.

4. Use .closest() to find a parent with a class
.closest(selector) starts from the current element and traverses up the DOM tree until it finds an ancestor (or itself) that matches the selector. Returns null if no such element exists.

5. Toggle a class on parent when clicking a child button
Event listeners can be added to elements to respond to user actions (like clicks).
Class toggling uses element.classList.toggle('className') to add/remove a class.
When a child button is clicked, you can use DOM traversal to find the parent and toggle its class.
