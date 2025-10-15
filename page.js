document.addEventListener('DOMContentLoaded',function(){

let heartButtons=document.querySelectorAll('.heartButton');

heartButtons.forEach((heartButton)=>{
heartButton.addEventListener('click', function() {
    let backgroundImage=window.getComputedStyle(heartButton).backgroundImage;
    if(backgroundImage.includes('icons8-heart-24.png')){
 heartButton.style.background = "url('icons8-dark_heart-24.png')";
 heartButton.style.backgroundRepeat = "no-repeat";
 const items=document.querySelectorAll(".heartButton");
 localStorage.setItem("product",heartButton.id);
 window.location.href="wishlist.html";
 }

    else if (backgroundImage.includes('icons8-dark_heart-24.png')){
        heartButton.style.background = "url('icons8-heart-24.png')";
         heartButton.style.backgroundRepeat = "no-repeat";
         alert("Your item has been removed from the wishlist!")

    }

})

});
let bagButtons=document.querySelectorAll(".addBagButton");
let  bagButtonAndBadgeContainer=document.querySelectorAll(".bagButtonAndBadge");
let numberOfproducts=null;

bagButtons.forEach((bagButton)=>{
   bagButton.addEventListener('click',function(){
    let badge=document.createElement('span');
    badge.classList.add('badge');
    bagButtonAndBadgeContainer.appendChild(badge);
numberOfproducts.textContent=numberOfproducts+1;
    })

})
/*const array=["sid shirt","denim ","artist cardi"]
searchBar=document.getElementById('search_bar');
let input=undefined;
searchBar.addEventListener("input",function(e){
 input =e.target.value;
})

*/
let cvv=document.getElementById('cardVerificationValue');
cvv.addEventListener('input',function(){
let cvv_content=cvv.value;
const pattern=/\d\d\d/;
if(!pattern.test( cvv_content)){
 cvv_content= cvv_content.replace(/\D/g,"");
 cvv.value=cvv_content;
 console.log(cvv.value);
}
})
})

