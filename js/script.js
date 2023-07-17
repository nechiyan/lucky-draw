document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('myButton');
    const inputIds = ['One', 'two', 'three', 'four', 'five', 'six'];
    const congratsDiv = document.querySelector('.congrats');
    const firstPrizeDiv = document.querySelector('.first-prize');
    const numbersDiv = document.querySelector('.numbers');
    const firstPrizeImages = firstPrizeDiv.querySelectorAll('img');
    
    const numberChangeDelay = 200; // Delay in milliseconds (adjust as needed)
    let currentImageIndex = 0;
  
    function setNumberValue(id, value) {
      const inputElement = document.getElementById(id);
      inputElement.classList.add('changed');
      inputElement.value = value;
    }
  
    function showDivs() {
      const values = inputIds.map(id => document.getElementById(id).value).join('');
      const display = values === '123456' ? 'block' : 'none';
      congratsDiv.style.display = display;
      firstPrizeDiv.style.display = display;
      numbersDiv.style.height = values === '123456' ? 'auto' : '100vh';
    }
  
    function switchImage() {
      firstPrizeImages.forEach(image => {
        image.style.display = 'none';
      });
      firstPrizeImages[currentImageIndex].style.display = 'block';
      currentImageIndex = (currentImageIndex + 1) % firstPrizeImages.length;
    }
  
    btn.addEventListener('click', function() {
      for (let i = 0; i < inputIds.length; i++) {
        setTimeout(function() {
          setNumberValue(inputIds[i], i + 1);
          if (i === inputIds.length - 1) {
            showDivs();
          }
        }, numberChangeDelay * i);
      }
    });
  
    switchImage();
    setInterval(switchImage, numberChangeDelay);
  });
  