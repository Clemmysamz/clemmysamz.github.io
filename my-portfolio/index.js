let menueIcon = document.querySelector('#menue-icon');
let navbar = document.querySelector('.navbar')
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href"m" + id "]').classList.add('active');
            })
        }
    })
}

menueIcon.onclick = () => {
    menueIcon.classList.toggle("bx-x");
    navbar.classList.toggle('active');
}


let timelineContent1 = document.querySelector('#timeline-content-1');
let timelineContent2 = document.querySelector('#timeline-content-2');
let timelineContent3 = document.querySelector('#timeline-content-3');
let timelineContent4 = document.querySelector('#timeline-content-4');

window.addEventListener('scroll', ()=> {
    if (window.scrollY >= 300){
        timelineContent1.classList.add('timeline-content-scrolled');
    }
    else{
        timelineContent1.classList.remove('timeline-content-scrolled');
    }
})
window.addEventListener('scroll', ()=> {
    if (window.scrollY >= 500){
        timelineContent2.classList.add('timeline-content-scrolleded');
    }
    else{
        timelineContent2.classList.remove('timeline-content-scrolleded');
    }
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 800){
        timelineContent3.classList.add('timeline-content-scrollededd');
    }
    else{
        timelineContent3.classList.remove('timeline-content-scrollededd');
    }
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 1000){
        timelineContent4.classList.add('timeline-content-scrollededdd');
    }
    else{
        timelineContent4.classList.remove('timeline-content-scrollededdd');
    }
})
