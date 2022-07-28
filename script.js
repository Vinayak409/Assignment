let http = new XMLHttpRequest();
http.open('GET', 'https://raw.githubusercontent.com/Vinayak409/Assignment/master/posts.json', true);
http.send();
http.onload =  function(){
    if(this.readyState==4 && this.status==200){
        let blogs = JSON.parse(this.responseText);
        let output = "";
        for(let cards of Object.keys(blogs)){
            output += `
                <div class = "blogs">
                    <img src="${cards.img}" alt="${cards.img}">
                    <p class="title">${cards.title}</p>
                    <p class="desctiption">${cards.desc}</p>
                    <p class="comment">${cards.comment_count}</p>
                </div>
                `
        }
        document.querySelector(".blogs").innerHTML = output;
    }
}

