function calculateAndLogNumber() { // Функции практика
    let x = 5;
    x = x + 100;
    x = x / 5;
    console.log(x);
}

  calculateAndLogNumber()

function calculateAndNumber(initialValue) { 
    let x = initialValue;
    x = x + 100;
    x = x / 5;
    return x; // Возвращение значений в результате выполнения/прекращение выполнения
    x = x * 100000 // Не будет выполняться
}

  const result = calculateAndNumber(100) // Меняем первоначальное значение
  const result2 = calculateAndNumber(1000)
  const result3 = calculateAndNumber(10000)
  const result4 = calculateAndNumber(100000)
  const result5 = calculateAndNumber(1000000)
  const result6 = calculateAndNumber(10000000)
  const result7 = calculateAndNumber(100000000)
  console.log(result, result2, result3, result4, result5, result6, result7);

function CalculateCircleArea(circleRadius) { // Вычисление площади круга
    const area = 3.14 * circleRadius ** 2
    return area;
  }

  const circleArea1 = CalculateCircleArea(5)
  const circleArea2 = CalculateCircleArea(3)
  const circleArea3 = CalculateCircleArea(17)
  const circleArea4 = CalculateCircleArea(8)
  const circleArea5 = CalculateCircleArea(334)
  console.log(circleArea1, circleArea2, circleArea3, circleArea4, circleArea5);

function createHTMLElement(tag, id, text) { // Создание HTML элемента и его возвращение
  const element = document.createElement(tag);
  element.id = id;
  element.innerText = text;
  return element;
}

  const h1Element = createHTMLElement('h1', 'header1', 'просто текст')
  //console.log(h1Element);
  //document.body.append(h1Element)

function logArgsToConsole() { // Переменная arguments в функции
    //console.log(arguments);
    for (let argument of arguments) {
        console.log(argument);
    }
}

 logArgsToConsole(1, 2, 3, 7, 8, 90)

const sayHi = function() { // Функциональное выражение
  console.log('Hi!');
}
 sayHi()

const sayBye = () => { // Стрелочные функции
  console.log('Bye!');
}
 sayBye()

const brokenLinks = ['vk', 'youtube', 'facebook'] // Превратите сломанные ссылки в рабочие // https://vk.com

const fixLinksArray = (linksArray) => {
    const correctLinks = [];
    linksArray.forEach((brokenLink) =>
        correctLinks.push('https://' + brokenLink + '.com')
    );
    return correctLinks
}
 console.log(fixLinksArray(brokenLinks));

function getCurrentDayOfWeek() { // Уровень 4.1 Задача 1
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const date = new Date();
    const dayOfWeek = date.getDay();
    return daysOfWeek[dayOfWeek];
  }
 console.log(getCurrentDayOfWeek());


