const e=document.querySelector(".feedback-form");var t;const a=null!==(t=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==t?t:{};for(const t in a)e[t].value=a[t];e.addEventListener("input",(function(e){const t=e.target;0!==t.value.trim().length?a[t.name]=t.value:delete a[t.name];localStorage.setItem("feedback-form-state",JSON.stringify(a))})),e.addEventListener("submit",(function(e){e.preventDefault(),console.log(a);for(const e in a)delete a[e];localStorage.clear(),e.target.reset()}));
//# sourceMappingURL=03-feedback.d47c67a4.js.map
