let lis = document.querySelectorAll(".info-list li")
let conts = document.querySelectorAll(".info-content div")
console.log(lis)
lis.forEach(li => {
    li.onclick = function() {
        lis.forEach(li => {
            li.classList.remove("selected")
            conts.forEach(cont => {
                cont.style.display = 'none'
                console.log(this.dataset.class)
                if(cont.classList.contains(this.dataset.class)) {
                    cont.style.display = 'block'
                }
               
            })
        })
        
            li.classList.add("selected")
           
            
            
        
    }
})