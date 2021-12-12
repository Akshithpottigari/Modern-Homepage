const searchBtn = document.querySelector('.search-btn')
const closeBtn = document.querySelector('.close-btn')
const searchBox = document.querySelector('.search-box')
const navBtnContainer = document.querySelector('.nav-btn-container')



searchBtn.addEventListener('click', ()=>{
    searchBox.classList.add('active')
    navBtnContainer.classList.add('active')
})

closeBtn.addEventListener('click', ()=>{
    searchBox.classList.remove('active')
    navBtnContainer.classList.remove('active')
})