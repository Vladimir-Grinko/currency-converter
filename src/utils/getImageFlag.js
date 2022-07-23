// функция возвращает ссылку на запрос картинки валюты в зависимости от кода валюты
// принимает в себя строковое значение кода валюты
export function getImageFlag(index) {
  return `https://wise.com/public-resources/assets/flags/rectangle/${index.toLowerCase()}.png`;
}
