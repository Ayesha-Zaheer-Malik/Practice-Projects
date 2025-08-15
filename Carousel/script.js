<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  let index = 0;
=======
document.addEventListener("DOMContentLoaded", function() {
  let path=document.querySelector(".carousel-track");
let len=path.children.length;
console.log(path);
for(let i=0; i<len;i++)
{
window.next = function() {
    i++;
    if (i >= len) i = 0; // loop back
    path.style.transform = `translateX(-${i * 1000}px)`;
  };

>>>>>>> e30e7e9 (Add calculator project)

  function showSlide(i) {
    track.style.transform = `translateX(-${i * 100}%)`;
  }

  function next() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  window.next = next;
  window.prev = prev;

  setInterval(next, 4000);
});
<<<<<<< HEAD
=======




>>>>>>> e30e7e9 (Add calculator project)
