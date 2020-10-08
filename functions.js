function characterCount() {
    return document.querySelector("#result").insertAdjacentHTML('beforeend', document.getElementById("string").value.length)
}