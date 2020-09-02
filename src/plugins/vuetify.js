import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1440,
    },
  },

});
