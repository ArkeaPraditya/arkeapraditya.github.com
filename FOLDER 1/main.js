var sliderCounter = 0;
var sliderContent = [
  "aku hanyalah seorang anak",
  "yang hanya ingin",
  "mencari kebahagiaanku",
  "tapi kenapa",
  "seolah olah",
  "semua orang membenciku",
  "tidak ada seorangpun",
  "yang dapat kupercayai",
  "selain diriku sendiri",
  "orang yang kupercayai sekalipun",
  "ternyata membohongiku",
  "semua orang menganggapku",
  "sebagai musuh",
  "musuh dan musuh",
  "aku menelusuri",
  "orang yang mengintaiku",
  "dengan bakat yang kumiliki",
  "dan hasil",
  "lebih dari dugaanku",
  "banyak orang yang mengintaiku",
  "dengan akun fake mereka",
  "aku tersenyum melihat itu",
  "diam sudah kulakukan",
  "menyendiri adalah temanku",
  "meski begitu",
  "aku tetap salah dimata orang",
  "ini adalah kisahku",
  "tanpa rekayasa",
  "dan karangan sekalipun"
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  
  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");
  
  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 4000);
