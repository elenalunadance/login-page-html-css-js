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
    let dateOfBirth = form.dateOfBirth.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const agreeTerms = form.agreeTerms.checked;

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
      dateOfBirth = `${String(month).padStart(2, '0')}/${String(day).padStart(
        2,
        '0'
      )}/${String(year).padStart(2, '0')}`;
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

    const data = {
      firstName,
      lastName,
      emailOrPhone,
      dateOfBirth,
      password,
      rememberMe: form.rememberMe.checked,
      agreeTerms,
    };

    console.log('Form data:', data);
    alertEl.textContent = 'Account created successfully! (Simulated)';
    alertEl.classList.add('alert--success');
    alertEl.style.display = 'block';

    /*
      fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((result) => {
          alertEl.textContent = 'Account created successfully!';
          alertEl.classList.add('alert--success');
          alertEl.style.display = 'block';
        })
        .catch((error) => {
          alertEl.textContent = 'Error creating account: ' + error.message;
          alertEl.classList.add('alert--error');
          alertEl.style.display = 'block';
        });
      */
  });
});
