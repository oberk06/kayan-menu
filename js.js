const yemekler=document.querySelectorAll(".yemekler")

yemekler.forEach(yemek=>{
    yemek.addEventListener("click",()=>{
        removeactive()
        yemek.classList.add("active")
    })

})

function removeactive(){
    yemekler.forEach(item=>{
        item.classList.remove("active")
    })
}