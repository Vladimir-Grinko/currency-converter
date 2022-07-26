// функция конвертирования валют, возвращает итоговый резудьтат конвертации.
// принимает курс конвертируемой валюты,
// курс валюты, в которую конвертируем и введенное количество валюты

export function convertedValutes(
  fromCurrency,
  intoCurrency,
  inputValue,
  nominalFromCurrency,
  nominalIntoCurrency
) {
  return (
    ((fromCurrency * inputValue) / (intoCurrency * nominalFromCurrency)) *
    nominalIntoCurrency
  ).toFixed(4);
}
