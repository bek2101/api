
let users = []
let posts = []
let comments = []
let albums =[]
let todos = []

function getTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data =>{
        todos = data
        readTodos()
    })
}
getTodos()

function readTodos(){
   let asd = todos.map(item =>
`<tr>
    <td>${item.id}</td>
    <td>${item.title}</td>
</tr> `       
    )
    document.getElementById("tbody2").innerHTML = asd.join("")
}






function getAlboms(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data =>{
        albums = data
        readAlbums()
    })
}
getAlboms()

function readAlbums(){
   let d = albums.map(item => 
        `<div class="col-3">
<div class="card">
<div class="card-header">
<h1>${item.id}</h1>
</div>
<div class="card-body">
<p>${item.title}</p>
</div>
</div>
        </div>`
        
    )
    document.getElementById("jass").innerHTML = d.join("")
}






function getComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data =>{
        comments = data
        readComments()
    })
}
getComments()

function readComments(){
  let c =  comments.map(item => 
        `<div class="col-3">
<div class="card h-100">
    <div class="card-header d-flex gap-5 h-50">
<h4>${item.id}</h4>
<h4>${item.name}</h4>
    </div>
    <div class="card-body">
<p>${item.body}</p>
    </div>
    <div class="card-footer">
<p>${item.email}</p>
    </div>
    
</div>
    </div>`)

    document.getElementById("bek").innerHTML = c.join("")
}





function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            posts = data
            readPosts()
        })
}
getPosts()

function readPosts() {
    let b = posts.map(item =>
        // console.log(item)


        `<div class="col-3">
<div class="card">
  <div class="card-header">
<h1>${item.title}</h1>
    </div>  
    <div class="card-body">
<p>${item.body}</p>
    </div>
</div>
</div>`)
    document.getElementById("row").innerHTML = b.join("")
}



function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then(data => {
            users = data
            readUsers()
        })
}
getUsers()


function readUsers() {
    let a = users.map(item =>
        // console.log(item)

        `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>                                              
        <td>${item.address.city}</td>                                              
        <td>${item.company.name}</td>                                              
        <td>${item.website}</td>                                              
    </tr>  `)
    document.getElementById("tbody").innerHTML = a.join("")
}