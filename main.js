const todoItems = Array.from(document.querySelectorAll(".todo-item"));
const wrappers = Array.from(document.querySelectorAll(".todo-wrapper"));

function handleDragStart(e) {
    e.dataTransfer.setData("text", e.target.id)
}
function handleDrop(e) {
    e.target.classList.remove("entered");
    const draggedElementId = e.dataTransfer.getData("text");
    const draggedElement = document.getElementById(draggedElementId)
    e.target.append(draggedElement)
}
function handleDragOver(e) {
    e.preventDefault()
}
function handleDragEnter(e) {
    e.target.classList.add("entered")

}
function handleDragLeave(e) {
    e.target.classList.remove("entered")
}

todoItems.forEach((todoItem) => {
    todoItem.addEventListener("dragstart", handleDragStart)
})

wrappers.forEach((wrapper) => {
    wrapper.addEventListener("dragover", handleDragOver)
    wrapper.addEventListener("drop", handleDrop);
    wrapper.addEventListener("dragenter", handleDragEnter)
    wrapper.addEventListener("dragleave", handleDragLeave)
})
