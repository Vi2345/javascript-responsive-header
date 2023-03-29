function myFunction(){
    var x=document.getElementById("myLinks");
    if (x.style.display == "flex"){
        x.style.display = "none";
    }
    else{
        x.style.display = "flex";
    }
    var Menu=document.querySelector('.icon i');
   Menu.addEventListener('click',()=>
  {
    Menu.classList.toggle('fa-xmark');
});
}