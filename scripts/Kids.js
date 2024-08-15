import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "child") {
            const kidId = parseInt(itemClicked.dataset.id)
            const kidsWish = itemClicked.dataset.wish

          for (const kid of children) {
                if (kid.id === kidId) {
                    window.alert(`${kid.name}'s wish is ${kidsWish}`)
                }
            }
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

