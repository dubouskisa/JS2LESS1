const products = [
    { id: 1, title: 'Notebook', price: 1000 },
    { id: 2, title: 'Mouse', price: 100 },
    { id: 3, title: 'Keyboard', price: 250 },
    { id: 4, title: 'Gamepad', price: 150 },
];

const renderProduct = (product, img = 'https://via.placeholder.com/140x100') =>
    `<div class="product-item">
    <img src = "${img}" alt = "photo">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;


const renderProducts = (list) => {
    // const productList = list.map((product) => {
    //     return renderProduct(product.title, product.price);
    // });
    // document.querySelector('.products').innerHTML = productList;
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(product => renderProduct(product)).join(''));

};

renderProducts(products);
