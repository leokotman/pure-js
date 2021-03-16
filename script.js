let goods = [
  {title: "Shirt", price: 150},
  {title: "Socks", price: 50},
  {title: "Jacket", price: 350},
  {title: "Shoes", price: 250},
  {title: "Pijamas", price: 100},
  {title: "Hat", price: 100},
  {title: "Umbrella", price: 120},
  {title: "Shorts", price: 130},
  {title: "Pants", price: 200},
];

let count = 0;
let addCount = () => {
  return (document.querySelector(".items_count").innerHTML = count);
};
let addToCartButton = `<button class="add_to_cart" type="button">Add to Cart</button>`;

const renderGoodsItem = (title = "Item", price = 0) => {
  //упростил return визуально
  let itemTitle = `<h3>${title}</h3>`;
  let itemPrice = `<p>${price}</p>`;

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