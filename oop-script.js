class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    };
    render() {
        return `<div class="goods_item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="add_to_cart" type="button">Add to Cart</button>
        </div>`;
    };
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
                title: "Shirt",
                price: 150,
            },
            {
                title: "Socks",
                price: 50,
            },
            {
                title: "Jacket",
                price: 350,
            },
            {
                title: "Shoes",
                price: 250,
            },
            {
                title: "Pijamas",
                price: 100,
            },
            {
                title: "Hat",
                price: 100,
            },
            {
                title: "Umbrella",
                price: 120,
            },
            {
                title: "Shorts",
                price: 130,
            },
            {
                title: "Pants",
                price: 200,
            },
        ];
    };
    render() {
        let listHtml = "";
        this.goods.forEach((good) => {
            let goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector(".goods-list").insertAdjacentHTML('afterbegin', listHtml);
    };
}

class Cart {
    constructor() {
        this.count = 0
    };
    _addCount() {
        let itemsCount = document.querySelector(".items_count");
        return itemsCount.innerHTML = this.count;
    };
    _addToCartBtnListener(btn) {
        btn.addEventListener("click", () => {
            this.count++;
            this._addCount();
        });
    };
    renderCartQuantity() {
        document.querySelectorAll(".add_to_cart").forEach(this._addToCartBtnListener.bind(this));
        this._addCount();
    };
    //new methods
    renderCartSum() {
        //{item price * quantity}
        //show sum
    };
    proceedToPayment() {
        //link to the page with sum & checkout
    };
    cleanCart() {
        //remove all goods, clean sum
    };
}
//элемент корзины (товар в корзине)
class ItemInCart {
    constructor(title, price, quantity) {
        this.title = title
        this.price = price
        this.quantity = quantity
    };
    changeQuantity() {
        //btns + & –
    };
    removeFromCart() {
        //btn 'delete item'
    };
}

//Создание объектов товаров и корзины, вызов методов
let list = new GoodsList();
list.fetchGoods();
list.render();

let cart = new Cart();
cart.renderCartQuantity();