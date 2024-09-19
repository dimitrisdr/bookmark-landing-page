// variables

const invalidRegexEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

let featureLinks = document.querySelectorAll('.features-item__link')
let featureItems = document.querySelectorAll('.features-list-categories__item')
let form = document.querySelector('.form')
let emailInput = document.querySelector('.form-control__email-input')
let errorStateElements = document.querySelectorAll('.error-icon, .error-msg')

// functions

function checkIfEmailValid(email, regexPattern=invalidRegexEmailPattern){
    return regexPattern.test(email)
}

// event listeners

featureLinks.forEach((link, i) => link.addEventListener('click', ()=> {
    featureLinks.forEach(fLink => fLink.parentElement.setAttribute('aria-checked', 'false'))
    link.parentElement.setAttribute('aria-checked', 'true')
    featureItems.forEach(item => item.setAttribute('aria-hidden', 'true'))
    featureItems[i].setAttribute('aria-hidden', 'false')
}))


form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const isEmailValid = checkIfEmailValid(data['email']) && ''
    errorStateElements.forEach(el => el.setAttribute('aria-hidden', (isEmailValid).toString()))
})