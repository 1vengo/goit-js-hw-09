const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (savedData.email) emailInput.value = savedData.email;
if (savedData.message) messageInput.value = savedData.message;

const saveFormData = () => {
    const formData = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
form.addEventListener('input', (event) => {
    saveFormData();
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    if (!email || !message) {
        alert('Please fill in both fields')
        return;
    }
    console.log({ email, message });
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});
