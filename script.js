const menu=document.querySelector(".menu-toggle"),links=document.querySelector(".nav-links");
menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
// C Programming Training gallery
const lightbox = document.getElementById("trainingLightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const galleryButtons = [...document.querySelectorAll(".gallery-thumb")];
const openGalleryButton = document.querySelector(".open-gallery");
const closeButtons = document.querySelectorAll("[data-close-lightbox]");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");
let galleryIndex = 0;

function showTrainingPhoto(index) {
  if (!galleryButtons.length) return;
  galleryIndex = (index + galleryButtons.length) % galleryButtons.length;
  const button = galleryButtons[galleryIndex];
  lightboxImage.src = button.dataset.full;
  lightboxImage.alt = button.querySelector("img")?.alt || "C programming training photo";
}
function openTrainingGallery(index = 0) {
  if (!lightbox) return;
  showTrainingPhoto(index);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeTrainingGallery() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
galleryButtons.forEach((button,index) => button.addEventListener("click",()=>openTrainingGallery(index)));
if (openGalleryButton) openGalleryButton.addEventListener("click",()=>openTrainingGallery(0));
closeButtons.forEach(button=>button.addEventListener("click",closeTrainingGallery));
if (prevButton) prevButton.addEventListener("click",()=>showTrainingPhoto(galleryIndex-1));
if (nextButton) nextButton.addEventListener("click",()=>showTrainingPhoto(galleryIndex+1));
document.addEventListener("keydown",e=>{
  if (!lightbox?.classList.contains("open")) return;
  if (e.key==="Escape") closeTrainingGallery();
  if (e.key==="ArrowLeft") showTrainingPhoto(galleryIndex-1);
  if (e.key==="ArrowRight") showTrainingPhoto(galleryIndex+1);
});
