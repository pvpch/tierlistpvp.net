// Фильтр по рангам
const filterButtons = document.querySelectorAll('#filters button');
const rankSections = document.querySelectorAll('.rank-section');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Снимаем активность со всех кнопок
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Добавляем активность к текущей кнопке
    button.classList.add('active');

    const rank = button.getAttribute('data-rank');
    if (rank === 'all') {
      rankSections.forEach(section => section.style.display = 'block');
    } else {
      rankSections.forEach(section => {
        section.style.display = section.getAttribute('data-rank') === rank ? 'block' : 'none';
      });
    }
  });
});

// Модальное окно с данными игрока
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.rank-item').forEach(item => {
  item.addEventListener('click', () => {
    const name = item.getAttribute('data-name');
    const stats = item.getAttribute('data-stats');
    modalTitle.textContent = name;
    modalDesc.textContent = stats;
    modal.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
