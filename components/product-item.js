// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'});

    const li = document.createElement('li');
    li.setAttribute('class', 'product');

    const img = document.createElement('png');
    img.setAttribute('src','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
    img.setAttribute('alt','Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops')

    const title = document.createElement('p');
    title.setAttribute('class','title');
    title.textContent = "Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops";

    const price = document.createElement('p');
    price.setAttribute('class','price');

    const button = document.createElement('button');
    button.setAttribute('onclick',"alert('Added to Cart!')");
    button.setAttribute('id', 'cart')
    button.textContent = "Add to Cart";

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', './styles/styles.css');

    shadow.appendChild(li);
    shadow.appendChild(linkElem);
    shadow.appendChild(img);
    shadow.appendChild(title);
    shadow.appendChild(price);
    shadow.appendChild(button);
  }
}

customElements.define('product-item', ProductItem);