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

//add the header react component
//components are capitalized
function Header(props){
    return  (
        <header>
            <h1>Scoreboard</h1>
            <span className='stats'>Players: { props.totalPlayer} </span>
        </header>
    );
}

function Counter(props){
    return (
        <div className='counter'>
            <button className='counter-action decrement'>-</button>
            <span className='counter-score'> {props.score} </span>
            <button className='counter-action increment'>+</button>
        </div>
    )
}

const Player = (props) => {
    return (
        <div className='player'>
            <span className='player-name'> {props.name} </span>
            {/* composition */}
            <Counter score={props.score}/>
        </div>
    )
}

function App(props){
    return (
        <div className='scoreboard'>
            <Header title='Scoreboard' totalPlayer={props.initialPlayers.length}/>
            
            {/* player list */}
            {props.initialPlayers.map(player =>
                <Player 
                    name = {player.name} 
                    score= {player.score} 
                    key= {player.id.toString}
                />
            )}
        </div>
    )
}

ReactDOM.render(
    // add the component with a self closing tag
    // recommended to include one space
    <App initialPlayers = {players}/>,
    document.getElementById('root')
)