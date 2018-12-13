

class Game {
    constructor(players) {
        this.players = players
    }
    
    movePawn(player, spaceId){
        const playerColor = $(`.p-${player.color}`);
        $(playerColor).remove();
        $(`#${spaceId}`).append(playerColor);
    }


    checkPosition(player) {
        board.forEach((space) => {
            if (space.id == player.position) {
                this.movePawn(player, space.id);
                space.handleSpace(player, this.players);
               
            }
        })

    }

    turn(player) {
        player.move(player.rollDice());
        this.checkPosition(player);
        
    }

    verifyEndGame(players) {
        if(players[0].balance < 1 || players[1].balance <1){
            return false
        }
        return true;
    }

    // payRent(payer, renter, property) {
    //     const th = property.totalHouse;
    //     const r = property.rent;
    //     const m = property.multiplier;
    //     if (property.totalHouse > 0) {
    //         const value = (r + (10 * m)) * th;
    //         renter.receive(value);
    //         payer.pay(value)
    //     } else {
    //         renter.receive(r);
    //         payer.pay(r);
    //     }
    // }
}
