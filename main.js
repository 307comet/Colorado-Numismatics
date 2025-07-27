var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

function checkPswd() {
  var confirmPassword = "42069"; // The correct password
  var pswdInput = document.getElementById("pswd");
  if (!pswdInput) {
    alert("Combination input not found.");
    return;
  }
  var password = pswdInput.value;
if (password === confirmPassword) {
    window.location.href = "vaultopen.html";
  } else {
    alert("Combinations do not match.");
  }
}
