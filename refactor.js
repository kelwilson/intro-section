const openMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close-menu')
const mobileNav = document.querySelector('.mobile-nav')
const firstLists = document.querySelectorAll('.first-nav-list')
const secondLists = document.querySelectorAll('.second-nav-list')
const featureItems = document.querySelectorAll('.features-item')
const companyItems = document.querySelectorAll('.company-item')
const arrowUps = document.querySelectorAll('.arrow-up')
const arrowDowns = document.querySelectorAll('.arrow-down')
const arrowUps1 = document.querySelectorAll('.arrow-up1')
const arrowDowns1 = document.querySelectorAll('.arrow-down1')
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')
// const

function open() {
    mobileNav.classList.toggle('hidden')
    openMenu.classList.toggle('hidden') 
    overlay.classList.toggle('hidden')
    // if (mobileNav.style.display === '' || mobileNav.style.display === 'none') 
    // mobileNav.style.display === 'flex'
}

function close() {
    mobileNav.classList.toggle('hidden')
    openMenu.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
}

// function exist1() {
//     featureItems.forEach(item => {
//         if (item.style.display === 'flex') {
//               item.style.display='none' 
//         }
      
//      else {
//         item.style.display = 'flex'     
//      }   
//     })
// }

// function exist2() {
//     if(this.className === )
//     companyItems.forEach(item => {
//         if (item.style.display === 'flex'){
//             item.style.display='none'
//         } else {
//            item.style.display = 'flex'     
            
//             }
        
//     } )}
   


function displayList() {
    console.log('yeah');
   
   Array.from(featureItems).forEach(item => {
       if (item.style.display == '' || item.style.display == 'none') {
            
           item.style.display = 'flex'     
       } else {
           item.style.display = 'none'
       }
    
   })
   arrowUps.forEach(arrow => arrow.classList.toggle('hidden'))
   arrowDowns.forEach(arrow => arrow.classList.toggle('hidden'))
}

function displayList2() {
    companyItems.forEach(item => {
        if (item.style.display == '' || item.style.display == 'none') {
            
            item.style.display = 'flex'     
        } else {
            item.style.display = 'none'
         }
    })
    arrowUps1.forEach(arrow => arrow.classList.toggle('hidden'))
    arrowDowns1.forEach(arrow => arrow.classList.toggle('hidden'))
}

// body.addEventListener('click', exist1)
// body.addEventListener('click', exist2)
openMenu.addEventListener('click', open)
closeMenu.addEventListener('click', close)
overlay.addEventListener('click', close)
firstLists.forEach(first => first.addEventListener('click', displayList))
secondLists.forEach(second => second.addEventListener('click', displayList2))

//wanted to use this keyword to check the class of the clicked element
//  if (this.className === "features-item") {
 
//      arrowUps.forEach(arrow => arrow.classList.toggle('hidden'))
//      arrowDowns.forEach(arrow => arrow.classList.toggle('hidden'))
//     }