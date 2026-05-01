

(function () {
    const timerElement = document.querySelector('.cta-button-timer');

    if (!timerElement) return;

    const STORAGE_KEY = 'cta_timer_end_time';

    // 24 години в мілісекундах
    const DURATION = 24 * 60 * 60 * 1000;

    // Беремо з кешу або створюємо новий час завершення
    let endTime = localStorage.getItem(STORAGE_KEY);

    if (!endTime || Date.now() > Number(endTime)) {
        endTime = Date.now() + DURATION;
        localStorage.setItem(STORAGE_KEY, endTime);
    }

    function updateTimer() {
        let remaining = Number(endTime) - Date.now();

        // Коли доходить до 0 — запускаємо заново
        if (remaining <= 0) {
            endTime = Date.now() + DURATION;
            localStorage.setItem(STORAGE_KEY, endTime);
            remaining = DURATION;
        }

        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        timerElement.textContent =
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
})();


document.addEventListener("DOMContentLoaded", () => {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isOpen = currentItem.classList.contains('is-open');

            if (!isOpen) {
                currentItem.classList.add('is-open');
            } else {
                currentItem.classList.remove('is-open');
            }
        });
    });
});


 document.addEventListener("DOMContentLoaded", () => {

  function start24hTimer(containerSelector, itemSelector, storageKey) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const values = container.querySelectorAll(itemSelector);
    if (values.length < 3) return;

    const TOTAL_TIME = 24 * 60 * 60 * 1000;

    let startTime = localStorage.getItem(storageKey);

    // Якщо немає старту — задаємо
    if (!startTime) {
      startTime = Date.now();
      localStorage.setItem(storageKey, startTime);
    } else {
      startTime = parseInt(startTime, 10);
    }

    function updateTimer() {
      const now = Date.now();
      let elapsed = now - startTime;

      // Ресет після 24 годин або якщо щось пішло не так
      if (elapsed >= TOTAL_TIME || elapsed < 0) {
        startTime = now;
        localStorage.setItem(storageKey, startTime);
        elapsed = 0;
      }

      const remaining = TOTAL_TIME - elapsed;

      const hours = Math.floor(remaining / 3600000);
      const minutes = Math.floor((remaining % 3600000) / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);

      values[0].textContent = String(hours).padStart(2, "0");
      values[1].textContent = String(minutes).padStart(2, "0");
      values[2].textContent = String(seconds).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // Старі таймери
  start24hTimer(".footer-timer", ".footer-timer-value", "timerStartTime");
  start24hTimer(".what-content-time", ".what-content-time-item-title", "whatContentTimerStartTime");

  // Новий таймер
  start24hTimer(".timer-display", ".timer-box", "displayTimerStartTime");

});