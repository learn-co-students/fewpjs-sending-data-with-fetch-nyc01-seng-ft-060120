// Add your code here

let url = "http://localhost:3000/users"

function submitData(name, email) {
    return fetch (url, {
        method: "POST", 
        headers: {
            "Content-type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name, email
        })
        })  
        .then( function ( response ) {
            return response.json()
          } )
        .then(function (object) {
            document.body.innerHTML = object[ "id" ]
        } )
        .catch(function(error) {
            alert("Oopsie!");
            document.body.innerHTML = error.message
        });
};
