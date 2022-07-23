<template>
  <!-- карточки выбора валют -->
  <section>
    <div class="bg-image" style="height: 450px">
      <div class="mask d-flex align-items-start h-100">
        <div class="container">
          <div
            class="row justify-content-center align-items-center text-center mt-3"
          >
            <span class="text-white">КОНВЕРТЕР ВАЛЮТ</span>

            <!-- карточка конвертируемой валюты -->

            <div class="col-md-4 mb-4 mb-md-0">
              <div class="card mask-custom py-5 text-white">
                <div class="card-body">
                  <h4 class="mb-3">
                    У меня есть:
                    <i
                      v-if="getDefaultCurrencyFrom.CharCode === `XDR`"
                      class="fas fa-hand-holding-usd icon-color"
                    ></i>
                    <img
                      v-else
                      :src="getDefaultCurrencyFrom.flagCurrency"
                      alt="imageFlag"
                      class="img-fluid rounded border border-white mt-1"
                      width="60"
                    />
                  </h4>

                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    style="background: none; color: white; cursor: pointer"
                    :value="getDefaultCurrencyFrom.CharCode"
                    v-on:change="
                      selectedOptionFromCurrency($event.target.value)
                    "
                  >
                    <option
                      v-for="valute in allValutes"
                      :key="valute.ID"
                      :value="valute.CharCode"
                      style="background: rgba(95, 158, 160, 1)"
                    >
                      {{ valute.CharCode }}
                    </option>
                  </select>
                  <p>{{ getDefaultCurrencyFrom.Name }}</p>

                  <input
                    class="form-control form-control-lg"
                    type="number"
                    placeholder="Введите сумму"
                    aria-label=".form-control-lg example"
                    style="background: none; color: white; height: 60px"
                    :value="getInputValue"
                    v-on:input="submit($event.target.value)"
                  />
                </div>
              </div>
            </div>

            <!-- элемент двойная стрелка -->

            <div class="col-md-1 mb-4">
              <div v-if="getIsDesktop === true" class="text-white">
                <i
                  class="fas fa-angle-double-right beauty-effect"
                  style="font-size: 40px"
                ></i>
              </div>
              <div v-else class="text-white">
                <i
                  class="fas fa-angle-double-down beauty-effect"
                  style="font-size: 40px"
                ></i>
              </div>
            </div>

            <!-- карточка валюты в коротую конвертируем -->

            <div class="col-md-4 mb-0">
              <div class="card mask-custom py-5 text-white">
                <div class="card-body">
                  <h4 class="mb-4">
                    Я получу:
                    <i
                      v-if="getDefaultCurrencyInto.CharCode === `XDR`"
                      class="fas fa-hand-holding-usd icon-color"
                    ></i>
                    <img
                      v-else
                      :src="getDefaultCurrencyInto.flagCurrency"
                      alt="imageFlag"
                      class="img-fluid rounded border border-white mt-1"
                      width="60"
                    />
                  </h4>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    style="background: none; color: white; cursor: pointer"
                    :value="getDefaultCurrencyInto.CharCode"
                    v-on:change="
                      selectedOptionIntoCurrency($event.target.value)
                    "
                  >
                    <option
                      v-for="valute in allValutes"
                      :key="valute.ID"
                      :value="valute.CharCode"
                      style="background: rgba(95, 158, 160, 1)"
                    >
                      {{ valute.CharCode }}
                    </option>
                  </select>
                  <p>{{ getDefaultCurrencyInto.Name }}</p>

                  <input
                    disabled
                    class="form-control form-control-lg"
                    type="number"
                    aria-label=".form-control-lg example"
                    style="background: none; color: yellow; height: 60px"
                    :value="getResult"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "v-Cards",
  methods: {
    ...mapActions([
      "selectedCurrencyFrom",
      "selectedCurrencyInto",
      "enterValue",
    ]),
    selectedOptionFromCurrency(data) {
      this.selectedCurrencyFrom(data);
    },
    submit(data) {
      this.enterValue(data);
    },
    selectedOptionIntoCurrency(data) {
      this.selectedCurrencyInto(data);
    },
  },
  computed: mapGetters([
    "allValutes",
    "getDefaultCurrencyFrom",
    "getDefaultCurrencyInto",
    "getInputValue",
    "getResult",
    "getIsDesktop",
  ]),
};
</script>

// стили для карточек валют

<style scoped lang="scss">
.mask-custom {
  background: rgba(24, 24, 16, 0.2);
  border-radius: 2em;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.05);
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
}

@media (max-width: 767px) {
  .bg-image {
    height: 1000px !important;
  }
}
</style>
