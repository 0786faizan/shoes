  // getting the data from the localstorage to show on inventory page

let ShowesItem = JSON.parse(localStorage.getItem("products"));
   
  // mapping the data 
   ShowesItem.map(function(el,index){
       let box = document.createElement("div");

       let image = document.createElement("img")
       image.src = el.image;

       let type = document.createElement("p")
       type.innerText = el.type
     
       let desc = document.createElement("p")
       desc.innerText = el.desc

       let price = document.createElement("p")
       price.innerText = el.price

       let btn = document.createElement("button")
       btn.innerText = "Remove Product"
       btn.addEventListener("click",function(){
           removeProduct(el,index)
       })
      // append all the data into a div
       box.append(image,type,desc,price,btn)
       document.querySelector("#all_products").append(box)
    
    })
   // Remove function to removedata from the browser as well as the local storage
    function removeProduct(el,index){
        console.log(el,index);
        ShowesItem.splice(index,1)
        localStorage.setItem("products",JSON.stringify( ShowesItem))
        window.location.reload();

    }