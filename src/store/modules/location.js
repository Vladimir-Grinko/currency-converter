export default {
  state: {
    location: {},
  },
  getters: {
    getLocation(state) {
      return state.location;
    },
  },
  mutations: {
    updateLocation(state, location) {
      state.location = location;
    },
  },
  actions: {
    async fetchLocation(ctx) {
      const res = await fetch("http://ip-api.com/json");
      const location = await res.json();
      // console.log(location);
      ctx.commit("updateLocation", location);
    },
  },
};
