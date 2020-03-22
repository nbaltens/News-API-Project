// LOAD WHATS TRENDING ON PAGE LOAD
topHeadlines();

// GO BACK TO TRENDING WHEN LOGO CLICKED
$("#homeLogo").click(() => {
    topHeadlines()
  });


// SWITCH URL TO SEARCH INPUT
$('#searchbox').on('keypress',function(e) {
    let searchInput = $('#searchbox').val();
    if(e.which == 13) {
        getSearch(searchInput);
        $("#searchbox").val("");
    } else {
        return
    }
    
});

// CREATE API CALL FOR TOP-HEADLINES
function topHeadlines() {
    $.ajax({
        url: `http://newsapi.org/v2/top-headlines?country=us&apiKey=81ed012f2e554004a6ca2ebdf0df181d`,
        dataType: 'json',
        success: function(data) {
        let articleData = data.articles;
        makeArticle(articleData);
        }
      });
}

// CREATE API CALL FOR SEARCH RESULTS
 function getSearch(event) {
    $.ajax({
        url: `http://newsapi.org/v2/everything?q=${event}&apiKey=81ed012f2e554004a6ca2ebdf0df181d`,
        dataType: 'json',
        success: function(data) {
        let articleData = data.articles;
        makeArticle(articleData);
        }
      });
 }

 
 
//  CREATE ARTICLES
 function makeArticle(articleData) {
    let articles = `<ul>`
    $.each(articleData, (data) => {
        articles += `<li>
                <div class="articleContainer">
                    <div class="articleContent">
                        <p class="articleSrc"><i>${articleData[data].source.name}</i></p>
                        <p class="articleTitle"><i>${articleData[data].title}</i></p>
                        <p class="articleDesc"><i>${articleData[data].description}</i></p>
                    </div>
                    <div>
                        <img class="newsImg" src="${articleData[data].urlToImage}">
                        <p class="articleLink"><i><a target="_blank" href="${articleData[data].url}">Read More</a></i></p>
                    </div> 
                </div>
                    </li>`
    });
    
    articles += `</ul>`;
    $('#article').html(articles);
 }
