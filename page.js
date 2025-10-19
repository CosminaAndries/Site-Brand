document.addEventListener('DOMContentLoaded',function(){
   let badgeHeart=document.createElement('span');
let heartButtons=document.querySelectorAll('.heartButton');
let heartDiv=document.querySelectorAll(".wishlistButton");
let numberOfWishListItems=0;
heartButtons.forEach((heartButton)=>{
heartButton.addEventListener('click', function() {
    let backgroundImage=window.getComputedStyle(heartButton).backgroundImage;
    if(backgroundImage.includes('icons8-heart-24.png')){
    heartButton.style.background = "url('icons8-dark_heart-24.png')";
   heartButton.style.backgroundRepeat = "no-repeat";
   const items=document.querySelectorAll(".heartButton");
  numberOfWishListItems++;
    for(let i=0;i<heartDiv.length;i++){
     badgeHeart.classList.add('badge');
     badgeHeart.textContent=numberOfWishListItems;
     heartDiv[i].appendChild(badgeHeart);
     localStorage.setItem("product",heartButton.id);
 }
 }

    else if (backgroundImage.includes('icons8-dark_heart-24.png')){
        heartButton.style.background = "url('icons8-heart-24.png')";
        heartButton.style.backgroundRepeat = "no-repeat";
         numberOfWishListItems--;
         if(numberOfWishListItems!=0){
        for(let i=0;i<heartDiv.length;i++){
     badgeHeart.classList.add('badge');
     badgeHeart.textContent=numberOfWishListItems;
     heartDiv[i].appendChild(badgeHeart);
         }
      }
         else{
        for(let i=0;i<heartDiv.length;i++){
          badgeHeart.classList.remove('badge');
          badgeHeart.textContent="";
        }
    }
}
})
})

let bagButtons=document.querySelectorAll(".addBagButton");
let price=document.getElementById("price");
let numberOfproducts=0;
bagButtons.forEach((bagButton)=>{
   bagButton.addEventListener('click',function(){
   if (bagButton.id==="add_bag_fifthP_women"){
    let sizes=document.querySelectorAll(".FifthPageWomenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
   
     if(checked_flag==true){ 
      let badge=document.createElement('span');
    badge.classList.add('badge');
    localStorage.setItem("price",price.textContent);
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);
   }
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
 if (bagButton.id==="add_bag_fourthP_women"){
    let sizes=document.querySelectorAll(".FourthPageWomenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
   
     if(checked_flag==true){ 
      let badge=document.createElement('span');
       localStorage.setItem("price",price.textContent);
    badge.classList.add('badge');
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);}
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
   
    if (bagButton.id==="add_bag_thirdP_women"){
    let sizes=document.querySelectorAll(".ThirdPageWomenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
     if(checked_flag==true){ 
      let badge=document.createElement('span');
       localStorage.setItem("price",price.textContent);
    badge.classList.add('badge');
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);}
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
if (bagButton.id==="add_bag_secondP_women"){
    let sizes=document.querySelectorAll(".SecondPageWomenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
   
     if(checked_flag==true){ 
      let badge=document.createElement('span');
    badge.classList.add('badge');
     localStorage.setItem("price",price.textContent);
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);}
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
if (bagButton.id==="add_bag_firstP_women"){
    let sizes=document.querySelectorAll(".FirstPageWomenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
   
     if(checked_flag==true){ 
      let badge=document.createElement('span');
       localStorage.setItem("price",price.textContent);
    badge.classList.add('badge');
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);}
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
if (bagButton.id==="add_bag_firstP_men"){
    let sizes=document.querySelectorAll(".FirstPageMenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
   
     if(checked_flag==true){ 
      let badge=document.createElement('span');
    badge.classList.add('badge');
     localStorage.setItem("price",price.textContent);
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);}
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
if (bagButton.id==="add_bag_secondP_men"){
    let sizes=document.querySelectorAll(".SecondPageMenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
   
     if(checked_flag==true){ 
      let badge=document.createElement('span');
       localStorage.setItem("price",price.textContent);
    badge.classList.add('badge');
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);}
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
if (bagButton.id==="add_bag_thirdP_men"){
    let sizes=document.querySelectorAll(".ThirdPageMenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
   
     if(checked_flag==true){ 
      let badge=document.createElement('span');
       localStorage.setItem("price",price.textContent);
    badge.classList.add('badge');
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);}
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
if (bagButton.id==="add_bag_fourthP_men"){
    let sizes=document.querySelectorAll(".FourthPageMenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
   
     if(checked_flag==true){ 
      let badge=document.createElement('span');
       localStorage.setItem("price",price.textContent);
    badge.classList.add('badge');
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);}
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
if (bagButton.id==="add_bag_fifthP_men"){
    let sizes=document.querySelectorAll(".FifthPageMenSizes");
    let checked_flag=false;
    for(let i=0;i<sizes.length;i++){
     if (sizes[i].checked){
      localStorage.setItem("sizeProduct",sizes[i].value)
      checked_flag=true;
     }
    }
   
     if(checked_flag==true){ 
      let badge=document.createElement('span');
    badge.classList.add('badge');
 let  bagButtonAndBadgeContainer=document.querySelector(".bagButtonAndBadge");
  localStorage.setItem("price",price.textContent);
    bagButtonAndBadgeContainer.appendChild(badge);
    numberOfproducts++;
     badge.textContent=numberOfproducts;
     localStorage.setItem("productForBuying",bagButton.id);}
   
   else{
      alert("You need to select a size before buying the product!");
      return;
   }
}
 })
    })
 
    
/*const array=["sid shirt","denim ","artist cardi"]
searchBar=document.getElementById('search_bar');
let input=undefined;
searchBar.addEventListener("input",function(e){
 input =e.target.value;
})


let cvv=document.getElementById('cardVerificationValue');
cvv.addEventListener('input',function(){
let cvv_content=cvv.value;
const pattern=/\d\d\d/;
if(!pattern.test(cvv_content)){
 cvv_content= cvv_content.replace(/\D/g,"");
 cvv.value=cvv_content;
 console.log(cvv.value);
}
})
*/
});

