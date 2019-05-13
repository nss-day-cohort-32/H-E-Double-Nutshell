const articlesDOMBuild = {
  articlesBuilder(articlesObj) {
    let articlesContainer = document.createElement("div");
    articlesContainer.setAttribute("id", `articles__${articlesObj.id}`);
    let articleNames = document.createElement("h3");
    articleNames.textContent = articlesObj.name;
    let articleDates = document.createElement("p");
    articleDates.textContent = articlesObj.date;
    let articleLocations = document.createElement("p");
    articleLocations.textContent = articlesObj.summary;
    let articleAddress = document.createElement("p");
    articleAddress.textContent = articlesObj.webAddress;
    let articleUpdateButton = document.createElement("button");
    articleUpdateButton.innerHTML = "update article";
    articleUpdateButton.setAttribute("id", `articles__button__${articlesObj.id}`);
    articleUpdateButton.addEventListener("click", function() {
      console.log(`you clicked ${articlesObj.id} button`);
    });
    let outputArticlesArticle = document.querySelector("#articles__output");
    articlesContainer.appendChild(articleNames);
    articlesContainer.appendChild(articleDates);
    articlesContainer.appendChild(articleLocations);
    articlesContainer.appendChild(articleAddress);
    outputArticlesArticle.appendChild(articlesContainer);
    articlesContainer.appendChild(articleUpdateButton);

    return articlesContainer;
  }
};

export default articlesDOMBuild;