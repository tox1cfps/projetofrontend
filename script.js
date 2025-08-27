function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/assets/GKsp9B9WgAA-1V8.jpeg')
    } else {
        img.setAttribute('src', './assets/assets/GBJqKJrXIAAbPw4.jpeg')
    }
}