import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const state = {
  merchant_name: "",
  merchant_code: "",
  isLogin: false,
  merchant_balance: [],
  merchant_balance_history: [],
  transactions_history: [],
  transferts: [],
  airtel_report: [],
  vodacom_report: [],
  orange_report: [],
  global_report: [],
  charge_airtel: {},
  payout_airtel: {},
  charge_vodacom: {},
  payout_vodacom: {},
  charge_orange: {},
  payout_orange: {},
  charge_global: {},
  payout_global: {},
  balance_by_date: {}
}


const mutations = {
  SET_LOGIN(state, value) {
    state.isLogin = value
  },
  SET_MERCHANT(state, value){
    state.merchant_name = value
  },
  SET_MERCHANT_CODE(state, value){
    state.merchant_code = value
  }
}


const actions = {
  setLoginAction({ commit }, value) {
    commit('SET_LOGIN', value)
  },
  setMerchantAction({commit}, value){
    commit('SET_MERCHANT', value)
  },
  setMerchantCodeAction({commit}, value){
    commit('SET_MERCHANT_CODE', value)
  }
}

const getters = {
  login: state => state.isLogin
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  plugins: [createPersistedState(
    { storage: window.sessionStorage }
  )]
})
