let featureLinks = document.querySelectorAll('.features-item__link')
let featureItems = document.querySelectorAll('.features-list-categories__item')


featureLinks.forEach((link, i) => link.addEventListener('click', ()=> {
    featureLinks.forEach(fLink => fLink.parentElement.setAttribute('aria-checked', 'false'))
    link.parentElement.setAttribute('aria-checked', 'true')
    featureItems.forEach(item => item.setAttribute('aria-hidden', 'true'))
    featureItems[i].setAttribute('aria-hidden', 'false')
}))