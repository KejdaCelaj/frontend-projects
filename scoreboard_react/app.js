var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//add an array of objects for players
var players = [{
    name: "Guil",
    score: 50,
    id: 1
}, {
    name: "Treasure",
    score: 85,
    id: 2
}, {
    name: "Ashley",
    score: 95,
    id: 3
}, {
    name: "James",
    score: 80,
    id: 4
}];

//add the react component
//components are capitalized

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
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
                    this.props.totalPlayer,
                    " "
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Counter = function (_React$Component2) {
    _inherits(Counter, _React$Component2);

    //add state for the score
    function Counter() {
        _classCallCheck(this, Counter);

        var _this2 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

        _this2.incrementItem = function () {
            _this2.setState({ score: _this2.state.score + 1 });
        };

        _this2.decrementItem = function () {
            _this2.setState({ score: _this2.state.score - 1 });
        };

        _this2.state = {
            score: 0
        };
        return _this2;
    }

    //add increment/decrement functions


    _createClass(Counter, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "counter" },
                React.createElement(
                    "button",
                    { onClick: this.decrementItem, className: "counter-action decrement" },
                    "-"
                ),
                React.createElement(
                    "span",
                    { className: "counter-score" },
                    " ",
                    this.state.score,
                    " "
                ),
                React.createElement(
                    "button",
                    { onClick: this.incrementItem, className: "counter-action increment" },
                    "+"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var Player = function (_React$Component3) {
    _inherits(Player, _React$Component3);

    function Player() {
        _classCallCheck(this, Player);

        return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).apply(this, arguments));
    }

    _createClass(Player, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "player" },
                React.createElement(
                    "span",
                    { className: "player-name" },
                    " ",
                    this.props.name,
                    " "
                ),
                React.createElement(Counter, null)
            );
        }
    }]);

    return Player;
}(React.Component);

var App = function (_React$Component4) {
    _inherits(App, _React$Component4);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "scoreboard" },
                React.createElement(Header, { title: "Scoreboard", totalPlayer: this.props.initialPlayers.length }),
                this.props.initialPlayers.map(function (player) {
                    return React.createElement(Player, {
                        name: player.name,
                        key: player.id.toString
                    });
                })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(
// add the component with a self closing tag
// recommended to include one space
React.createElement(App, { initialPlayers: players }), document.getElementById('root'));