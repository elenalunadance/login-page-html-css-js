import { showAlert, hideAlert } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');

  window.handleSubmit = (event) => {
    event.preventDefault();
    hideAlert();

    if (form.password.value !== form.confirmPassword.value) {
      showAlert('Passwords do not match', 'error');
      return false;
    }

    const formData = new FormData(form);
    console.log('Form data:', Object.fromEntries(formData));
    showAlert('Account created successfully! (Simulated)', 'success');

    form.reset();
    return false;
  };
});
