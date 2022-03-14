let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

var h = document.querySelector("#nonvisible");
h.style.display = "none";

/* for popup*/

document.querySelector("#chefadd").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

/* append dish to all meals upond form submittion*/
document.querySelector("#submitbtn").addEventListener("click", function () {
  let dishname = document.querySelector("#dishname").value;
  let price = document.querySelector("#pricee").value;
  let chefname = document.querySelector("#chefname").value;

  /* create box */
  var box1 = document.createElement("div");
  box1.className = "box";

  /*for image */

  var img1 = document.createElement("img");
  const image_input = document.querySelector("#image_input");
  var uploaded_image;

  image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      img1.setAttribute("src", `url(${uploaded_image})`);
    });
    reader.readAsDataURL(this.files[0]);
  });
  box1.appendChild(img1);

  /*for dish name */
  var h33 = document.createElement("h3");
  h33.innerText = dishname;
  box1.appendChild(h33);

  /* create span for price of meal */
  var span1 = document.createElement("span");
  span1.className = "price";
  span1.innerText = price;
  box1.appendChild(span1);

  /*for chefname*/
  var h22 = document.createElement("h2");
  h22.innerText = chefname;
  box1.appendChild(h22);

  /*for starts */
  var stars1 = document.createElement("div");
  stars1.className = "stars";
  let i1 = document.createElement("i");
  i1.className = "far fa-star";
  stars1.appendChild(i1);
  let i2 = document.createElement("i");
  i2.className = "far fa-star";
  stars1.appendChild(i2);
  let i3 = document.createElement("i");
  i3.className = "far fa-star";
  stars1.appendChild(i3);
  let i4 = document.createElement("i");
  i4.className = "far fa-star";
  stars1.appendChild(i4);
  let i5 = document.createElement("i");
  i5.className = "far fa-star";
  stars1.appendChild(i5);

  box1.appendChild(stars1);

  document.querySelector(".box-container").appendChild(box1);
  document.querySelector(".popup").style.display = "none";
});

//menu.onclick = () => {
//  menu.classList.toggle("fa-times");
//navbar.classList.toggle("active");
//};

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");

//   if (window.scrollY > 60) {
//     document.querySelector("#scroll-top").classList.add("active");
//   } else {
//     document.querySelector("#scroll-top").classList.remove("active");
//   }
// };

// function loader() {
//   document.querySelector(".loader-container").classList.add("fade-out");
// }

// function fadeOut() {
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut();

/*cart*/

const data = [
  {
    id: 0,
    img: "/images/p-1.jpg",
    name: "Tasty Burger",
    price: 20,
    itemInCart: false,
  },
  {
    id: 1,
    img: "/images/p-2.jpg",
    name: "Tasty Cakes",
    price: 20,
    itemInCart: false,
  },
  {
    id: 2,
    img: "/images/p-3.jpg",
    name: "Tasty sweets",
    price: 20,
    itemInCart: false,
  },
  {
    id: 3,
    img: "/images/p-4.jpg",
    name: "Tasty Cupcakes",
    price: 25,
    itemInCart: false,
  },
  {
    id: 4,
    img: "/images/p-5.jpg",
    name: "Cold Drinks",
    price: 20,
    itemInCart: false,
  },
  {
    id: 5,
    img: "/images/p-6.jpg",
    name: "Cold Ice-Creams",
    price: 20,
    itemInCart: false,
  },
  {
    id: 6,
    img: "/images/p-5.jpg",
    name: "Cold Drinks",
    price: 16,
    itemInCart: false,
  },
  {
    id: 7,
    img: "/images/p-6.jpg",
    name: "Cold Ice-Creams",
    price: 10,
    itemInCart: false,
  },
];

let cartList = []; //array to store cart lists

var i;
var detail = document.getElementsByClassName("card-item");
var detailsImg = document.getElementById("details-img");
var detailTitle = document.getElementById("detail-title");
var detailPrice = document.getElementById("detail-price");
var youSave = document.getElementById("you-save");
var detailsPage = document.getElementById("details-page");
var back = document.getElementById("buy");
back.addEventListener("click", refreshPage);
var addToCarts = document.querySelectorAll("#add-to-cart");
var cart = document.getElementById("cart");

