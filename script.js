const menu=document.querySelector(".menu-toggle"),links=document.querySelector(".nav-links");
menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
// C Programming Training gallery
const trainingLightbox = document.getElementById("trainingLightbox");
const trainingImage = document.querySelector(".lightbox-image");
const trainingThumbs = [...document.querySelectorAll(".gallery-thumb")];
const trainingOpen = document.querySelector(".open-gallery");
const trainingClose = document.querySelectorAll("[data-close-lightbox]");
const trainingPrev = document.querySelector(".lightbox-prev");
const trainingNext = document.querySelector(".lightbox-next");
let trainingIndex = 0;

function showTrainingPhoto(index) {
  if (!trainingThumbs.length) return;
  trainingIndex = (index + trainingThumbs.length) % trainingThumbs.length;
  const button = trainingThumbs[trainingIndex];
  trainingImage.src = button.dataset.full;
  trainingImage.alt = button.querySelector("img")?.alt || "C programming training photo";
}
function openTrainingGallery(index = 0) {
  if (!trainingLightbox) return;
  showTrainingPhoto(index);
  trainingLightbox.classList.add("open");
  trainingLightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeTrainingGallery() {
  if (!trainingLightbox) return;
  trainingLightbox.classList.remove("open");
  trainingLightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
trainingThumbs.forEach((button,index) => button.addEventListener("click",()=>openTrainingGallery(index)));
if (trainingOpen) trainingOpen.addEventListener("click",()=>openTrainingGallery(0));
trainingClose.forEach(button=>button.addEventListener("click",closeTrainingGallery));
if (trainingPrev) trainingPrev.addEventListener("click",()=>showTrainingPhoto(trainingIndex-1));
if (trainingNext) trainingNext.addEventListener("click",()=>showTrainingPhoto(trainingIndex+1));
document.addEventListener("keydown",e=>{
  if (!trainingLightbox?.classList.contains("open")) return;
  if (e.key==="Escape") closeTrainingGallery();
  if (e.key==="ArrowLeft") showTrainingPhoto(trainingIndex-1);
  if (e.key==="ArrowRight") showTrainingPhoto(trainingIndex+1);
});
