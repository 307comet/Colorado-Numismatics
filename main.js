function typeWriterEffect(element, text, speed = 60) {
  element.innerHTML = "";
  element.style.display = "block";
  element.style.marginLeft = "auto";
  element.style.marginRight = "auto";
  element.style.width = "300px";
  element.style.textAlign = "left";
  element.style.color = "#D3BC8D";
  let chars = text.split("");
  let i = 0;
  function typeChar() {
    if (i < chars.length) {
      element.innerHTML += chars[i];
      i++;
      setTimeout(typeChar, speed);
    }
  }
  typeChar();
}

var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      // Use typeWriterEffect on the content
      typeWriterEffect(content, content.getAttribute("data-guide") || content.textContent);
      // Justify left
      content.style.textAlign = "left";
      // Set max width to 300px
      content.style.maxWidth = "300px";
    }
  });
}

function checkCombination() {
  // Define the correct combination
  var combination = ["81", "18", "76"];
  // Get the input elements
  var pswd0Input = document.getElementById("pswd0");
  var pswd1Input = document.getElementById("pswd1");
  var pswd2Input = document.getElementById("pswd2");

  // Check if all inputs exist
  if (!pswd0Input || !pswd1Input || !pswd2Input) {
    alert("That combination did not work.");
    return;
  }

  // Get the values
  var password0 = pswd0Input.value;
  var password1 = pswd1Input.value;
  var password2 = pswd2Input.value;

  // Check if all passwords match the combination
  if (
    password0 === combination[0] &&
    password1 === combination[1] &&
    password2 === combination[2]
  ) {
    window.location.href = "vault_open.html";
  } else {
    alert("That combination did not work.");
  }
}
