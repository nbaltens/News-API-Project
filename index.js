$.ajax({
    url: 'http://newsapi.org/v2/top-headlines?country=us&apiKey=81ed012f2e554004a6ca2ebdf0df181d',
    dataType: 'json',
    success: function(data) {
      let users = data.articles;


let articles = `<ul>`

$.each(users, (user) => {
    articles += `<li>
            <div class="articleContainer">

                <div class="articleContent">
                    <p class="articleSrc"><i>${users[user].source.name}</i></p>
                    <p class="articleTitle"><i>${users[user].title}</i></p>
                    <p class="articleDesc"><i>${users[user].description}</i></p>
                </div>
                <div>
                    <img class="newsImg" src="${users[user].urlToImage}">
                    <p class="articleLink"><i><a target="_blank" href="${users[user].url}">Read More</a></i></p>

                </div>
                
            </div>
                </li>`
});

articles += `</ul>`;
$('#article').html(articles);


$('#searchbox').on('keypress',function(e) {
    if(e.which == 13) {
        alert('You pressed enter!');
    }
});



    }
  });

 