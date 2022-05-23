//store the products array in localstorage as "products"
  // creating a object with the help of constructor function 
 function product(t,d,p,i){
     this.type = t
     this.desc = d
     this.price = p
     this.image = i
 }
  // getting the data from localstorage
let myArray =  JSON.parse(localStorage.getItem("products")) ||[];

 // getting a form input

function addData(e){
  e.preventDefault();
   let form = document.querySelector("#products");

   let type = form.type.value;
   let desc = form.desc.value;
   let price = form.price.value;
   let image = form.image.value;
   console.log(type,desc,price,image)
  // constructor object
 let admin = new product(type,desc,price,image);
//  console.log(admin)
   myArray.push(admin)
   console.log(myArray)
// adding the data into the localstorage
   localStorage.setItem("products",JSON.stringify(myArray))
  
 // it is using here for making form empty after putting the values every time

   form.type.value = "";
   form.desc.value = "";
   form.price.value = "";
   form.image.value = "";
}