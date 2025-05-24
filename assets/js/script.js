const mainLoaderContainer = document.getElementById("main-loader");
if(mainLoaderContainer) {
  setTimeout(() => {
    mainLoaderContainer.style.opacity = 0;
    mainLoaderContainer.addEventListener('transitionend', function handleTransitionEnd(event) {
    if (event.propertyName === 'opacity') {
      mainLoaderContainer.style.display = 'none';
      mainLoaderContainer.removeEventListener('transitionend', handleTransitionEnd);
    }
  });
  }, 2000);
}

const productContainer = document.querySelector(".products-container");

for (let i = 0; i < 8; i++) {
  productContainer.innerHTML += `
        <div class="product">
          <div class="top">
            <img src="assets/images/sample1.png" alt="image">
            <div class="cart-action-btn">
              <img src="assets/images/icons/product-card-bottom.png" alt="cart">
            </div>
          </div>
          <span>
            <h5>Clock Work</h5>
            <h6>$90</h6>
          </span>
          <p>Nice wallpaper to be added on your collection hurry up !</p>
        </div>`;
}


const bestSellersContainer = document.querySelector(".best-sellers-container");

for (let i = 0; i < 8; i++) {
  bestSellersContainer.innerHTML += `
        <div class="best-seller">
          <div class="top">
            <img src="assets/images/sample.png" alt="image">
            <div class="cart-action-btn">
              <img src="cart.jpg" alt="cart">
              <img src="view.png" alt="cart">
              <img src="favourite.jpg" alt="cart">
            </div>
          </div>
          <h5>Clock Work</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        </div>`;
}
