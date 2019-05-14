console.log("page working")
console.log("sample user: Dan, password:Dan")

const userAPI = {
  postNewUser(newUser) {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
  },
}
const login = {
  ActivateUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginbtn = document.getElementById("login_btn");
    const successbtn = document.getElementById("success_btn")
    const hidbox = document.getElementById("hiddenhome")
    const logbox = document.getElementById("loginbox")

    fetch("http://localhost:8088/users").then(response => {
        return response.json()
      })
      .then(all => {
        let usersActive = 1;
        all.forEach(user => {
          if (username === user.userName && password === user.password) {
            console.log(`${user.userName}${user.id} is active`)
            loginbtn.style.display = "none"
            successbtn.style.display = "block"
            //----Session Storage---
            sessionStorage.setItem("userId", user.id)
            //let userId = sessionStorage.getItem("userId");
            sessionStorage.setItem("userName", user.userName)
            setTimeout(function () {
              logbox.style.display = "none"
              hidbox.style.display = "block"
            }, 3000);
          } else if (usersActive === all.length) {
            alert("Username/password invalid")
          } else {
            usersActive++
          };
        })
      })
  },

  loginActivate() {
    const loginbtn = document.getElementById("login_btn");
    loginbtn.addEventListener("click", login.ActivateUser);
  },
  registerUser() {
    let registerBtn = document.getElementById("register_btn")
    registerBtn.addEventListener("click", login.registerData)
    let regbox = document.getElementById("hideregister")
    let logbox = document.getElementById("loginbox")
    const reglink = document.getElementById("registerlink")
    let cancelButton = document.getElementById("cancel_btn")

    function replaceall(olditem, newitem) {
      return function () {
        olditem.style.display = "none";
        newitem.style.display = "block";
      }
    }
    reglink.addEventListener("click", replaceall(logbox, regbox));
    cancelButton.addEventListener("click", replaceall(regbox, logbox));
  },
  registerData() {
    let newUser = document.getElementById("newusername").value;
    let newPassword = document.getElementById("newpassword").value;
    let newEmail = document.getElementById("newemail").value;
    fetch("http://localhost:8088/users")
      .then(response => response.json())
      .then(all => {
        const existingUser = all.find(user => {
          return newUser === user.userName || newEmail === user.email
        })
        if (existingUser !== undefined) {
          alert(`The username: ${newUser} is not avaliable, Please try again`)
        } else if (newUser === "" || newPassword === "" || newEmail === "") {
          alert("Fill in the Blanks!")
        } else if (
          newEmail.indexOf("@", 0) < 0) {
          alert("Invalid E-mail!")
        } else {
          alert(`Success! ${newUser} is now registered, Please Log in...`)
          let newEntry = {
            username: newUser,
            email: newEmail,
            password: newPassword
          };
          userAPI.postNewUser(newEntry)
        }
      })
  }
}
export default login