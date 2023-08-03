function showGreetingByAge() {
    const ageInput = prompt("Введите ваш возраст:");
    
    const age = parseInt(ageInput);

    if (!isNaN(age)) {
      let greeting;
  
      switch (true) {
        case age < 0:
          greeting = "Вы ввели некорректный возраст.";
          break;
        case age < 18:
          greeting = "Привет, молодой человек!";
          break;
        case age >= 18 && age < 60:
          greeting = "Приветствую вас!";
          break;
        default:
          greeting = "Здравствуйте, уважаемый!";
          break;
      }
  
      alert(greeting);
    } else {
      alert("Пожалуйста, введите корректный возраст.");
    }
  }
  showGreetingByAge();