function changeColorAndText() {
    const element = document.getElementById('changeTextAndColor');
    element.style.color = getRandomColor();
    element.textContent = 'Текст и цвет изменены!';
  }
  function changeListItemsColor() {
    const listItems = document.querySelectorAll('#list li');
    listItems.forEach(item => {
      item.style.color = getRandomColor();
    });
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function showName() {
    const nameInput = document.getElementById('nameInput');
    const output = document.getElementById('output');
    const name = nameInput.value;
  
    if (name.trim() !== '') {
      output.textContent = `Привет, ${name}!`;
    } else {
      output.textContent = 'Пожалуйста, введите ваше имя.';
    }
  }
  