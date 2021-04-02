"use strict";

let goods = [
    { title: "Shirt", price: 150 },
    { title: "Socks", price: 50 },
    { title: "Jacket", price: 350 },
    { title: "Shoes", price: 250 },
    { title: "Pijamas", price: 100 },
    { title: "Hat", price: 100 },
    { title: "Umbrella", price: 120 },
    { title: "Shorts", price: 130 },
    { title: "Pants", price: 200 },
];

let count = 0;
let itemsCount = document.querySelector(".items_count");
let addCount = () => {
    return (itemsCount.innerHTML = count);
};
let addToCartButton = `<button class="add_to_cart" type="button">Add to Cart</button>`;

const titleH3Constructor = (Title) => `<h3>${Title}</h3>`;
const itemPriceParConstructor = (Price) => `<p>${Price}</p>`;

const renderGoodsItem = (title = "Item", price = 0) => {
    //упростил return визуально
    let itemTitle = titleH3Constructor(title);
    let itemPrice = itemPriceParConstructor(price);

    return `<div class="goods_item">
        ${itemTitle}
        ${itemPrice}
        ${addToCartButton}
        </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map((item) => renderGoodsItem(item.title, item.price));
    document.querySelector(".goods-list").innerHTML = goodsList.join("");
    //метод join убрал запятые между элементами получившегося массива goodList
};

//добавил возможность нажимать на кнопку добавления в корзину
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

renderGoodsList(goods);
renderCartQuantity();