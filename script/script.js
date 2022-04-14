"use strict";
const responsiveBtn = document.querySelector('.menuNavigation__responsiveBtn');
const itemNav = document.querySelector('.menuNavigation__itemNav');
const trialBtn = document.querySelector('.menuNavigation__button');
let iconResponsiveBtn = document.querySelector('.menuNavigation__responsiveBtn i');
responsiveBtn.addEventListener('click', () => {
    itemNav.classList.toggle('activeItemNav');
    // trialBtn.classList.toggle('activeItemNav')
});
