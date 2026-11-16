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

// Downloadable learning notes and teachers' resources.
(function renderPortfolioResources() {
  const resourceData = window.PORTFOLIO_RESOURCES || { notes: [], teachers: [], learningPlans: [] };

  function makeCard(item, category) {
    const card = document.createElement('article');
    card.className = 'resource-card reveal';

    const type = document.createElement('span');
    type.className = 'resource-type';
    type.textContent = category === 'notes' ? (item.level || 'Learning notes') : (item.type || (category === 'plans' ? 'Learning plan' : 'Teacher resource'));

    const title = document.createElement('h3');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    const level = document.createElement('span');
    level.className = 'resource-level';
    level.textContent = category === 'notes' ? 'PDF learning material' : (category === 'plans' ? 'For employers, trainers and educators' : 'For trainers and educators');

    const link = document.createElement('a');
    link.className = 'resource-download';
    const target = item.drive && item.drive.trim() ? item.drive.trim() : (item.file || '');
    if (target) {
      link.href = target;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = item.drive ? 'Open Google Drive ↗' : (category === 'plans' ? 'View / Download Plan ↓' : 'Download / View PDF ↓');
      if (!item.drive && target.toLowerCase().endsWith('.pdf')) link.setAttribute('download', '');
    } else {
      link.href = '#';
      link.classList.add('disabled');
      link.setAttribute('aria-disabled', 'true');
      link.textContent = 'Coming soon';
      link.addEventListener('click', event => event.preventDefault());
    }

    card.append(type, title, description, level, link);
    return card;
  }

  const notesGrid = document.getElementById('notesGrid');
  const teachersGrid = document.getElementById('teacherResourcesGrid');
  const learningPlansGrid = document.getElementById('learningPlansGrid');
  if (notesGrid) resourceData.notes.forEach(item => notesGrid.appendChild(makeCard(item, 'notes')));
  if (teachersGrid) resourceData.teachers.forEach(item => teachersGrid.appendChild(makeCard(item, 'teachers')));
  if (learningPlansGrid) resourceData.learningPlans.forEach(item => learningPlansGrid.appendChild(makeCard(item, 'plans')));
  document.querySelectorAll('.resource-card.reveal').forEach(card => {
    if (typeof observer !== 'undefined') observer.observe(card);
    else card.classList.add('visible');
  });
})();
