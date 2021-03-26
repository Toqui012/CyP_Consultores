
function caca(){
    console.log("hola")
}

function changeText(){
    const hoverList = document.querySelectorAll("wrapper-list ul li:hover::before");
    const colorText = document.querySelectorAll("wrapper-list ul li p");

    hoverList.addEventListener("click", () => {
        colorText.style = "color: #fff";
    });
}




// Desktop Nav

const parent = document.querySelectorAll(".drop-down");
const nav = document.querySelector("nav");

for (let i = 0; i < parent.length; i++) {
  parent[i].addEventListener("click", function () {
    let ddStatus = parent[i].childNodes[2].style.display;

    if (ddStatus === "flex") {
      parent[i].childNodes[2].style.display = "none";
    } else {
      closeAll(parent);
      parent[i].childNodes[2].style.display = "flex";
      parent[i].childNodes[2].style.padding = 0;
    }
  })
}

function closeAll(arg) {
  for (let i = 0; i < arg.length; i++) {
    arg[i].childNodes[2].style.display = "none";
  }
}

document.addEventListener("click", function (e) {
  if (!nav.contains(e.target)) {
    closeAll(parent);
  }
})

// Mobile Nav

const mParent = document.querySelectorAll(".mobile-nav .m-drop-down");
const mNav = document.querySelector(".mobile-nav");
const toggleNav = document.getElementById("toggle-nav");

for (let i = 0; i < mParent.length; i++) {
  mParent[i].addEventListener("click", function () {
    let ddStatus = mParent[i].childNodes[2].style.display;

    if (ddStatus === "block") {
      mParent[i].childNodes[2].style.display = "none";
    } else {
      closeAll(mParent);
      mParent[i].childNodes[2].style.display = "block";
    }
  })
}

toggleNav.addEventListener("click", function () {
  mNav.classList.toggle("open");
  toggleNav.classList.toggle("open");
})


function effectHamburger(x){
  x.classList.toggle("change");
}



// selector.addEventListener("mouseenter",() =>
    // {
    //     console.log("Movimiento Mouse")
    //     selector.style.color = "red";
 
    // })

    // selector.addEventListener("mouseleave",() => 
    // {
    //     console.log("Movimiento Afuera")
    //     selector.style.color = "green"
    // })