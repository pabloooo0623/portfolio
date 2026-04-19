const obs = new IntersectionObserver(e => {
    e.forEach(x => {
        if (x.isIntersecting) x.target.classList.add("show")
    })
}, { threshold: 0.15 })

document.querySelectorAll(".reveal").forEach(e => obs.observe(e))

const aboutText = "ablabalbalbalbalablabalbalbalbalbalabablablablalalbabla lorem ipsum dolor sit amet consecutur idk"
const aboutEl = document.getElementById("aboutText")

const projectText = "if the cursor doesn't show istg"
const projectEl = document.getElementById("typed")

let i = 0
let j = 0

function typeAbout() {
    if (i < aboutText.length) {
        aboutEl.textContent = aboutText.slice(0, i + 1) + " |"
        i++
        setTimeout(typeAbout, 18)
    } else {
        aboutEl.textContent = aboutText
    }
}

function typeProject() {
    if (j < projectText.length) {
        projectEl.textContent = projectText.slice(0, j + 1) + " |"
        j++
        setTimeout(typeProject, 22)
    } else {
        projectEl.textContent = projectText
    }
}

window.addEventListener("load", () => {
    setTimeout(typeAbout, 500)
    setTimeout(typeProject, 1200)
})