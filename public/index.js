this.addEventListener("scroll", (e) => {
    let elem = document.querySelectorAll(".footer")[0];
    e.preventDefault()
    if (this.scrollY === this.scrollMaxY) {
        elem.style["opacity"] = 1;
    } else {
        elem.style["opacity"] = 0;
    }
})

document.onreadystatechange = () => {
    console.log("ready state changed")
}