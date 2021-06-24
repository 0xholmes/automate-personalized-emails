import items from "./items.json"

const scriptTemplate = document.querySelector("#script-template")
const container = document.querySelector(".wrapper")

items.forEach(renderScript)

function renderScript(item) {
  const script = scriptTemplate.content.cloneNode(true)

  const id = script.querySelector(".id")
  id.innerText = item.id

  const name = script.querySelector(".name")
  name.innerText = item.name

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
