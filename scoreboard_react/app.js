//add an array of objects for players
var players = [{
    name: "Guil",
    score: 50,
    key: 1
}, {
    name: "Treasure",
    score: 85,
    key: 2
}, {
    name: "Ashley",
    score: 95,
    key: 3
}, {
    name: "James",
    score: 80,
    key: 4
}];

//add the header react component
//components are capitalized
function Header(props) {
    return React.createElement(
        "header",
        null,
        React.createElement(
            "h1",
            null,
            "Scoreboard"
        ),
        React.createElement(
            "span",
            { className: "stats" },
            "Players: ",
            props.totalPlayer,
            " "
        )
    );
}

function Counter(props) {
    return React.createElement(
        "div",
        { className: "counter" },
        React.createElement(
            "button",
            { className: "counter-action decrement" },
            "-"
        ),
        React.createElement(
            "span",
            { className: "counter-score" },
            " ",
            props.score,
            " "
        ),
        React.createElement(
            "button",
            { className: "counter-action increment" },
            "+"
        )
    );
}

var Player = function Player(props) {
    return React.createElement(
        "div",
        { className: "player" },
        React.createElement(
            "span",
            { className: "player-name" },
            " ",
            props.name,
            " "
        ),
        React.createElement(Counter, { score: props.score })
    );
};

function App(props) {
    return React.createElement(
        "div",
        { className: "scoreboard" },
        React.createElement(Header, { title: "Scoreboard", totalPlayer: props.initialPlayers.length }),
        props.initialPlayers.map(function (player) {
            return React.createElement(Player, {
                name: player.name,
                score: player.score,
                key: player.id.toString
            });
        })
    );
}

ReactDOM.render(
// add the component with a self closing tag
// recommended to include one space
React.createElement(App, { initialPlayers: players }), document.getElementById('root'));