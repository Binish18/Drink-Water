const smallCups =document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup , index)=>{
//   console.log(index)
cup.addEventListener('click' , () => highlightedCups(index))
})


function highlightedCups(index){
  if(smallCups[index].classList.contains('full') &&  !smallCups[index].nextElementSibling.classList.contains('full')){
    index--
  }
 smallCups.forEach((cup,index2)=>{
    if(index2 <= index){
          cup.classList.add('full')
    }else {
        cup.classList.remove('full')
    }

 })
 updateBigCup()
}


function updateBigCup(){
    // the number of filled glasess 
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // total cups 
    const total = smallCups.length
    console.log(total)

    // hide % if its empty 
    if(fullCups === 0){
     percentage.style.visibility = 'hidden'
     percentage.style.height = 0
    }
    else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/total * 330}px`
        percentage.innerText = `${fullCups/total * 100}%`
    }

    if(fullCups === total){
        remained.style.visibility='hidden'
        remained.style.height=0
    }else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}