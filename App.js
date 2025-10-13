import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1',
// {
//     // attributes to class
//     id:'heading', xyz:'abc'
// }, 'Hello World from React');

// -- createElement gives an object --

const parent = React.createElement(
    'div',
    { id: 'parent' , key:'parent-1'},[
    React.createElement(
        'div',
        { id: 'child1', key:'child-1' },
        [
            React.createElement('h1', {}, "I'm and h1 tag in child"),
            React.createElement('h2', {}, "I'm an h2 tag in child")
        ]
        ),
        React.createElement(
    'div',
    { id: 'child2' , key:'child-2'},
    [
        React.createElement('h1', {}, "I'm and h1 tag in child2"),
        React.createElement('h2', {}, "I'm an h2 tag in child2")
    ]
)
    ]
);

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);