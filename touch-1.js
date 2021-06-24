import items from "./items.json"

const scriptTemplate = document.querySelector("#script-template")
const container = document.querySelector(".wrapper")

items.forEach(renderScript)

function renderScript(item) {
  const script = scriptTemplate.content.cloneNode(true)

  const containerId = script.querySelector(".container")
  containerId.dataset.emailId = item.id

  const id = script.querySelector(".id")
  id.innerText = item.id

  const company = script.querySelector(".company")
  company.innerText = item.company

  const name = script.querySelector(".name")
  name.innerText = item.name

  const firstLine = script.querySelector(".first-line")
  firstLine.innerText = item.firstLine

  container.appendChild(script)
}

const clipboard = new ClipboardJS(".btn", {
  target: function (trigger) {
    return trigger.nextElementSibling
  },
})

clipboard.on("success", () => {
  M.toast({
    html: "copied! 😉",
    classes: "green",
  })
})

clipboard.on("error", () => {
  M.toast({
    html: "failed 😟",
    classes: "red",
  })
})
