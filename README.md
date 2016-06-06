# sheetapi
<img src="https://travis-ci.org/ivansabik/sheetapi.svg?branch=master"/>

Google spreadsheet add-on to get data from REST APIs

<img width="700px" src="http://g.recordit.co/eersP3xKmv.gif"/>

### Options

- API URL as in http://localhost/api/v1 only suports GET requests.
- Response element with data (optional). For nested elements you can use "=>", for example if response looks like this:

```javascript
{
  "responseData": {
    "feed": {
      "feedUrl": "http://news.google.com/news?output=rss",
      "title": "Top Stories - Google News",
      "link": "http://news.google.com/news?hl=en&amp;pz=1&amp;ned=us",
      "author": "",
      "description": "Google News",
      "type": "rss20",
      "entries": [
        {
          "title": "Science|Do Gorillas Even Belong in Zoos? Harambe's Death Spurs Debate - New York Times",
          "link": "http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNEwSZGFMobf970iWEfunmGDUb482w&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779127625117&ei=De1VV7CrFtO63gHO7YegDw&url=http://www.nytimes.com/2016/06/07/science/gorilla-shot-harambe-zoo.html",
          "author": "",
          "publishedDate": "Mon, 06 Jun 2016 13:04:06 -0700",
          "contentSnippet": "New York TimesScience|Do Gorillas Even Belong in Zoos? Harambe&#39;s Death Spurs DebateNew York TimesHarambe, the gorilla who ...",
          "categories": [
            "Top Stories"
          ]
        },
        {
          "title": "Clinton calls for Democratic unity as she aims to clinch nomination - Reuters",
          "link": "http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNF-bAE-ffx6xPAWsMYz7buCtQhEdA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779128409212&ei=De1VV7CrFtO63gHO7YegDw&url=http://www.reuters.com/article/us-usa-election-clinton-idUSKCN0YS0Y4",
          "author": "",
          "publishedDate": "Mon, 06 Jun 2016 14:21:00 -0700",
          "contentSnippet": "ReutersClinton calls for Democratic unity as she aims to clinch nominationReutersLOS ANGELES Hillary Clinton called for party ...",
          "categories": [
            "Top Stories"
          ]
        },
        {
          "title": "Outrage in Stanford Rape Case Over Light Sentence for Attacker and Statement by His Father - New York Times",
          "link": "http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNFErUqtst-vX3MmmM03CHxCHPC7EQ&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779125736033&ei=De1VV7CrFtO63gHO7YegDw&url=http://www.nytimes.com/2016/06/07/us/outrage-in-stanford-rape-case-over-dueling-statements-of-victim-and-attackers-father.html",
          "author": "",
          "publishedDate": "Mon, 06 Jun 2016 14:33:30 -0700",
          "contentSnippet": "New York TimesOutrage in Stanford Rape Case Over Light Sentence for Attacker and Statement by His FatherNew York TimesA sexual ...",
          "categories": [
            "Top Stories"
          ]
        },
        {
          "title": "US Navy bans booze in Japan - CNN",
          "link": "http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNHKahRhjrjeOkpMwCf8ANCfdak-0A&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779127151290&ei=De1VV7CrFtO63gHO7YegDw&url=http://www.cnn.com/2016/06/06/politics/us-navy-alcohol-ban-japan/",
          "author": "",
          "publishedDate": "Mon, 06 Jun 2016 04:54:38 -0700",
          "contentSnippet": "CNNUS Navy bans booze in JapanCNN(CNN) All U.S. Navy sailors in Japan are banned from drinking alcohol and restricted to base ...",
          "categories": [
            "Top Stories"
          ]
        }
      ]
    }
  },
  "responseDetails": null,
  "responseStatus": 200
}
```

Then maybe you want to put in `responseData=>feed=>entries` to get all entries.

- Insert results in current sheet or create new sheet.
