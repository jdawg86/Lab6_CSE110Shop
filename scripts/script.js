// Script.js
var product;

window.onload = function() {
  console.log("ON LOAD");

  product = document.createElement('product-item');

  let fcontain = document.getElementById("product-list");

  fcontain.appendChild(product);

};


window.addEventListener('DOMContentLoaded', () => {
  // TODO
  console.log("DOM loaded")

  let store = window.localStorage;
  let response;
  if(store.getItem) {
  response = fetch('https://fakestoreapi.com/products')
    .then( response => {
        response.json().then(data => {
          store.setItem("response", JSON.stringify(response));
        })
        console.log("response " + response);
    })
  }

  //console.log(document.querySelector("product-item").getElementById("cart"));
  console.log(document.getElementById('cart'));

  /*document.querySelector("product-item").root.querySelector('#cart').addEventListener("click", function() {
    let count = document.getElementById("cart-count").innerHTML;
    count = count + 1;
  })*/

});