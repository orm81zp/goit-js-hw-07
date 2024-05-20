const onSubmitHandler = fields => event => {
  event.preventDefault();
  const { elements } = event.target;
  let isValid = true;
  const data = {};

  for (const field of fields) {
    if (field.required) {
      for (const element of elements) {
        if (element.name === field.name) {
          const formattedValue = element.value.trim();
          if (!formattedValue) {
            isValid = false;
            element.parentNode.classList.add('required');
          } else {
            element.parentNode.classList.remove('required');
            data[element.name] = formattedValue;
          }
        }
      }
    }
  }

  if (isValid) {
    event.target.reset();
    console.log(data);
  } else {
    alert('All form fields must be filled in');
  }
};

const formEl = document.querySelector('.login-form');
const fields = [
  { name: 'email', required: true },
  { name: 'password', required: true },
];
formEl.addEventListener('submit', onSubmitHandler(fields));
