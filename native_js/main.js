let name = ''
let descryption = ''
let frequency = ''
let count = 0
let sum = 0
let res = ""

const nameInput = document.querySelector("#habitName")
const descryptionInput = document.querySelector("#descryption")
const frequencySelect = document.querySelector("#frequency")
const countInput = document.querySelector("#count")
const sumElement = document.querySelector("#sum")

setSum()

function nameInputHandler(event){
    name = event.target.value
    //console.log('name:',name)
}

nameInput.addEventListener('input', nameInputHandler)

function descriptionChangeHandler(event){
    descryption = event.target.value
    //console.log('desc:', descryption)
}

descryptionInput.addEventListener('input', descriptionChangeHandler)

function frequencyChange(event){
    if (event.target.value == undefined){
        frequency = 0
    }
    else {
        frequency = parseInt(event.target.value)
    }
    //console.log('frequency:', frequency)
    setSum()
}

frequencySelect.addEventListener('change', frequencyChange)

function countInputHandler(event){
    if (event.target.value == undefined || NaN){
        count = 0
    }
    else {
       count = parseInt(event.target.value)
    }
    //console.log('count:', count)
    setSum()
}

countInput.addEventListener('input', countInputHandler)

function setSum(){
    let res = "Не подсчитано"
    if(frequency == undefined){
            res = "Не указана частота"
    }
    else if (count == undefined){
        res = "Не указано количество повторений"
    }
    else {
        res = (frequency * count).toString()
    }
    
    sumElement.textContent = res
    //console.log(res)
}