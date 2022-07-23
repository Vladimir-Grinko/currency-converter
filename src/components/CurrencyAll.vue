<template>
  <!-- элемент с карточками всех валют -->

  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="text-center mb-2">
        <span class="text-white"
          >ВСЕ ВАЛЮТЫ КОНВЕРТЕРА
          <i
            class="fas fa-calculator p-2"
            style="font-size: 17px; color: green"
          ></i
        ></span>
      </div>
      <hr />

      <!-- итерируемая карточка с картинками и названиями валюты -->

      <div
        v-for="valute in allValutes"
        :key="valute.ID"
        class="col align-items-center mt-2"
      >
        <i
          v-if="valute.CharCode === `XDR`"
          class="fas fa-hand-holding-usd icon-color"
        ></i>
        <img
          v-else
          :src="getSRC(valute.CharCode)"
          alt="flag"
          class="rounded beauty-rotate"
          style="object-position: center; display: block"
        />
        <h5 class="card-title text-white">
          {{ valute.CharCode }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getImageFlag } from "@/utils/getImageFlag";

export default {
  computed: mapGetters(["allValutes"]),
  methods: {
    getSRC(index) {
      return getImageFlag(index);
    },
  },
};
</script>
