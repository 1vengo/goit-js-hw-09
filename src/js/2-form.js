  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  
  const STORAGE_KEY = 'feedback-form-state';
  
  // Відновлюємо стан форми з локального сховища
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  if (savedData.email) emailInput.value = savedData.email;
  if (savedData.message) messageInput.value = savedData.message;
  
  // Функція для збереження даних в локальне сховище
  const saveFormData = () => {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };

  // Прослуховуємо події input для обох полів
  form.addEventListener('input', (event) => {
    saveFormData();
  });

  // Сабміт форми
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Перевірка, щоб обидва поля були заповнені
    if (!email || !message) {
      alert('Please fill in both fields!');
      return;
    }

    // Виведення даних в консоль
    console.log({ email, message });

    // Очищення форми та локального сховища
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  });

  // Очищення даних після сабміту
  form.addEventListener('input', (event) => {
    const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!currentData) {
      saveFormData();
    }
  });
;