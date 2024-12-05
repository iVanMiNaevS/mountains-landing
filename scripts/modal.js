const modal = document.querySelector(".booking__modal-container")
const list = document.querySelector(".booking__list")
const modalHeader = document.querySelector(".booking__modal-header")
list.addEventListener("click", (e) => {
    if (e.target.closest(".booking__card-bt")) {
        modal.classList.remove("hidden")
    }
})

modal.addEventListener("click", (e) => {
    console.log(e.target)
    if (!e.target.closest(".booking__modal") || e.target.closest(".booking__modal-header-x")) {
        modal.classList.add("hidden")
    }
})

modalHeader.addEventListener("click", (e) => {
    const pipRight = document.querySelector(".booking__header-pip.right")
    const pipLeft = document.querySelector(".booking__header-pip.left")
    const contentTour = document.querySelector(".booking__modal-main.tour")
    const contentUser = document.querySelector(".booking__modal-main.user")
    if (e.target.closest(".booking__header-pip.right")) {
        pipRight.classList.add("selected")
        pipLeft.classList.remove("selected")
        contentTour.classList.add("hidden")
        contentUser.classList.remove("hidden")

    } else if (e.target.closest(".booking__header-pip.left")) {
        pipRight.classList.remove("selected")
        pipLeft.classList.add("selected")
        contentTour.classList.remove("hidden")
        contentUser.classList.add("hidden")
    }

})
