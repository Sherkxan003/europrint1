const buttonsCarusel = document.querySelector(".map")
const slider = document.querySelector(".carusel")
const buttonMainSlider = document.querySelector(".map_main")
const mainSlider = document.querySelector(".carusel_main")

buttonsCarusel.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttonsCarusel.children).forEach(item =>
            item.classList.remove("active")
        );
        if (e.target.classList.contains("first")) {
            slider.style.transform = "translateX(-0%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains("second")) {
            slider.style.transform = "translateX(-51%)";
            slider.style.transition = "all 1.5s ease"
            e.target.classList.add("active");
        }

    }
})
mainSlider.style.transition = "all 1.5s ease"
buttonMainSlider.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttonMainSlider.children).forEach(item =>
            item.classList.remove("active")


        );
        if (e.target.classList.contains("first")) {
            mainSlider.style.transform = "translateY(0)"
            e.target.classList.add("active")
        } else if (e.target.classList.contains("second")) {
            mainSlider.style.transform = "translateY(-397px)"
            e.target.classList.add("active")
        } else if (e.target.classList.contains("uch")) {
            mainSlider.style.transform = "translateY(-796px)"
            e.target.classList.add("active")
        }

    }
})



const leftButton = document.querySelector("#left-po")
const rightButton = document.querySelector("#right-po")
const portfolioCarusel = document.querySelector(".portfolio_carusel")
// console.log(portfolioCarusel);
console.log(leftButton);
let count = 0
leftButton.addEventListener("click", () => {
    portfolioCarusel.style.transition = "all 2s ease-out"
    if (count > 0) {
        count--
        portfolioCarusel.style.transform = `translateY(-${count*510}px)`
    } else if (count == 0) {
        count = 2
        portfolioCarusel.style.transform = "translateY(-1010px)"
    } else ""
    console.log(count);
})
rightButton.addEventListener("click", () => {
    portfolioCarusel.style.transition = "all 2s ease"
    if (count == 0) {
        count++
        portfolioCarusel.style.transform = `translateY(-510px)`
    } else if (count == 1) {
        count++
        portfolioCarusel.style.transform = "translateY(-1010px)"
        console.log(count);
    } else if (count == 2) {
        count = 0
        portfolioCarusel.style.transform = "translateY(0px)"
        console.log(count)
    } else ""
})



const burger = document.querySelector(".burger")
const navmain = document.querySelector(".nav_ul")
burger.addEventListener("click", () => {
    navmain.classList.toggle("nav_active")
    console.log(1);
})