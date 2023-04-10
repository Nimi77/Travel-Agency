// var harbumger =document.querySelectorAll(".hamb");
// var navlist = document.querySelector("ul")
// var list = document.querySelector("ul li");

// harmburger.addEventListener("click", function(){
//     this.classList.toggle("click");
//     navlist.classList.toggle("open");
// });

function dropDown1(){
    document.getElementById("dropDown").classList.toggle("show");
}
function dropDown2(){
    document.getElementById("mydropDown").classList.toggle("show");
}
function dropDown3(){
    document.getElementById("myDropDown").classList.toggle("show");
}
//Close the dropdown if the user clicks outside of it
window.onclick = function(e){
    if(!e.targetmatches('.drop-btn')){
        var dropDown = document.getElementById("dropDown");
        if (dropDown.classList.contains('show')){
            dropDown.classList.remove('show')
        }
    }
}
