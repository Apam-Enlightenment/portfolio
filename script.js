'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const btnScrollToo = document.querySelector('.btn--scroll-too');
const btnScrollRepo = document.querySelector('.btn-repo');
const repo = document.querySelector('.repo');
const section1 = document.querySelector('.section-1');
const section3 = document.querySelector('.section-3');
const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer){
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, //this is the viewport
  threshold: 0.15, // allows the section visible when it is 15% into the viewers sight
})

allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Scroll To
btnScrollTo.addEventListener('click', function(e){


section1.scrollIntoView({behavior: 'smooth'})
})

btnScrollToo.addEventListener('click', function(e){


section3.scrollIntoView({behavior: 'smooth'})
})

btnScrollRepo.addEventListener('click', function(){
    repo.scrollIntoView({behavior: 'smooth'});
    repo.classList.add('repo-glow');
})

repo.addEventListener('mouseover', function(e){
    repo.classList.remove('repo-glow');
})