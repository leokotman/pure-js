"use strict";

const sizes = {
    SMALL:{
        price: 50,
        callories: 20
    },
    BIG:{
        price: 100,
        callories: 40
    }
};
const fillings = {
    CHEESE:{
        price: 10,
        callories: 20,
    },      
    SALAD: {
        price: 20,
        callories: 5
    },
    POTATO: {
        price: 15,
        callories: 10
    }
};
const toppings = {
    SPICE: {
        price: 15,
        callories: 0
    },
    SAUCE: {
        price: 20,
        callories: 5
    }
};

class Burger {
    constructor(size, price, callories) {
        this.size = size;
        this.price = price;
        this.callories = callories;
        this.fillings = [];
        this.toppings = [];
    }

    addFilling(filling) {
        this.fillings.push(filling);
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        this.toppings = this.toppings.filter(top => top !== topping);
    }

    getToppings(topping) {
        document.write(this.toppings);
    }
    getSize() {} // Узнать размер гамбургера 
    getFilling() {
        document.write(this.fillings);
    }
    _calculatePrice() {
        const ingredients = [...this.fillings, ...this.toppings];
        let sumPrice = ingredients.reduce((acc, ingr) => acc += ingr.price, 0);
        return this.price + sumPrice;
    }
    _calculateCalories() {
        const ingredients = [...this.fillings, ...this.toppings];
        let sumCallories = ingredients.reduce((acc, ingr) => acc += ingr.callories, 0)
        return this.callories + sumCallories;
    }
    renderBurgerHtml() {
        let burgerHtml = `<h2>${this.size}</h2><span>${this.fillings.join()}</span><br><span>${this.toppings.join()}</span>`;
        document.querySelector('.burger').insertAdjacentHTML('afterbegin', burgerHtml);
    }
    renderPriceCallories() {
        document.querySelector('.burger').insertAdjacentHTML('afterbegin', `<br>Price: ${this._calculatePrice()}, Callories: ${this._calculateCalories()}`);
    }
};

let smallCheeseBurger = new Burger('SMALL', sizes.SMALL.price, sizes.SMALL.callories);
smallCheeseBurger.addFilling(fillings.CHEESE);
smallCheeseBurger.addTopping(toppings.SAUCE);

//вопрос: добавляя начинки в предыдущих действиях они попали как объект в массив начинок. и этот объект не имеет изначальных названий, поэтому в этом alert они не выводятся. как сохранить названия объектов изначальных? в отладчике увидел, что остаются только свойство, а название становится индексом 0
alert(`You ordered ${smallCheeseBurger.size} burger with ${smallCheeseBurger.fillings}, topping: ${smallCheeseBurger.toppings}`);

smallCheeseBurger.renderBurgerHtml();
smallCheeseBurger.renderPriceCallories();

let bigPotatoBurger = new Burger('BIG', sizes.BIG.price, sizes.BIG.callories);
bigPotatoBurger.renderBurgerHtml();
bigPotatoBurger.renderPriceCallories();
