function login() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

fetch('http://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
    method: 'POST' ,
    headers: {
        'Content-Type' : 'application.json' ,
        'Application-Key' : 'TU471f4fe1db78bbab77dc451b4dbb5c2f37a2478f78526a28f9c50ffb1d75046bc273844549895c1c8ffc5fe8c4a201fb'
    },
    body: JSON.stringify({"Username" : username,"PassWord" : password}) 
})
.then(response => response.json())
.then(data => {
    document.getElementById('message').innerHTML = `
    Status : ${data.status} <br>
    Message : ${data.message} <br>
    Type : ${data.type} <br>
    Username : ${data.username} <br>
    TU Status : ${data.tu_status} <br>
    Status ID : ${data.statusid} <br>
    Display Name (TH) : ${data.displayname_th} <br>
    Display Name (EN) : ${data.displayname_en} <br>
    Email : ${data.email} <br>
    Department: ${data.department} <br>
    Faculty: ${data.faculty}
    `;
})
.catch(error => console.error('Error:', error));
};