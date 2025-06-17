const btnMostraMenu = document.querySelector(".fa-solid.fa-xmark");
const menu = document.querySelector(".sidebar");

btnMostraMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    if(btnMostraMenu.classList.contains("fa-xmark")){
        btnMostraMenu.classList.remove("fa-xmark")
        btnMostraMenu.classList.add("fa-bars")
    }else{
        btnMostraMenu.classList.remove("fa-bars")
        btnMostraMenu.classList.add("fa-xmark")
    }
});


