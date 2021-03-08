function checkForShip(player, coordinates){
    var shipPresent, ship;

    //add conditional to only return false if the player has no ships at the given coordinates
    //loop through all the ships in the ships array and check each coordinate against the ones given by the function
    for(var i = 0; i < player.ships.length; i++){
        //save the current ship wihin the loop
        ship = player.ships[i]

        //filter the current ships location array by comparing each value to the given coordinates
        shipPresent = ship.locations.filter(function(actualCoordinate) {
            //return only coordinates that are a match
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1])
        })[0]

        //check if a ship is present at a given coordinate
        if(shipPresent){
            //return ship found at the provided coordinates
            return ship;
        }
    }

    return false;
}

function damageShip(ship, coordinates){
    ship.damage.push(coordinates);
}


//if a ship exists on the opponent's board at the guessed location,
//run damageShip on that particular ship using the location provided when calling fire
function fire(player, coordinates) {
    //check for a ship at the provided coordinates
    var ship = checkForShip(player, coordinates)

    //if a ship is found, add damage
    if(ship) {
        damageShip(ship, coordinates);
    }
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;