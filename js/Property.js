class Property extends Space {
    constructor(id, name, price, rent, housePrice, houseHotel, multiplier, totalHouse, mortgage, color) {
        super(id, name),
            this.price = price,
            this.rent = rent,
            this.housePrice = housePrice,
            this.houseHotel = houseHotel,
            this.multiplier = multiplier,
            this.totalHouse = totalHouse,
            this.mortgage = mortgage,
            this.color = color,
            this.type = 'property',
            this.owner = ''
    }

    getFinalRent() {
        const th = this.totalHouse;
        const r = this.rent;
        const m = this.multiplier;
        return (r + (10 * m)) * th;
    }

    hasHouse() {
        return this.totalHouse > 0;
    }

    canBuyHouse(player) {
        const colorLength = $(`.top-bar.${this.color}`).length;
        const playerTotalColor = player.properties.filter(property => property.color == this.color).length;
        return colorLength == playerTotalColor ? true : false;
    }

    buyHouse(player) {
        if (player.hasMoney(this.housePrice)) {
            player.pay(this.housePrice);
            createHouse(this)
            this.totalHouse += 1;
        }
    }

    handleSpace(player, players) {
        if (this.owner == '') {

            if (this.confirmAction('new')) {
                this.buy(player, 'property')
            }

        } else if (this.owner == player.name) {
            if (this.canBuyHouse(player)) {
                if (this.confirmAction('house')) {
                    this.buyHouse(player);
                }
            } else {
                alert('Voce precisa ter todas as propriedades com mesma cor para construir uma casa!')
            }

        } else {
            let finalRent = this.rent;
            if (this.hasHouse()) {
                finalRent = this.getFinalRent();
            }
            players.forEach(owner => {
                if (this.owner == owner.name) {
                    this.payRent(player, owner, finalRent);
                }
            });
        }

    }
}