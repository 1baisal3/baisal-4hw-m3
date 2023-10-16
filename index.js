const titleInp = document.guerySelector("#title");
const descriptionInp = document.guerySelector("#description");
const priceInp = document.guerySelector("#price");
const form = document.guerySelector(".form");
const updateBth = document.guerySelector("#update");

const products = document.querySelector(".products");

function getData() {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((res) => {
      displayData(res);
    });
}

function displayData(data) {
  data.forEach((item, i) => {
    products.innerHTML += `
    <div class="product">
    <img scr='${item.image}' />
    <h2>'${item.title}'</h2>
    <p>${item.description}</p>
    <b>${item.price}</b>
    <button id="${item.id} class="bth">Edit</button>
    <?div>
    `;
  });
  const bths = document.guerySelectorAll(".bth");
  bths.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(button.id);
      const existingItem = data?.find((item) => +item.id === +button.id);
      editProduct(existingItem);
    });
  });
  console.log(btns);
}
getData();

function editProduct(item) {
  console.log(item);
  titleInp.value = item?.title;
  descriptionInp.value = item?.description;
  priceInp.value = item?.price;

  updateBth.addEventListener("click", (e) => {
    e.preventDefault();
    updateProduct(item.id);
  });
}
function updateProduct(id) {
  const obj = {
    id: 1,
    title: titleInp.value,
    price: products.value,
    description: descriptionInp.value,
    category: descriptionInp.value,
    category: "Сумки",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
   .then((res) => res.json())
   .then((json) => console.log(json));
  getData();
}