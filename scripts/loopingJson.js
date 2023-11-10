
let linksURL = "data/links.json"
let lessonList = document.querySelector(".lessonList")

async function getLinks() {
    const response = await fetch(linksURL)
    const data = await response.json()
    displayLessons(data.lessons)
}

getLinks();

const displayLessons = (lessons) => {
    lessons.forEach((lesson, lessonIndex) => {
        let li = document.createElement("li")
        let p = document.createElement('p')
        p.innerText = `${lesson.lesson}:`

        lesson.links.forEach((link, linkIndex) => {
            let a = document.createElement('a')
            a.href = link.url
            a.textContent = `${link.title}`

            li.appendChild(a);

            if (linkIndex < lesson.links.length - 1) {
                let pSeparator = document.createElement('p')
                pSeparator.innerHTML = ' | '
                li.appendChild(pSeparator)
            }
        });

        li.insertBefore(p, li.firstChild)
        lessonList.appendChild(li)
    });
};



