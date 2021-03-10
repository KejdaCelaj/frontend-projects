    //add the react component
    //components are capitalized
    const Header = (props) =>{
        return  (
            <header>
                <h1>{ props.title }</h1>
                <span className='stats'>Players: { props.totalPlayer}</span>
            </header>
        );
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
            this.setState( prevState =>({ 
                score: prevState.score + 1 
            }));
        }
        decrementItem = () => {
            this.setState( prevState => ({ 
                score: prevState.score - 1 
            }));
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

    const Player = (props) => {
        return (
            <div className='player'>
                <span className='player-name'> 
                    {props.name}
                    {/* remove player button */}
                    <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>✖</button>
                </span>
                {/* composition */}
                <Counter />
            </div>
        )
    }

    class App extends React.Component{

        //add state for the players
        constructor() {
            super();
            this.state = {
            //add players array
              players:[
                {
                    name: "Guil",
                    id: 1
                },
                {
                    name: "Treasure",
                    id: 2
                },
                {
                    name: "Ashley",
                    id: 3
                },
                {
                    name: "James",
                    id: 4
                }
              ]
            };
          }

        //add remove player function
        handleRemovePlayer = (id) =>{
            this.setState( prevState =>{
                //do not rewrite the players array, instead add a new one
                return {
                    players: prevState.players.filter(p => p.id !== id)
                }
            })
        }
          
        render(){
            return (
                <div className='scoreboard'>
                    <Header title='Scoreboard' 
                    totalPlayer={this.state.players.length}/>
                    
                    {/* player list */}
                    {this.state.players.map(player =>
                        <Player 
                            name = {player.name} 
                            id = {player.id}
                            key= {player.id.toString()}
                            removePlayer = {this.handleRemovePlayer}
                        />
                    )}
                </div>
            )
        }
    }

    ReactDOM.render(
        // add the component with a self closing tag
        // recommended to include one space
        <App />,
        document.getElementById('root')
    )