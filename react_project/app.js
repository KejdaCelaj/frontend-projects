//add the object description
// const title = React.createElement(
//     'h1',
//     { id: 'main-title', title: 'This is a title.'},
//     'My First React Element!'
// )

// const desc = React.createElement(
//     'p',
//     null,
//     'I just learned how to create a React node and render it into the DOM'
// )

// const header = React.createElement(
//     'header',
//     null,
//     title,
//     desc
// )

//add objects using JSX
const title = <h1>My First React Element</h1>;
const desc = <p>I just learned how to create a React node and render it `into the DOM</p>
var myTitleID = 'main-title';

const header = (
    <header>
        <h1 id={myTitleID}> {title}! </h1>
        <p> {desc} </p>
    </header>
)

//render the object to the html using ReactDOM
ReactDOM.render(
    header,
    document.getElementById('root')
)