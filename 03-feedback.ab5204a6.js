!function(){var e,t,o="mess",a="ema",r=document.querySelector(".feedback-form"),l=document.querySelector(".feedback-form input"),n=document.querySelector(".feedback-form textarea");(e=localStorage.getItem(o))&&(n.value=e,console.log(e)),(t=localStorage.getItem(a))&&(l.value=t,console.log(t)),r.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(o),localStorage.removeItem(a)})),l.addEventListener("input",_.throttle((function(e){var t=e.target.value;localStorage.setItem(a,t),console.log(t)}),500)),n.addEventListener("input",_.throttle((function(e){var t=e.target.value;localStorage.setItem(o,t),console.log(t)}),500));var c={};console.log(c),r.addEventListener("input",(function(e){c[e.target.name]=e.target.value;var t=JSON.parse(c);localStorage.setItem(ccc,t)}))}();
//# sourceMappingURL=03-feedback.ab5204a6.js.map
