const fieldset = document.querySelector('fieldset')
const valueDelay = document.querySelector('[name="delay"]')
const form = document.querySelector('.form')
const radioBtns = document.querySelectorAll('[name="state"]')
let selectedValue = null
for (const radio of radioBtns) {
    if (radio.checked) {
        selectedValue = radio.value
        break
    }
}


const makePromise = ({delay, selectedValue}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedValue === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delay}ms`)
            } else {
                reject(`❌ Rejected promise in ${delay}ms`)
            }
        }, delay)
    })

}


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const delay = Number(valueDelay.value)
    


    makePromise({ delay, selectedValue })
    .then(value => console.log(value)) 
	.catch(error => console.log(error))
})


