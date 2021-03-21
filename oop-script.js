let count = 0;
let itemsCount = document.querySelector(".items_count");
let addCount = () => {
    return (itemsCount.innerHTML = count);
};

//методы объектов

const addToCartBtnClicker = (btn) => {
    btn.addEventListener("click", () => {
        count++;
        addCount();
    });
};
const renderCartQuantity = () => {
    addCount();
    document.querySelectorAll(".add_to_cart").forEach(addToCartBtnClicker);
};

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods_item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="add_to_cart" type="button">Add to Cart</button>
        </div>`;
    }
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
    }
    render() {
        let listHtml = "";
        this.goods.forEach((good) => {
            let goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector(".goods-list").insertAdjacentHTML('afterbegin', listHtml);
    }
}

let list = new GoodsList();
list.fetchGoods();
list.render();
