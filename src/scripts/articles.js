import articlesDOMBuild from "./articlesDOMBuild";

const articleAPI = {
  working() {
    console.log("it's working");
  },
  getAllArticles(userId) {
    fetch(`http://localhost:8088/articles?userId=${userId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      })
      ;
  },
  getAllFriendArticles(userId) {
    fetch(`http://localhost:8088/articles?userId=${userId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  },
  articlesToDom() {
    articleAPI.getAllArticles().then(allArticles => {
      let articlesDocFragment = document.createDocumentFragment();
      //sorts events by date
      allArticles = allArticles.sort(function(a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;
      });
      allArticles.forEach(articleObj => {
        let articlesHTML = articlesDOMBuild.eventsBuilder(articleObj);
        articlesDocFragment.appendChild(articlesHTML);
      });
      let articlesOutputArticle = document.querySelector("#articles__output");
      while (articlesOutputArticle.firstChild) {
        articlesOutputArticle.removeChild(articlesOutputArticle.firstChild);
      }
      articlesOutputArticle.appendChild(articlesDocFragment);
    });
  },
};

export default articleAPI;
