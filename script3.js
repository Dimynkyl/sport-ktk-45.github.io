document.getElementById('submitButton').addEventListener('click', function(event) {
  event.preventDefault(); // Предотвращаем стандартное действие кнопки

  var popup = document.getElementById('pop_up');
  popup.classList.remove('active');

  var successPopup = document.getElementById('successPopup');
  successPopup.classList.add('started', 'shrink'); // Добавляем классы для отображения и анимации полоски сразу

  setTimeout(function() {
    successPopup.classList.remove('started', 'shrink'); // Удаляем классы после завершения анимации
    successPopup.style.opacity = '0'; // Скрываем всплывающее окно
  }, 3000);
});
