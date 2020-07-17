document.addEventListener("DOMContentLoaded", (e) => {

})
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    })
}

function submitData() {
    fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(data => document.write(data.id))
        .catch(error => console.log(error.message))
}
submitData()