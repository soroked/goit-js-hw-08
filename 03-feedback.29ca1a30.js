const e=document.querySelector(".feedback-form");var t;const o=null!==(t=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==t?t:{};for(const t in o)e[t].value=o[t];e.addEventListener("input",(function(e){const t=e.target;o[t.name]=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),e.addEventListener("submit",(function(e){e.preventDefault();for(const e in o)console.log(`${e}: ${o[e]}`);localStorage.clear(),e.target.reset()}));
//# sourceMappingURL=03-feedback.29ca1a30.js.map
