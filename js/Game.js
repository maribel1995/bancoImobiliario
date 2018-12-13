
let board = [
    new Start(0, 'start'),
    new Property(1, 'leblon', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(2, 'presidente vargas', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(3, 'nossa senhora de copacabana', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(4, 'cahcorrinho', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(5, 'cadeia', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(6, 'picole', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(7, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(8, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(9, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(10, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(11, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(12, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(13, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(14, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(15, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(16, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(17, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(18, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(19, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),
    new Property(20, 'morumbi', 100, 6, 50, 3, 0, 50, 'pink'),

];

class Game {
    constructor(players) {
        this.players = players
    }


    verifyEndGame(players) {
        if(players[0].balance < 1 || players[1].balance <1){
            return false
        }
        return true;
    }



    checkPosition(player) {
        board.forEach((space) => {
            if (space.id == player.position) {
                const playerColor = $(`.p-${player.color}`);
                $(playerColor).remove();
                $(`#${space.id}`).append(playerColor);
                space.handleSpace(player, this.players);
               
            }
        })

    }

    turn(player) {
        player.move(player.rollDice());
        this.checkPosition(player);
        
    }

    

    buyCompany(player, company) {
        player.companies.push(company);
        player.pay(company.price);
    }

    buyHouse(player, property) {
        player.findProperty(property).totalHouse += 1;
        player.pay(property.housePrice);
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
