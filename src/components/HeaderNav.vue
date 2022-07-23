<template>
  <!-- навбар -->
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <!-- картинка флага страны и название города -->
      <div
        class="navbar-brand text-white"
        v-for="location in getLocation"
        :key="location"
      >
        <img
          :src="location.imageFlagCountry"
          :alt="location.country"
          height="40"
          class="border border-dark rounded d-inline-block align-text-top"
        />
        {{ location.city }}
      </div>
      <!-- форма отображения даты с иконкой календаря -->
      <form class="d-flex">
        <h4 class="mt-2">
          <span class="badge"
            ><i
              class="fas fa-calendar-check"
              style="font-size: 30px; color: rgba(95, 158, 160, 1)"
            ></i>
            {{ getDate }}
          </span>
        </h4>
      </form>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getLocation", "getDate", "setDesktop"]),
};
</script>
