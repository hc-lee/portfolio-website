'use strict';


/* -------- Scroll Reveal Animation ---------- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const changeNavBackground = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelector('.navbar').style.backgroundColor = 'transparent';
            document.querySelector('.navbar').style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0.2)';
        } else {
            document.querySelector('.navbar').style.backgroundColor = '#f3f3f3';
            document.querySelector('.navbar').style.boxShadow = '0px 4px 6px -1px rgba(0, 0, 0, 0.2)';
        }
    });
});

const changeNavLinkColor = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('not-intersecting'));
        } else {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.add('not-intersecting'));
        }
    });
});

const changeNavBrandColor = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.navbar-brand').forEach(link => link.classList.remove('not-intersecting'));
        } else {
            document.querySelectorAll('.navbar-brand').forEach(link => link.classList.add('not-intersecting'));
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const homeSection = document.getElementById('home');
changeNavBackground.observe(homeSection);
changeNavLinkColor.observe(homeSection);
changeNavBrandColor.observe(homeSection);
