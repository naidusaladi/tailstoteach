const alla=document.querySelectorAll(".a")
const butterfly=document.querySelector(".butterfly")
const firsthalf=document.querySelector(".firsthalf")
const secondhalf=document.querySelector(".secondhalf")
const bodyEl=document.querySelector(".body")
const imgEl=document.querySelector(".img")
const parasEl=document.querySelector(".paras")
const list_items=["HOME","OUR STORY","APPROACH","BOOKS","COLLABORATE","CAREERS","CONTACT US"]
const list_items_value=[680,610,500,400,320,190,95]
function prevecolor(){
    alla.forEach(a=>{
        a.style.color="black"
    })
}
alla.forEach((a)=>{
    a.addEventListener("click",()=>{
        prevecolor()
        a.style.color='gold'
        butter_number=list_items.indexOf(a.innerText)
        let butter_value=list_items_value[butter_number]
        butterfly.style.right=`${butter_value}px`;
    

        

      
    })
})

window.addEventListener('scroll', event=>{
  const scroller=Math.floor(window.pageYOffset)
  if(scroller>136){
    imgEl.style.top="44%"
    parasEl.style.right='-50%'
    
    
    
  }else{
    imgEl.style.top="22%"
    parasEl.style.right='100px'
    
    
  }
  
});

