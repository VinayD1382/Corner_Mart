let searchForm = document.querySelector('.search-form');/* WE ARE taking class search form and 
we apply js as once we click on the search bar - SEARCH BOX WILL DISPLAY : 
AND WHAT EVER INPUT WE WILL PROVOD THAT WILL BE IN CLASSLIST */

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');/* once we click on this the shoppingcart wont display */
    shoppingCart.classList.remove('active');/*shopping cart dont display because of remove method is there only search
    bar will display as its toggle (display only or dont remove ) */
   
}

let shoppingCart = document.querySelector('.shopping-cart');/*JS(2) */

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
   
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    
}



window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", { /*So this are used to slider the box : and the css property will 
be obtain by above link  JS(3)*/
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1, /* So at Zoom(200)  or 0of page only one box i.e : only one orange or other 
        should be display*/
      },
      768: {
        slidesPerView: 2, /* So at Zoom(100) OR 768 of page only one box i.e : only two orange or other 
        should be display*/
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: { /* Slidershould move automatically and time for it is 7500 millisceond*/
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});