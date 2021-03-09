var expect = require('chai').expect;

//Test suite
describe('checkForShip', function() {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    //Test spec (unit test)
    //Setting player object before using it in the cases
    var player;
    before(function(){
        //players are set as objects because they keep track of related information
        player = {
            //each player will have their set of ships as a property on the object
            ships: [
                //store each ship's loocation as a property
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                }
            ]
        }
    })

    it('should correctly report no ship located at the given coordinates', function() {
        
        expect(checkForShip(player, [9,9])).to.be.false;
    })

    it('should correctly report a ship located at the given coordinates', function() {

        expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
    })

    it('should handle ships located at more than one coordinate', function() {

        expect(checkForShip(player, [0,1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [9,9])).to.be.false;
    })

    it('should handle checking multiple ships', function() {

        expect(checkForShip(player, [0,1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [1,1])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [1,0])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [2,3])).to.deep.equal(player.ships[2]);
        expect(checkForShip(player, [9,9])).to.be.false;
    })
})

describe('damageShip', function(){
    var damageShip = require('../game_logic/ship_methods').damageShip;

    //register which ship to damage and which spot to register damage on
    it('should record damage on a given ship at a given location', function(){
        var ship = {
            locations: [[0, 0]],
            damage: []
        };

        damageShip(ship, [0, 0]);

        //ship damage array cannot be empty once the ship has been hit
        expect(ship.damage).to.not.be.empty;
        //use deep equal intead of equal because we need equality comparisons
        expect(ship.damage[0]).to.deep.equal([0,0]);
    })
})

describe('fire', function(){
    var fire = require('../game_logic/ship_methods').fire;

    //Setting player object before using it in the cases
    var player;
    beforeEach(function(){
        player = {
            ships: [
                {
                    locations: [[0,0]],
                    damage: []
                }
            ]
        };
    })

    //record damage on the correct ship when it is hit
    it('should record damage on the given ship at the given coordinates', function(){
        
        fire(player, [0,0]);

        //ship takes damage at the given location
        expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
    })

    //record damage on the correct ship when it is hit
    it('should NOT record damage if there is no ship at the coordinates', function(){

        fire(player, [9, 9]);

        //ship takes no damage at the given location
        expect(player.ships[0].damage).to.be.empty;
    })
})