var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//add the react component
//components are capitalized
var Header = function Header(props) {
    return React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'span',
            { className: 'stats' },
            'Players: ',
            props.totalPlayer
        )
    );
};

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    //add state for the score
    function Counter() {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

        _this.incrementItem = function () {
            _this.setState(function (prevState) {
                return {
                    score: prevState.score + 1
                };
            });
        };

        _this.decrementItem = function () {
            _this.setState(function (prevState) {
                return {
                    score: prevState.score - 1
                };
            });
        };

        _this.state = {
            score: 0
        };
        return _this;
    }

    //add increment/decrement functions


    _createClass(Counter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'counter' },
                React.createElement(
                    'button',
                    { onClick: this.decrementItem, className: 'counter-action decrement' },
                    '-'
                ),
                React.createElement(
                    'span',
                    { className: 'counter-score' },
                    ' ',
                    this.state.score,
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: this.incrementItem, className: 'counter-action increment' },
                    '+'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var Player = function Player(props) {
    return React.createElement(
        'div',
        { className: 'player' },
        React.createElement(
            'span',
            { className: 'player-name' },
            props.name,
            React.createElement(
                'button',
                { className: 'remove-player', onClick: function onClick() {
                        return props.removePlayer(props.id);
                    } },
                '\u2716'
            )
        ),
        React.createElement(Counter, null)
    );
};

var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    //add state for the players
    function App() {
        _classCallCheck(this, App);

        var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this2.handleRemovePlayer = function (id) {
            _this2.setState(function (prevState) {
                //do not rewrite the players array, instead add a new one
                return {
                    players: prevState.players.filter(function (p) {
                        return p.id !== id;
                    })
                };
            });
        };

        _this2.state = {
            //add players array
            players: [{
                name: "Guil",
                id: 1
            }, {
                name: "Treasure",
                id: 2
            }, {
                name: "Ashley",
                id: 3
            }, {
                name: "James",
                id: 4
            }]
        };
        return _this2;
    }

    //add remove player function


    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                { className: 'scoreboard' },
                React.createElement(Header, { title: 'Scoreboard',
                    totalPlayer: this.state.players.length }),
                this.state.players.map(function (player) {
                    return React.createElement(Player, {
                        name: player.name,
                        id: player.id,
                        key: player.id.toString(),
                        removePlayer: _this3.handleRemovePlayer
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
React.createElement(App, null), document.getElementById('root'));