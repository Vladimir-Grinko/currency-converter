import { getToday } from "@/utils/getDate";
import { getImageFlag } from "@/utils/getImageFlag";
import { convertedValutes } from "@/utils/convertedValutes";
import { URL_CURRENCY, URL_LOCATION } from "@/utils/urlRequests";

export default {
  state() {
    return {
      isDesktop: true,
      valutes: [],
      location: [],
      date: getToday(),
      defaultCurrencyFrom: {},
      defaultCurrencyInto: {},
      inputValue: "",
      result: "",
    };
  },
  getters: {
    // получение всех валют
    allValutes(state) {
      return state.valutes;
    },
    // получение локации
    getLocation(state) {
      return state.location;
    },
    // получение текушей даты
    getDate(state) {
      return state.date;
    },
    // получение вводимой ссуммы
    getInputValue(state) {
      return state.inputValue;
    },
    // получение результата конвертации
    getResult(state) {
      return state.result;
    },
    // получение используемого устройства
    getIsDesktop(state) {
      return state.isDesktop;
    },
    // получение конвертируемой валюты
    getDefaultCurrencyFrom(state) {
      if (state.defaultCurrencyFrom) {
        return state.defaultCurrencyFrom;
      }
    },
    // получение валюты в которую конвертируем
    getDefaultCurrencyInto(state) {
      return state.defaultCurrencyInto;
    },
  },
  mutations: {
    // внесение в стейт валют
    updateValutes(state, valutes) {
      state.valutes = valutes;
    },
    // внесение в стейт данных локации
    updateLocation(state, location) {
      state.location = location;
    },
    // внесение в стейт вводимой суммы
    updateInputValue(state, amount) {
      state.inputValue = amount;
    },
    // внесение в стейт выбранной валюты с которой конвертируем
    updateDefaultCurrencyFrom(state, data) {
      state.defaultCurrencyFrom = "";
      let defaultCurrency = state.valutes[data];
      if (defaultCurrency) {
        state.defaultCurrencyFrom = {
          ...defaultCurrency,
          flagCurrency: getImageFlag(data),
        };
        state.inputValue = defaultCurrency.Nominal;
      }
    },
    // внесение в стейт выбранной валюты в которую конвертируем
    updateDefaultCurrencyInto(state, data) {
      let defaultCurrency = state.valutes[data];
      state.defaultCurrencyInto = {
        ...defaultCurrency,
        flagCurrency: getImageFlag(data),
      };
    },
    // внесение в стейт устройства, с которого открыто приложение
    updateIsDesktop(state, value) {
      state.isDesktop = value;
    },
    // внесение в стейт результата конвертации
    updateResult(state) {
      state.result = convertedValutes(
        state.defaultCurrencyFrom.Value,
        state.defaultCurrencyInto.Value,
        state.inputValue
      );
    },
  },
  actions: {
    // API запрос курса валют и внесение в стейт
    async fetchValutes(ctx) {
      const res = await fetch(URL_CURRENCY);
      const valutes = await res.json();

      ctx.commit("updateValutes", {
        ...valutes.Valute,
        RUB: {
          ID: Date.now(),
          NumCode: "643",
          CharCode: "RUB",
          Name: "Российский рубль",
          Nominal: 1,
          Previous: 1,
          Value: 1,
        },
      });

      ctx.commit("updateDefaultCurrencyInto", "USD");
    },

    // API запрос локации и внесение в стейт
    async fetchLocation(ctx) {
      const res = await fetch(URL_LOCATION);
      const location = await res.json();

      ctx.commit("updateLocation", { location: location });

      if (location) {
        ctx.commit("updateDefaultCurrencyFrom", location.currency.code);
        ctx.commit("updateResult");
      }
    },
    // выбор конвертируемой валюты
    selectedCurrencyFrom(ctx, data) {
      ctx.commit("updateDefaultCurrencyFrom", data);
      ctx.commit("updateResult");
    },
    // выбор валюты, в которую конвертируем
    selectedCurrencyInto(ctx, data) {
      ctx.commit("updateDefaultCurrencyInto", data);
      ctx.commit("updateResult");
    },
    // ввод суммы валюты
    enterValue(ctx, amount) {
      ctx.commit("updateInputValue", amount);
      ctx.commit("updateResult");
    },
    // определение устройства
    setDesktop(ctx, value) {
      ctx.commit("updateIsDesktop", value);
    },
  },
};
