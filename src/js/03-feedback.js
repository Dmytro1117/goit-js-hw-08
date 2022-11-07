// import moduleName from "lodash.throttle";

const TEXT = "mess"
const EMAIL = "ema"
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textEl = document.querySelector('.feedback-form textarea');

savedTextInput()
savedEmailInput()




formEl.addEventListener('submit', handleForm);
emailEl.addEventListener('input', _.throttle(handleEmailInput, 500));
// emailEl.addEventListener('input', throttle(handleEmailInput, 500));
textEl.addEventListener('input', _.throttle(handleTextInput, 500));
// textEl.addEventListener('input', throttle(handleTextInput, 500));


function handleForm(e) {
  e.preventDefault();
    e.target.reset();
    localStorage.removeItem(TEXT)
     localStorage.removeItem(EMAIL)
}

function handleEmailInput(e) {
     const em = e.target.value;
  localStorage.setItem(EMAIL, em);
  console.log(em);
}

function handleTextInput(e) {
  const message = e.target.value;
  localStorage.setItem(TEXT, message);
  console.log(message);
}

function savedTextInput() {
    const savedText = localStorage.getItem(TEXT);
    if (savedText) {
        textEl.value = savedText
        console.log(savedText);
    } 
}

function savedEmailInput() {
    const savedEmail = localStorage.getItem(EMAIL);
    if (savedEmail) {
        emailEl.value = savedEmail
        console.log(savedEmail);
    } 
}





const objec = {}
console.log(objec)

formEl.addEventListener('input', e => {
    const rrr = e.target.value;
    localStorage.setItem(TEXT, message);
    const objec = JSON.parse(json);

    objec[e.target.name] = e.target.value
    console.log(objec)
   
});
