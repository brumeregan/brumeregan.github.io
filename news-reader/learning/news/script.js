(function (window, document) {

    function Articles() {
        this.articles = {};
        this.settings = {
            apiUrl: 'https://rss-deploy.herokuapp.com/rss/feed/' 
        };
        this.domElems = {
            articleTemplate: document.getElementById('article-template')
        };
    }

    var articles = new Articles();

    Articles.prototype.init = function() {
        var _self = this;
        _self.getData(); // Get all data.

        window.addEventListener('hashchange', function(e) {
            _self.getData();
        });
    };

    Articles.prototype.getData = function() {
        var hash = window.location.hash.substring(1);
        // Better use replace
        var rssUrl = this.settings.apiUrl + 'habr/hub/' + hash;
        var _self = this;

        fetch(rssUrl)
            .then(function(response) {
                var data = response.json();
                return data;
            })
            .then(function(response) {
                _self.articles = response.entries;
                
                _self.renderAll();             
            })
            .catch( function(err) {
                console.log(err);
            });

        return this;
    };

    Articles.prototype.renderAll = function() {
        var articlesHtml = this.generateAll();
        var articlesDomElem = document.querySelector('.articles');
        console.log(articlesHtml);
        articlesDomElem.innerHTML = '';
        articlesDomElem.appendChild(articlesHtml);

        // articlesDomElem.innerHTML = articlesHtml;
    };

    Articles.prototype.generateAll = function() {
        var _self = this;

        // TODO find better solution for multiple insertion.

        var articlesHtml = document.createDocumentFragment();

        this.articles.forEach(function (item) {
            articlesHtml.appendChild(_self.generateArticle(item));
        });

        // var articlesHtml = this.articles.map((item, index) => {
        //     console.log('item ', item);
        //     return _self.generateArticle(item);
        // });

        // console.log(articlesHtml);

        // console.log(articleHtml);
// 
        // articlesHtml = articlesHtml.join('');

        return articlesHtml;

    };

    Articles.prototype.generateArticle = function(itemData) {
        var newArticle = this.domElems.articleTemplate.cloneNode(true);
        newArticle.classList.remove('article_template');
        newArticle.querySelector('.post-heading').innerHTML = itemData.title;
        newArticle.querySelector('.excerpt').innerHTML = itemData.contentSnippet;
        newArticle.querySelector('.article__date').innerHTML = new Date(itemData.pubDate);
        newArticle.querySelector('.post-heading').setAttribute('href', itemData.link);
        newArticle.querySelector('.action-button').setAttribute('href', itemData.link);
        
        // console.log(newArticle);
        return newArticle;
    };


    var articles = new Articles();

    articles.init();

    var arr = [1, 2, 3];
    arr.join('');

    console.log(arr);


})(window, document);




