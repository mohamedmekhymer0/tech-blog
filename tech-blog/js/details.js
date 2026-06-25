
loadComments();

function addComment() {

    let input = document.getElementById("commentInput");

    if(input.value.trim() === "") return;

    let comments =
        JSON.parse(localStorage.getItem("comments"))
        || [];

    comments.push(input.value);

    localStorage.setItem(
        "comments",
        JSON.stringify(comments)
    );

    input.value = "";

    loadComments();
}

function loadComments() {

    let comments =
        JSON.parse(localStorage.getItem("comments"))
        || [];

    let list =
        document.getElementById("commentList");

    list.innerHTML = "";

    comments.forEach(comment => {

        list.innerHTML += 
        <li class="list-group-item">
            ${comment}
        </li>
        ;

    });

}