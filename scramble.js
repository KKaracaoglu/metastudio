document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scramble-text');
  elements.forEach(el => {
    const originalText = el.getAttribute('data-text');
    let iterations = 0;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const interval = setInterval(() => {
      const scrambled = originalText.split('').map((char, idx) => {
        if (idx < iterations) return char;
        return letters[Math.floor(Math.random() * letters.length)];
      }).join('');
      el.textContent = scrambled;
      if (iterations >= originalText.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  });
});
