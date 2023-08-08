// btn-toggle nav mobile
const toggle = document.querySelector('.js-header-nav-toggle');
const headerNav = document.querySelector('.header-account__nav');

toggle.addEventListener('click', () => {
  headerNav.classList.toggle('is-show');
});

// Додати обробник подій для документу
document.addEventListener('click', (event) => {
  // Перевіряємо, чи клікнуто поза toggle та headerNav
  if (!toggle.contains(event.target) && !headerNav.contains(event.target)) {
    headerNav.classList.remove('is-show');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  initPhoneMasks();
  initInputCodeHandlers();
});

// input tel/mask phone
function initPhoneMasks() {
  var elements = document.querySelectorAll('.js-phone-mask-init');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false
  };

  elements.forEach(function(element) {
    var mask = new IMask(element, maskOptions);
  });
}

// input code
function initInputCodeHandlers() {
  const inputsCode = document.querySelectorAll('.js-input-code');

  inputsCode.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length > 1) {
        input.value = input.value.slice(0, 1);
      }
    });

    input.addEventListener('input', () => {
      if (input.value.length >= 1 && index < inputsCode.length - 1) {
        inputsCode[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
        inputsCode[index - 1].focus();
      }
    });
  });
}
