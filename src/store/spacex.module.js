import { SpacexDataService } from "@/common/api.service";
import { FETCH_SPACEX_DATA } from "./actions.type";
import { SET_SPACEX_DATA } from "./mutations.type";

const state = {
    spacexdatalist: [],
  };
  
  const getters = {
    spacexdatalist(state) {
      return state.spacexdatalist;
    },
  };
  
  const actions = {
    async [FETCH_SPACEX_DATA]({ commit }, params) {
        const data = await SpacexDataService.get(params)
        commit(SET_SPACEX_DATA, data.data);
    },
  };
  
  /* eslint no-param-reassign: ["error", { "props": false }] */
  const mutations = {
    [SET_SPACEX_DATA](state, spacexapidata) {
      state.spacexdatalist = spacexapidata;
    },
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };