## RSS reader

RSS feeder with JS. 

It based on vanilla javascript using prototype style.

Download this folder.

As I userd ajax for get data, to see page with result you need to set up localhost or just use IDE like WebStorm.
Then open page blog.html.

### Navigation
You can change category.
Also bottom pagination shows the appropriate data.


### RSS API
```
https://rss-deploy.herokuapp.com/rss/feed/habr/hub/css/

https://rss-deploy.herokuapp.com/rss/feed/smash/hub/html/

https://rss-deploy.herokuapp.com/rss/url/?feedUrl=http%3A%2F%2Ffeeds.frontender.info%2FFrontenderMagazine

```

###Features
```js
articles.init(5);  - return 5 first elems
articles.init('random');  - return 1 random elem
```
