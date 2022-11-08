import throttle from 'lodash.throttle';

const TEXT = "mess"
const EMAIL = "ema"

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', handleForm);

emailEl.addEventListener('input', throttle(e => {
     const email = e.target.value;
  localStorage.setItem(EMAIL, email);
  console.log(email);
}, 500));

textEl.addEventListener('input', throttle(e => {
     const email = e.target.value;
  localStorage.setItem(TEXT, email);
  console.log(email);
}, 500));



function handleForm(e) {
  e.preventDefault();
    e.target.reset();
    localStorage.removeItem(TOTAL)
}

const object = {}

const TOTAL = "allKeys"

formEl.addEventListener('input', e => {
    object[e.target.name] = e.target.value
    const yyy = JSON.stringify(object);
  localStorage.setItem(TOTAL, yyy);
});

savDataFromLocSt()

function savDataFromLocSt() {
  const savedMesss = JSON.parse(localStorage.getItem(TOTAL))  
  
  // console.log(savedMesss)
  
    if (savedMesss) {
        emailEl.value = savedMesss.email
        textEl.value = savedMesss.message
    } 

}



// =============================================



// function handleEmailInput(e) {
//      const email = e.target.value;
//   localStorage.setItem(EMAIL, email);
//   console.log(email);
// }

// function handleTextInput(e) {
//   const message = e.target.value;
//   localStorage.setItem(TEXT, message);
//   console.log(message);
// }

// function savedTextInput() {
//     const savedText = localStorage.getItem(TEXT);
//     if (savedText) {
//         textEl.value = savedText
//         console.log(savedText);
//     } 
// }

// function savedEmailInput() {
//     const savedEmail = localStorage.getItem(EMAIL);
//     if (savedEmail) {
//         emailEl.value = savedEmail
//         console.log(savedEmail);
//     } 
// }


// savedTextInput()
// savedEmailInput()







// ========================


// const refs = {
//   form: document.querySelector('.feedback-form'),
// };
// // const formEl = document.querySelector('.feedback-form');
// // const inputMail = formEl.elements.name
// // const inputMessage = formEl.elements.message
// // const emailEl = document.querySelector('.feedback-form input');
// // const textEl = document.querySelector('.feedback-form textarea');
// const inputEmail = refs.form.elements.name;
// const inputMessage = refs.form.elements.message;



// refs.form.addEventListener("input", handleInputEmail)

// function handleInputEmail(e) {
//   const email = e.target.value
//   SaveLS("name", name)
// }

// refs.form.addEventListener("input", handleInputTextaria)

// function handleInputTextaria(e) {
//   const textaria = e.target.value
//   SaveLS("message", name)
// }

// function SaveLS(key, val) {
//    localStorage.setItem(key, JSON.stringify(val))
// }

// function loadData() {
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = loadFromLS(key);
//     refs.form.elements[key].value = value;
//   }
// }
// loadData();



// refs.form.addEventListener('submit', e => {
//   e.preventDefault();
//   const result = {};
//   const elems = refs.form.elements;
//   for (let i = 0; i < elems.length; i++) {
//     if (elems[i].name) {
//       localStorage.removeItem(elems[i].name);
//       result[elems[i].name] = elems[i].value;
//     }
//   }

//   console.log(result);
//   refs.form.reset();
// });


// function loadFromLS(key) {
//   const data = localStorage.getItem(key);
//   try {
//     return JSON.parse(data);
//   } catch (error) {
//     return data;
//   }
// }