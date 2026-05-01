let images = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"];
let index = 0;
let slideInterval;

function showPage(pageId) {
  clearInterval(slideInterval);

  document.querySelectorAll(".page").forEach(p => {
    p.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
}

// 🔐 PASSCODE
function checkCode() {
  let code = document.getElementById("code").value;

  if (code === "0208") {
    showPage("page2");
  } else {
    alert("Wrong code 😒");
  }
}

// 🎵 MUSIC
function playMusic() {
  let music = document.getElementById("bgMusic");
  music.volume = 0.25;
  music.play();
}

// 📸 CAMERA + START MUSIC
function takePhoto() {
  let flash = document.getElementById("flash");

  flash.style.opacity = "1";
  setTimeout(() => {
    flash.style.opacity = "0";
    playMusic(); // 👈 music starts here
    showPage("page3");
    startSlideshow();
  }, 200);
}

// 🖼️ SLIDESHOW
function startSlideshow() {
  let slide = document.getElementById("slide");

  slide.src = images[index];

  slideInterval = setInterval(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
  }, 2000);
}

// ➡️ TO LETTER
function goToLetter() {
  showPage("page4");
  typeText();
}

// 💌 LETTER
let text = "Hey Babay,\n\nI know things aren’t always easy for you, especially when it comes to trusting. And that’s okay.\n\nWith me, you don’t have to overthink or question everything. I’m here in a simple, real way.\n\nSuddhu… I’m really glad I have you.\n\nHappy Birthday ❤️";

let i = 0;

function typeText() {
  let el = document.getElementById("typedText");
  el.innerHTML = "";

  let interval = setInterval(() => {
    el.innerHTML += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      showSpecialLine();
    }
  }, 40);
}

// ✨ SPECIAL LINE
function showSpecialLine() {
  let line = document.getElementById("specialLine");
  line.classList.remove("hidden");

  setTimeout(() => {
    line.style.opacity = "1";
  }, 200);
}

// 🎉 FINAL
function goToFinal() {
  showPage("page5");
}