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
          :src="location.country_flag"
          :alt="location.country_name"
          height="40"
          style="cursor: pointer"
          :title="location.country_name"
          class="border border-dark rounded d-inline-block align-text-top"
        />
        {{ location.city }}
        <i
          class="fas fa-city mx-2"
          style="font-size: 20px; color: rgba(245, 245, 245, 1)"
        ></i>
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
