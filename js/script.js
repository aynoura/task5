


var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var totalPrice=0;
allProducts.forEach(function(item){
  item.onclick = function(){
     totalPrice += parseInt (item.getAttribute(" total"))
     content.innerHTML += item.imgcontent  + ",";
       if (content.innerHTML !="") {
        btn.style.display="block";
        btn.style.background="#66bb6a";
        btn.style.color="white"
       }
   }
})
    btn.onclick = function(){
        console.log(totalPrice)
    }
    
