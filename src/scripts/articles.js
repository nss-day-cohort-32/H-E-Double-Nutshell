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
  }
};

export default articleAPI;
