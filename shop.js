 
let btnplus =document.getElementsByClassName("plusbtn")
/*for (let i=0;i< btnplus.length; i++) {
   btnplus[i].addEventListener("click", function(){
     btnplus[i].nextElementSibling.value++;
    somme()
   })
}*/
///
    for(let btn of btnplus){
        btn.addEventListener("click" , function(){
            btn.nextElementSibling.value++
            somme()
        }


            )
    }


let btnminus=document.getElementsByClassName("minusbtn")
for(let btn of btnminus){
    btn.addEventListener("click", function(){
        if(btn.previousElementSibling.value>0){
            btn.previousElementSibling.value--
            somme()
        }
        
    })
}
function somme(){
    let price = document.getElementsByClassName("total-price")
    let qte = document.getElementsByClassName("qte")
    let sum=0
    for(let i =0; i<price.length; i++){
        sum+=price[i].innerHTML*qte[i].value
    }
    return document.getElementById("totalp").innerHTML = "Shopping Bag total : $" + sum
}




let trush=Array.from(document.querySelectorAll(".fa-times"))
trush.map(el=>el.addEventListener("click", function(){
    el.parentNode.remove()
    somme()
}))
 

//j'adore
let hearts=document.getElementsByClassName("fa-heart")
for(let heart of hearts){
    heart.addEventListener("click", function(){
        if(heart.style.color==="red"){
             heart.style.color="gray"
         }
         else heart.style.color="red"
        
    })
}
