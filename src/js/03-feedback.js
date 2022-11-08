import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textEl = document.querySelector('.feedback-form textarea');
emailEl.addEventListener('input', throttle((e)=>{console.log(emailEl.value)}, 500));
textEl.addEventListener('input', throttle((e)=>{console.log(textEl.value)}, 500));
formEl.addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();
    e.target.reset();
    localStorage.removeItem(TOTAL)
}

let object = {}

const TOTAL = "allKeys"

formEl.addEventListener('input', e => {
    object[e.target.name] = e.target.value
    const stringifyObject = JSON.stringify(object);
  localStorage.setItem(TOTAL, stringifyObject);
});

savDataFromLocSt()

function savDataFromLocSt() {
  const savedForm = JSON.parse(localStorage.getItem(TOTAL))
  object = savedForm || {}
  
 if (savedForm) {
        emailEl.value = savedForm.email || ""
        textEl.value = savedForm.message || ""
  }
}
