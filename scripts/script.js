// Script.js
window.onload = function() {
  console.log("ON LOAD")

  var product = document.createElement('product-item')

};


window.addEventListener('DOMContentLoaded', () => {
  // TODO
  console.log("DOM loaded")

  var store = window.localStorage;
  var response;
  if(store.getItem) {
  response = fetch('https://fakestoreapi.com/products')
    .then( response => {
        response.json().then(data => {
          store.setItem("response", JSON.stringify(response));
        })
        console.log("response " + response)
    })
  }


});