const heading1 = document.getElementById('heading1');
const heading2 = document.getElementById('heading2');

heading1.addEventListener('animationend', () => {
  heading2.style.display = 'block';
});
