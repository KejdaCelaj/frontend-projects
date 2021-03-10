    //add an array of objects for players
    const players = [
        {
            name: "Guil",
            score: 50,
            id: 1
        },
        {
            name: "Treasure",
            score: 85,
            id: 2
        },
        {
            name: "Ashley",
            score: 95,
            id: 3
        },
        {
            name: "James",
            score: 80,
            id: 4
        }
    ]

    //add the react component
    //components are capitalized
    class Header extends React.Component{
        render(){
            return  (
                <header>
                    <h1>Scoreboard</h1>
                    <span className='stats'>Players: { this.props.totalPlayer} </span>
                </header>
            );
            }
    }

    class Counter extends React.Component{
        //add state for the score
        constructor() {
            super();
            this.state = {
              score:0
            };
          }

        //add increment/decrement functions
        incrementItem = () => {
            this.setState({ score: this.state.score + 1 });
        }
        decrementItem = () => {
            this.setState({ score: this.state.score - 1 });
        }

        render(){
            return (
                <div className='counter'>
                    <button onClick={this.decrementItem} className='counter-action decrement'>-</button>
                    <span className='counter-score'> {this.state.score} </span>
                    <button onClick={this.incrementItem} className='counter-action increment'>+</button>
                </div>
            )
        }
    }

    class Player extends React.Component {
        render(){
            return (
                <div className='player'>
                    <span className='player-name'> {this.props.name} </span>
                    {/* composition */}
                    <Counter />
                </div>
            )
        }
    }

    class App extends React.Component{
        render(){
            return (
                <div className='scoreboard'>
                    <Header title='Scoreboard' totalPlayer={this.props.initialPlayers.length}/>
                    
                    {/* player list */}
                    {this.props.initialPlayers.map(player =>
                        <Player 
                            name = {player.name} 
                            key= {player.id.toString}
                        />
                    )}
                </div>
            )
        }
    }

    ReactDOM.render(
        // add the component with a self closing tag
        // recommended to include one space
        <App initialPlayers = {players}/>,
        document.getElementById('root')
    )