// const heading = React.createElement('h1',
// {
//     // attributes to class
//     id:'heading', xyz:'abc'
// }, 'Hello World from React');

// -- createElement gives an object --

const parent = React.createElement(
    'div',
    { id: 'parent' },[
    React.createElement(
        'div',
        { id: 'child' },
        [
            React.createElement('h1', {}, "I'm and h1 tag"),
            React.createElement('h2', {}, "I'm an h2 tag")
        ]
        ),
        React.createElement(
    'div',
    { id: 'child2' },
    [
        React.createElement('h1', {}, "I'm and h1 tag"),
        React.createElement('h2', {}, "I'm an h2 tag")
    ]
)
    ]
);

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);