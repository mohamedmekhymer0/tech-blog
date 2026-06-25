
loadPosts();

function addPost(){

const post = {

title:title.value,
content:content.value

};

let posts =
JSON.parse(localStorage.getItem("posts"))
|| [];

posts.push(post);

localStorage.setItem(
"posts",
JSON.stringify(posts)
);

loadPosts();

}

function loadPosts(){

const posts =
JSON.parse(localStorage.getItem("posts"))
|| [];

document.getElementById("posts")
.innerHTML="";

posts.forEach((post,index)=>{

document.getElementById("posts")
.innerHTML += 

<div class="card p-3 mb-3">

<h4>${post.title}</h4>

<p>${post.content}</p>

<button
onclick="deletePost(${index})"
class="btn btn-danger">

Delete

</button>

</div>

;

});

}

function deletePost(index){

let posts =
JSON.parse(localStorage.getItem("posts"));

posts.splice(index,1);

localStorage.setItem(
"posts",
JSON.stringify(posts)
);

loadPosts();

}