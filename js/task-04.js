/* Создай переменную counterValue в которой будет 
храниться текущее значение счетчика и инициализируй 
её значением 0.
Добавь слушатели кликов на кнопки, внутри 
которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной
counterValue.
 */

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

const counterValueEl = document.querySelector("#value");
let countValue = 0;

const clickDecrements = () => {
  countValue -= 1;
  return (counterValueEl.textContent = countValue);
};

const clickIncrement = () => {
  countValue += 1;
  return (counterValueEl.textContent = countValue);
};

decrementBtnEl.addEventListener("click", clickDecrements);
incrementBtnEl.addEventListener("click", clickIncrement);
