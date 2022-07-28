let http = new XMLHttpRequest();
http.open('GET', 'posts.json', true);
http.send();
http.onload = function () {
    if (http.readyState == 4 && http.status == 200) {
        let blogs = JSON.parse(http.responseText);
        let output = "";
        blogs.posts.forEach(cards => {
            output += `
                <div class = "blogs">
                    <img src="${cards.img}" alt="${cards.img}">
                    <ul class="comment">
                        <li><a href="#"><i class="fa fa-user"></i></a> by: <span> ${cards.author}</span></li>
                        <li><a href=""><i class="fa fa-comment"></i></a> <span>${cards.comment_count}</span></li>
                    </ul>
                    <h2 class="title"><a href="#">${cards.title}</a></h2>
                    <p class="description">${cards.desc}</p>
                    <p class="read-more"><a href="#">Read More...</a></p>
                    <a href="#" class="date">${cards.datetime}</a>
                </div>
                `
        });
        document.querySelector(".blogs").innerHTML = output;
    }
}


