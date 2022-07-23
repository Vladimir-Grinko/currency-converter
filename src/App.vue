<template>
  <div id="#app">
    <HeaderNav />
    <Cards />
    <CurrencyAll />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HeaderNav from "./components/HeaderNav.vue";
import Cards from "./components/Cards.vue";
import CurrencyAll from "./components/CurrencyAll.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
    Cards,
    CurrencyAll,
  },

  methods: mapActions(["fetchLocation", "fetchValutes", "setDesktop"]),

  // запрос курса валют, локации и устройства при монтировании
  async mounted() {
    this.fetchLocation();
    this.fetchValutes();

    let vm = this;
    window.addEventListener("resize", function () {
      if (window.innerWidth > 767) {
        vm.setDesktop(true);
      } else {
        vm.setDesktop(false);
      }
    });
  },
};
</script>

<style lang="scss">
@import "assets/index.css";
</style>
