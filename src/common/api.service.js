import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = 'https://api.spaceXdata.com/';
  },

  get(resource, slug) {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

};

export default ApiService;

export const SpacexDataService = {
    get(slug) {
      return ApiService.get('v3',slug);
    },
  };