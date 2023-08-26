const FORM_KEY = "feedback-form-state";

const formRef = document.querySelector('.feedback-form');
const obj = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};

// setting the values of the form, in case they exist
for (const key in obj) {
  formRef[key].value = obj[key];
}

// Listener on formRef input and submit
formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onFormSubmit);

// func-handler
function onFormInput(e) {

  const formName = e.target;

  // in case th user tips smth and then delete, we delete the obj.property
  if (formName.value.trim().length !== 0) {
    obj[formName.name] = formName.value;
  } else {
    delete obj[formName.name];
  }

  localStorage.setItem(FORM_KEY, JSON.stringify(obj));

};

// onSubmit
function onFormSubmit(e) {
  e.preventDefault();

  console.log(obj);

  // obj reset
  for (const key in obj) {
    delete obj[key];
  }

  // LS reset
  localStorage.clear();

  // form reset
  e.target.reset();
};