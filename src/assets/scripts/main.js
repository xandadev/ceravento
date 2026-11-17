document.addEventListener("scroll", () =>{
    const header = document.getElementById("id-header");
    
    if(scrollY > 0){
        header.classList.add("header-activo");
        header.classList.remove("header");
    }else{
        header.classList.remove("header-activo");
        header.classList.add("header");
    }
})