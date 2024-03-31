let out = document.querySelector(".out");
let sentence = "Ennyn Durin aran Moria:\n Pedo Mellon a Minno!";
let arr = sentence.split("");

function d3() {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      out.textContent += sentence[i];
    }, i * 90);
  }
}

d3();

//Login try to get in:)

let button = document.querySelector(".btn");
let out2 = document.querySelector(".out2");

async function generateHash() {
  let login = document.querySelector(".login");
  let password = document.querySelector(".psw");

  // Konvertieren von Eingabestring in ein Byte-Array
  const encoder = new TextEncoder();
  const log = encoder.encode(login.value);
  const psw = encoder.encode(password.value);

  // Erzeugen von SHA-256-Hash des Byte-Arrays
  const hashBuffer1 = await crypto.subtle.digest("SHA-256", log);
  const hashBuffer2 = await crypto.subtle.digest("SHA-256", psw);

  // Konvertieren von Hash-Puffer in ein Byte-Array
  const hashArray1 = Array.from(new Uint8Array(hashBuffer1));
  const hashArray2 = Array.from(new Uint8Array(hashBuffer2));

  // Konvertieren von Byte-Array in einen hexadezimalen String
  const hashHex1 = hashArray1
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  const hashHex2 = hashArray2
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  if (
    hashHex1 ==
      "cde48537ca2c28084ff560826d0e6388b7c57a51497a6cb56f397289e52ff41b" &&
    hashHex2 ==
      "cde48537ca2c28084ff560826d0e6388b7c57a51497a6cb56f397289e52ff41b"
  ) {
    console.log("success");
    window.location.href = "./welcome.html";
  } else {
    console.log("huj")
  }
}

button.addEventListener("click", generateHash);
