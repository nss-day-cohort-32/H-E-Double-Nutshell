/*
    Author: Eliot Clarke
    Name: userSearch.js
    Purpose: functions for searching the user and friending
*/

const userAPI = "http://localhost:8088/users"

const searchInput = document.querySelector("#user__search");
const searchButton = document.querySelector("#user__search__submit")

searchButton.addEventListener("click", () => {
  let searchName = searchInput.value
  let userId = Number(sessionStorage.getItem("userId"));
  console.log(userId);

  userSearchAPI.searchUsers(searchName);
})


const userSearchAPI = {
  fetchUsers: function () {
    return fetch(`${userAPI}`)
      .then(response => response.json())
  },
  getUser: function (id) {
    return fetch(`${userAPI}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
  },
  searchUsers: function (searchName) {
    this.fetchUsers()
      .then(users => {
        users.forEach(user => {
          if (searchName === user.userName) {
            console.log(user.id);
          }
        })
      })
  }
}

export default userSearchAPI