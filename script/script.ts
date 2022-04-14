const responsiveBtn = document.querySelector('.menuNavigation--responsiveBtn') as HTMLButtonElement;
const itemNav = document.querySelector('.menuNavigation--itemNav') as HTMLUListElement;
const trialBtn = document.querySelector('.menuNavigation--button') as HTMLButtonElement;

let iconResponsiveBtn = document.querySelector('.menuNavigation--responsiveBtn i') as HTMLIFrameElement;

responsiveBtn.addEventListener('click', () => {
    
    itemNav.classList.toggle('activeItemNav');
    // trialBtn.classList.toggle('activeItemNav')
    
 
})