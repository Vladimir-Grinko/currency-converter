// функция возвращает текущую дату в заданном формате
export function getToday() {
  const date = new Date();

  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
