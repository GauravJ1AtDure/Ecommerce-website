<<<<<<< HEAD
// let product_categories=document.querySelector('#product-categories')
// function displayProductCategories(){
  
//     if(product_categories.style.display === "none")
//     {
//     product_categories.style.display = "block";
//     }
//     else
//     {
//     product_categories.style.display="none"
//     }
//   }

let showMenSection=()=>{
    active_section='men'
    trends.innerHTML='men'
    h1text1.innerHTML="men text"
    h1text2.innerHTML="men text"
    ptext.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    imgsrc.src='/images/men_section_pick.jpg'
    pagelink.href='/pages/men_products.html'
  }
  
  let showWomenSection=()=>{
    active_section = 'women'
    trends.innerHTML='women'
    h1text1.innerHTML="women text"
    h1text2.innerHTML="women text"
    ptext.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    imgsrc.src='/images/woman_section_pick.jpg'
    pagelink.href='/pages/women_products.html'
    
  }
  
  let showKidsSection=()=>{
    active_section = 'kids'
    trends.innerHTML='kids'
    h1text1.innerHTML="kids text"
    h1text2.innerHTML="kids text"
    ptext.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    imgsrc.src='/images/kids_section_pick.jpg'
    pagelink.href='/pages/kids_products.html'
  }
=======
>>>>>>> parent of 85fce98 (working on home page and adding extra products)

fetch("/data/products.json")
.then(response => {
   return response.json();
})
.then(data => { 
    //console.log(data[0].products_101)
   
    
    let homePageCards=document.querySelector('#homePageCards')
    let selected_product
<<<<<<< HEAD
    checkout=(x)=>{
=======
    let checkout=(x)=>{
>>>>>>> parent of 85fce98 (working on home page and adding extra products)
      console.log('card click',x)
      selected_product=data[0].products_101[x-1]
      localStorage.setItem('selectedProduct',JSON.stringify(selected_product))
      location.href='/pages/product_card.html'
    }
  
<<<<<<< HEAD
    homePageCards.addEventListener('click',checkout())
=======
    homePageCards.addEventListener('click',checkout)
>>>>>>> parent of 85fce98 (working on home page and adding extra products)


});




 