// Add your code here
let url = "http://localhost:3000/users"
let submitData = (name, email) => {
    return fetch(url, {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
        },
        body: JSON.stringify({name: name, email: email})
    })
    .then(res => res.json())
    .then(obj => document.body.innerHTML = obj["id"])
    .catch(error => {document.body.innerHTML = error.message; alert('error!');})
}