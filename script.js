const obs = new IntersectionObserver(e => {
    e.forEach(x => {
        if (x.isIntersecting) x.target.classList.add("show")
    })
}, { threshold: 0.15 })

document.querySelectorAll(".reveal").forEach(e => obs.observe(e))

const hourglass = document.querySelector(".hourglass")
let angle = 0

const aboutText = `I'm a Roblox modeler specializing in hard surface modeling, with a growing focus on UGC creation. I found this craft on my own and fell in love with the process.
I have 3 months of experience and I always try my best to deliver the models you're looking for.`
const aboutEl = document.getElementById("aboutText")

const projectText = ""
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

function stepRotate() {
    angle += 100
    hourglass.style.transition = "transform 0.2s linear"
    hourglass.style.transform = `rotate(${angle}deg)`
    setTimeout(() => {
        hourglass.style.transition = "none"
    }, 200)
}

setInterval(stepRotate, 1000)

/* LOAD */
window.addEventListener("load", () => {
    setTimeout(typeAbout, 500)
    setTimeout(typeProject, 1200)
})