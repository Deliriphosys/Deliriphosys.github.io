let slideIndex = 1;

// Function to show the current slide

function showSlide(n) {

  let slides = document.querySelectorAll(".carousel-item");

  if (n > slides.length) { slideIndex = 1 }

  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";

  }

  slides[slideIndex - 1].style.display = "block";
}

// Function to go to the previous slide

function prevSlide() {

  showSlide(slideIndex -= 1);

}

// Function to go to the next slide

function nextSlide() {

  showSlide(slideIndex += 1);

}

// Initialize the carousel by showing the first slide

showSlide(slideIndex);
// Store and Wallpaper

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

startAutoSlide()
// home

function move(){
    console.log('Berhasil')
    window.location.href = './home.html'
}

function regis() {
    console.log('Berhasil')
    window.location.href = './regis.html'
}


//fokusnya di wallpaper.html applies to all intinya
function setWallpaperBackground(imageUrl) {
  const wall = document.getElementById('wall');
  if (wall) {
      wall.style.backgroundImage = `url(${imageUrl})`;
  }

  localStorage.setItem('selectedWallpaper', imageUrl);
}


function loadWallpaper() {
  const selectedWallpaper = localStorage.getItem('selectedWallpaper');
  if (selectedWallpaper) {
      setWallpaperBackground(selectedWallpaper);
  }
}

function selectWallpaper(imageUrl) {
  setWallpaperBackground(imageUrl);
}

document.addEventListener('DOMContentLoaded', function() {
  loadWallpaper();
  setWallpaperBackground(localStorage.getItem('selectedWallpaper'));
});
