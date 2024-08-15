import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "celebrity") {
            const celebrityId = parseInt(itemClicked.dataset.id)
            const celebritySport = itemClicked.dataset.sport

          for (const celebrity of celebrities) {
                if (celebrity.id === celebrityId) {
                    window.alert(`${celebrity.name} is a ${celebritySport} star!`)
                }
            }
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
