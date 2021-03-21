"use strict";

class Burger {
    constructor(size, stuffing) {
        this.size = size
        this.stuffing = stuffing
        this.topping = ''
    }
    addTopping(topping) {
        this.topping += topping;
    }
    removeTopping(topping) {
        this.topping -= topping;
    }
    getToppings(topping) {} // Получить список добавок 
    getSize() {} // Узнать размер гамбургера 
    getStuffing() {} // Узнать начинку гамбургера 
    _calculatePrice() {
        let price = 0;
        switch (this.size) {
            case 'small':
                price += 50;
                break;
            case 'big':
                price += 100;
                break;
            default:
                break;
        }
        switch (this.stuffing) {
            case 'cheese':
                price += 10;
                break;
            case 'salad':
                price += 20;
                break;
            case 'potato':
                price += 15;
                break;
            default:
                break;
        }
        switch (this.topping) {
            case 'spicy':
                price += 15;
                break;
            case 'mayo':
                price += 20;
                break;
            default:
                break;
        }
        return price;
    }
    _calculateCalories() {
        let callories = 0;
        switch (this.size) {
            case 'small':
                callories += 20;
                break;
            case 'big':
                callories += 40;
                break;
            default:
                break;
        }
        switch (this.stuffing) {
            case 'cheese':
                callories += 20;
                break;
            case 'salad':
                callories += 5;
                break;
            case 'potato':
                callories += 10;
                break;
            default:
                break;
        }
        switch (this.topping) {
            case 'spicy':
                callories += 0;
                break;
            case 'mayo':
                callories += 5;
                break;
            default:
                break;
        }
        return callories;
    }
    renderBurgerHtml() {
        let burgerHtml = `<h2>${this.size}</h2><span>${this.stuffing}</span><br><span>${this.topping}</span>`;
        document.querySelector('.burger').insertAdjacentHTML('afterbegin', burgerHtml);
    }
    renderPriceCallories() {
        document.querySelector('.burger').insertAdjacentHTML('afterbegin', `<br>Price: ${this._calculatePrice()}, Callories: ${this._calculateCalories()}`);
    }
}

let smallCheeseBurger = new Burger('small', 'cheese');
alert(`You ordered ${smallCheeseBurger.size} burger with ${smallCheeseBurger.stuffing}, topping: ${smallCheeseBurger.topping}`);
smallCheeseBurger.addTopping('mayo');
alert(`You changed your topping to: ${smallCheeseBurger.topping}`);
smallCheeseBurger.renderBurgerHtml();
smallCheeseBurger.renderPriceCallories();

let bigPotatoBurger = new Burger('big', 'potato');
bigPotatoBurger.renderBurgerHtml();
bigPotatoBurger.renderPriceCallories();