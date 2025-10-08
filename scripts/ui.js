export const showAlert = (message, type = 'error') => {
  const alertEl = document.getElementById('alert');
  alertEl.textContent = message;
  alertEl.className = `alert alert--${type}`;
  alertEl.style.display = 'block';
};

export const hideAlert = () => {
  const alertEl = document.getElementById('alert');
  alertEl.style.display = 'none';
};