// click event to display cart page
cart.addEventListener("click", displayCart);

var carts = document.getElementById("carts");

//click events to add items to cart from details page
carts.addEventListener("click", () => addToCart(getId));

var home = document.getElementById("logo");

//click event to hide cart page and return to home page
home.addEventListener("click", hideCart);

//events on dynamically created element to remove items from list
document.addEventListener("click", function (e) {
  if (e.target.id == "remove") {
    var itemId = e.target.parentNode.id;
    removeFromCart(itemId);
  }
});

//click event to display details page
for (i = 0; i < data.length; i++) {
  detail[i].addEventListener("click", handleDetail);
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach((val) =>
  val.addEventListener("click", () => addToCart(val.parentNode.id))
);

// details function
function handleDetail(e) {
  detailsPage.style.display = "block";
  getId = this.parentNode.id;
  detailsImg.src = data[getId].img;
  detailTitle.innerHTML = data[getId].name;
  detailPrice.innerHTML = "Price : $ " + data[getId].price;
  youSave.innerHTML = "You save : ($ " + data[getId].save + ")";
}

// add item to the cart
function addToCart(id) {
  if (!data[id].itemInCart) {
    cartList = [...cartList, data[id]];
    addItem();

    alert("item added to your cart");
  } else {
    alert("your item is already there");
  }
  data[id].itemInCart = true;
}

//back to main page
function refreshPage() {
  detailsPage.style.display = "none";
}

// hide your cart page
function hideCart() {
  document.getElementById("main").style.display = "block";
  document.getElementById("cart-container").style.display = "none";
}

//display your cart page
function displayCart() {
  document.getElementById("main").style.display = "none";
  document.getElementById("details-page").style.display = "none";
  document.getElementById("cart-container").style.display = "block";
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  } else {
    document.getElementById("empty-cart").style.display = "none";
    document.getElementById("cart-with-items").style.display = "block";
  }
}

var totalAmount;
var totalItems;

//add item to the cart
function addItem() {
  totalAmount = 0;
  totalItems = 0;

  var clrNode = document.getElementById("item-body");
  clrNode.innerHTML = "";
  console.log(clrNode.childNodes);
  cartList.map((cart) => {
    var cartCont = document.getElementById("item-body");
    totalAmount = totalAmount + cart.price;
    totalItems = totalItems + 1;

    var tempCart = document.createElement("div");
    tempCart.setAttribute("class", "cart-list");
    tempCart.setAttribute("id", cart.id);

    var listImg = document.createElement("img");
    listImg.setAttribute("id", "list-img");
    listImg.src = cart.img;
    tempCart.appendChild(listImg);

    var listName = document.createElement("h3");
    listName.setAttribute("class", "list-name");
    listName.innerHTML = cart.name;
    tempCart.appendChild(listName);

    var listPay = document.createElement("h3");
    listPay.setAttribute("class", "pay");
    listPay.innerHTML = cart.price;
    tempCart.appendChild(listPay);

    var listQuantity = document.createElement("h3");
    listQuantity.setAttribute("class", "quantity");
    listQuantity.innerHTML = "1";
    tempCart.appendChild(listQuantity);

    var listTrash = document.createElement("i");
    listTrash.setAttribute("class", "fa fa-trash ");
    listTrash.setAttribute("id", "remove");
    tempCart.appendChild(listTrash);

    cartCont.appendChild(tempCart);
  });
  document.getElementById("total-amount").innerHTML =
    "Total Amount : $ " + totalAmount;
  document.getElementById("total-items").innerHTML =
    "Total Items : " + totalItems;
  document.getElementById("total").style.display = "block";
}

//remove item from the cart
function removeFromCart(itemId) {
  data[itemId].itemInCart = false;
  cartList = cartList.filter((list) => list.id != itemId);
  addItem();
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  }
}
