document.getElementById("submit").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const nickname = document.getElementById("nickname").value;
  
    localStorage.setItem("nickname", nickname);
  
    localStorage.setItem("username", username);
  
    if (username && nickname) {
        window.location.href = "../Homepage/Hompage.html";
    }else {
                alert('Please fill in both fields');
             }
    
  });
  
