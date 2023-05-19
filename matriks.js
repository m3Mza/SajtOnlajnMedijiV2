const option1 = document.querySelector('input[name="option1"]');
        const option2 = document.querySelector('input[name="option2"]');
        const message1 = document.getElementById('message1');
        const message2 = document.getElementById('message2');
    
        option1.addEventListener('change', () => {
          if (option1.checked) {
            message1.classList.remove('hidden');
          } else {
            message1.classList.add('hidden');
          }
        });
    
        option2.addEventListener('change', () => {
          if (option2.checked) {
            message2.classList.remove('hidden');
          } else {
            message2.classList.add('hidden');
          }
        });