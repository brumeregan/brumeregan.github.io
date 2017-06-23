(function (window, document) {

    // Common article class settings with url and some global class variable

    function Articles() {
        this.articles = {};
        this.random = false;
        this.menu = document.getElementById('nav');
        this.pagination = document.querySelector('.page-navigation');
        this.currentPage = 1;
        this.settings = {
            apiUrl: 'https://rss-deploy.herokuapp.com/rss/feed/habr/hub/{{hubId}}/'
        };
        this.domElems = {
            articleTemplate: document.getElementsByClassName('article_template')[0]
        };
    }

    Articles.prototype.init = function (param) {
        if (param === 'random') {
            this.random = true;
            this.counter = 1;
        } else if (parseInt(param, 10)) {
            this.counter = parseInt(param, 10);
        }

        var __self = this;

        this.getData();

        window.addEventListener('hashchange', function (e) {
            __self.getData();
        });

        this.currentLink();
        this.makePagination();
    };

    // Method for fetch data from other server
    Articles.prototype.getData = function () {
        var hash = window.location.hash.substring(1);
        if (hash === '') {
            hash = 'css';
        }

        var rssUrl = this.settings.apiUrl.replace('{{hubId}}', hash);
        var __self = this;

        fetch(rssUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                __self.articles = data.entries;
                __self.update();
            })
            .catch(function (err) {
                console.log(err)
            });
    };

    // Rerender blocks with articles
    Articles.prototype.update = function (count) {
        var articlesHtml = this.generateAll(count),
            articlesDomElem = document.querySelectorAll('.articles')[0];


        articlesDomElem.innerHTML = '';

        articlesDomElem.appendChild(articlesHtml);
    };

    // Filter what article user need to see.
    Articles.prototype.generateAll = function (page) {
        var __self = this;
        var startPage = (page || 0);

        if (page > 0) {
            startPage = (page - 1) * this.counter;
        }

        // Resolve multiple insertion issue
        var articlesHtml = document.createDocumentFragment();

        var articles;

        if (this.random) {
            var articleId = Math.floor(Math.random() * this.articles.length);
            articles = [this.articles[articleId]]
        } else if (this.counter) {
            articles = this.articles.slice(startPage, this.counter * this.currentPage);
        }
        else {
            articles = this.articles;
        }

        articles.forEach(function (item) {
            articlesHtml.appendChild(__self.generateArticle(item));
        });

        return articlesHtml;
    };

    // Make html srtucture of each article according to template
    Articles.prototype.generateArticle = function (itemData) {
        var newArticle = this.domElems.articleTemplate.cloneNode(true);

        newArticle.classList.remove('article_template');

        newArticle.getElementsByClassName('post-heading')[0].innerHTML = itemData.title;
        newArticle.getElementsByClassName('excerpt')[0].innerHTML = itemData.contentSnippet;
        newArticle.getElementsByClassName('article__date')[0].innerHTML = this.convertDate(itemData.pubDate);

        newArticle.getElementsByClassName('post-heading')[0].setAttribute('href', itemData.link);
        newArticle.getElementsByClassName('action-button')[0].setAttribute('href', itemData.link);

        return newArticle;
    };

    Articles.prototype.convertDate = function (dateStr) {
        var date = dateStr.split(" GMT");
        return date;
    };

    // Behavior of links
    Articles.prototype.currentLink = function () {
        var items = this.menu.querySelectorAll('li');
        var elems = [].map.call(items, function (item) {
            item.addEventListener('click', function (e) {

                var arrayItems = Array.from(items);
                arrayItems.forEach((item) => {
                    item.classList.remove('current-menu-item');
                });

                this.classList.add('current-menu-item');
            });
            return item;
        })
    };

    // Pagination method.
    // If older or news button pressed, change current page and update.
    Articles.prototype.makePagination = function () {
        var itemsPage = this.pagination.querySelectorAll('div');
        var __self = this;
        [].map.call(itemsPage, function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                var clickedPage = this.innerText;

                if (isNaN(parseInt(clickedPage))) {

                    if (clickedPage.includes('OLDER') && (parseInt(__self.currentPage) !== 4)) {
                        __self.currentPage += 1;
                        __self.update(__self.currentPage);

                    } else if (clickedPage.includes("NEWER") && (__self.currentPage !== 1)) {
                        __self.currentPage -= 1;
                        __self.update(__self.currentPage);
                    }

                } else {
                    __self.currentPage = parseInt(clickedPage);
                    __self.update(__self.currentPage);
                }
            })
        });

    };

    var articles = new Articles();

    articles.init(5);


})(window, document);



