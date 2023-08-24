var minus=document.querySelector(".minus");
var number=document.querySelector(".number");
var plus=document.querySelector(".plus");
var newPrice=document.querySelector(".new-price");
var oldprice=document.querySelector(".old-price");
var cartIconAmount=document.querySelector(".cart");
var addToCartIcon=document.querySelector(".addtocart");
var carticon=document.querySelector(".cart-iconn");
var small=document.querySelector('.cart-quantity');
const productName=document.querySelector('.prod-title');
const productAmount=document.querySelector('.new-price');
const cartDetailss=document.querySelector('.notification-details')
const cartContent=document.querySelector('.cartContent');

//to decrease the product no.
minus.onclick=()=>{
    if(number.innerHTML>1){
        number.innerHTML--;
    }
}
//to increase the product no.
plus.onclick=()=>{
    if(number.innerHTML<100){
        number.innerHTML++;
    }   
}

let noOfitems=0;
//to show the no. of products on a cart-icon
addToCartIcon.addEventListener('click',()=>{
    let quantity=parseInt(number.textContent);
    noOfitems=parseInt(number.textContent);
    small.textContent=parseInt(number.textContent);
    if(quantity>0){
        small.style.display='block';
    }
    else{
        small.style.display='none';
    }
})
//to remove the cart-toggle if-it's open
var cartOpen=false;
function removecartContent(){
    const cartContent=document.querySelector('.cartContent');
    
     if(cartContent){
         cartContent.remove();    
     }    
}
//for Add-to-cart content creation
carticon.addEventListener('click',()=>{
    if(cartOpen){
        removecartContent();
        cartOpen=!cartOpen;
        console.log(cartOpen);
    }
    else{
        small.style.display='none';
        const cartContent=document.createElement('div');
        cartContent.classList.add('cartContent');

        const heading=document.createElement('h3');
        heading.textContent='Cart';
        cartContent.appendChild(heading);

        const cartEmpty=document.createElement('div');
        cartEmpty.classList.add('cart-empty');
        cartEmpty.style.display='none';
        cartContent.appendChild(cartEmpty);

        const emptycart=document.createElement('p');
        emptycart.textContent='Your cart is empty';
        cartEmpty.appendChild(emptycart);

        if(noOfitems===0){
            cartEmpty.style.display='flex'
            document.body.appendChild(cartContent);
            cartOpen=!cartOpen;
        }
        else{
            const cartDetails=document.createElement('div');
            cartDetails.classList.add('notification-details');
            cartContent.appendChild(cartDetails);

            const productImage=document.createElement('img');
            productImage.src='./images/image-product-1-thumbnail.jpg';
            productImage.alt='Image';
            cartDetails.appendChild(productImage);

            const notificationProdDet=document.createElement('div');
            notificationProdDet.classList.add('not-prod-det');
            cartDetails.appendChild(notificationProdDet);

            const prodTitle=document.createElement('p');
            prodTitle.classList.add('prod-titlee');
            prodTitle.textContent=productName.textContent;
            notificationProdDet.appendChild(prodTitle);

            const prodpricing=document.createElement('div');
            prodpricing.classList.add('prod-pricing');
            notificationProdDet.appendChild(prodpricing);
            
            const price=document.createElement('p');
            price.textContent=newPrice.textContent;
            prodpricing.appendChild(price);
            const prodQuantity=document.createElement('p');
            prodQuantity.textContent='X'+number.textContent;
            prodpricing.appendChild(prodQuantity);

            const totalAmount=document.createElement('strong');
            totalAmount.textContent='$'+(parseInt(price.textContent.slice(1))*parseInt(number.textContent));
            prodpricing.appendChild(totalAmount);

            const deleteicon=document.createElement('img');
            deleteicon.src='./images/icon-delete.svg';
            deleteicon.alt='Delete icon';
            deleteicon.addEventListener('click',()=>{
                cartDetails.style.display='none';
                checkoutbutton.style.display='none';
                number.textContent='0';
                if(cartDetails.style.display==="none" ){
                    cartEmpty.style.display='flex';
                }
            });
            cartDetails.appendChild(deleteicon);
            const checkoutbutton=document.createElement('button');
            checkoutbutton.textContent='Checkout';
            checkoutbutton.addEventListener('click',()=>{
                cartContent.style.display='none';
                number.textContent='0';
            })
            cartContent.appendChild(checkoutbutton);
            cartIconAmount.appendChild(cartContent);
            cartOpen=!cartOpen;    
        }
    }
});
 


var productGallery=document.querySelector(".productGallery");
var Gallery=document.querySelector(".Gallery")
var images =document.querySelectorAll(".imagess");
var slides=document.querySelectorAll(".slidess")
var closeGallery=document.querySelector(".closeGallery");
var mainimages=document.querySelector(".main-image img");
var mainSlide=document.querySelector(".mainSlide img");
var imagesContainer=document.querySelectorAll(".image");
var slidesContainer=document.querySelectorAll(".slide");


// to show the images on full screen
productGallery.addEventListener("click",()=>{
    Gallery.style.display="flex";
})
// to select the particular image adn show it into main image
function selected(index){
    for(let i=0;i<images.length;i++){
        if(i===index){
            mainSlide.src=`${slides[index].src}`;
            slidesContainer[index].classList.add("selected");
            slides[index].style.filter="opacity(0.2)"
        }
        else{
            slidesContainer[i].classList.remove("selected");
            slides[i].style.filter="opacity(1)"
        }
    }
}
//when click on particular image it open on full screen
images.forEach((image)=>{
    image.addEventListener('click',()=>{
        Gallery.style.display='flex';
    })
})
//to move left and right the images
slides.forEach((slide)=>{
    slide.addEventListener('click',()=>{
        var Slideslist=Array.from(slides);
        var  slideindex=Slideslist.indexOf(slide);
        //console.log(slideindex+"yjod od");
        slideINDEX=slideindex;
        selected(slideINDEX);
    });
    slide.addEventListener("mouseover",()=>{
        slide.style.filter="opacity(0.2)";
    });
    slide.addEventListener("mouseout",()=>{
        selected(slideINDEX);
        
    })
    
})
//when clicking on cross it close the full screen
function closingallery(){
    closeGallery.addEventListener('click',()=>{
        Gallery.style.display='none';
        console.log("this is consle");
    })
}

//saving in localstorage the image index
localStorage.slideindex=0;
var slideINDEX=localStorage.slideindex;
selected(slideINDEX);

//to move left
var left=document.querySelector(".left");
left.addEventListener('click',()=>{
    if(slideINDEX<=0){
        slideINDEX=slides.length-1;
    }
    else{
        slideINDEX--;
    }
    selected(slideINDEX);
})
//to move right
var right =document.querySelector(".right");
right.addEventListener('click',()=>{
    if(slideINDEX===slides.length-1){
        slideINDEX=0;
    }
    else{
        slideINDEX++;
    }
    selected(slideINDEX);
})
// in reponsive handling the menu icon
var menuIcon=document.querySelector(".menui");
var navList=document.querySelector(".navlist");
var nav=document.querySelector(".nav a" );
var closeMenu=document.querySelector(".closeMenu i");

menuIcon.addEventListener("click",()=>{
    navList.style.display="flex";
    closeMenu.style.display="flex";

})
closeMenu.addEventListener("click",()=>{
    navList.style.display="none"
})

