document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const alertEl = document.getElementById('alert');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alertEl.classList.remove('alert--error', 'alert--success');
    alertEl.style.display = 'none';
    alertEl.textContent = '';

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const emailOrPhone = form.emailOrPhone.value.trim();
    const dateOfBirth = form.dateOfBirth.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const agreeTerms = form.agreeTerms.checked;

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailOrPhone && !emailRegex.test(emailOrPhone)) {
      const phoneRegex = /^\+?\d{10,14}$/;
      if (!phoneRegex.test(emailOrPhone)) {
        alertEl.textContent =
          'Please enter a valid email address or phone number';
        alertEl.classList.add('alert--error');
        alertEl.style.display = 'block';
        return;
      }
    }

    // Валидация и форматирование даты
    if (dateOfBirth) {
      const dateParts = dateOfBirth.split('/');
      if (
        dateParts.length !== 3 ||
        dateParts.some((part) => isNaN(part)) ||
        dateParts[2].length !== 2
      ) {
        alertEl.textContent =
          'Please enter date in MM/DD/YY format (e.g., 09/29/25)';
        alertEl.classList.add('alert--error');
        alertEl.style.display = 'block';
        return;
      }
      const [month, day, year] = dateParts.map(Number);
      if (
        month < 1 ||
        month > 12 ||
        day < 1 ||
        day > 31 ||
        year < 0 ||
        year > 99
      ) {
        alertEl.textContent = 'Invalid date. Use MM/DD/YY (e.g., 09/29/25)';
        alertEl.classList.add('alert--error');
        alertEl.style.display = 'block';
        return;
      }
      const formattedDate = `${String(month).padStart(2, '0')}/${String(
        day
      ).padStart(2, '0')}/${String(year).padStart(2, '0')}`;
    }

    if (
      !firstName ||
      !lastName ||
      !emailOrPhone ||
      !dateOfBirth ||
      !password ||
      !confirmPassword ||
      !agreeTerms
    ) {
      alertEl.textContent =
        'All fields are required, including agreement to Terms';
      alertEl.classList.add('alert--error');
      alertEl.style.display = 'block';
      return;
    }

    if (password !== confirmPassword) {
      alertEl.textContent = 'Passwords do not match';
      alertEl.classList.add('alert--error');
      alertEl.style.display = 'block';
      return;
    }

    console.log({
      firstName,
      lastName,
      emailOrPhone,
      dateOfBirth,
      password,
      rememberMe: form.rememberMe.checked,
      agreeTerms,
    });

    alertEl.textContent = 'Account created successfully!';
    alertEl.classList.add('alert--success');
    alertEl.style.display = 'block';
  });
});
