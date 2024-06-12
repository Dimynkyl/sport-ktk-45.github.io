document.addEventListener('DOMContentLoaded', function() {
  // Находим кнопку и всплывающее окно по классу
  var button = document.querySelector('.button1');
  var popup = document.querySelector('.pop_ups');

  // Добавляем обработчик события клика по кнопке
  button.addEventListener('click', function() {
    // Добавляем класс 'start', который отвечает за показ окна
    popup.classList.add('start');

    // Удаляем класс 'start' через 5 секунд
    setTimeout(function() {
      popup.classList.remove('start');
    }, 2000);
  });
});
