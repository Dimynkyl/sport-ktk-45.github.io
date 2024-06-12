document.querySelectorAll('.pop_up_body input').forEach(input => {
  input.addEventListener('focus', () => {
    input.classList.add('select-clicked');
  });

  input.addEventListener('blur', () => {
    input.classList.remove('select-clicked');
  });
});
