import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import services from "../services/services"


Vue.use(Vuex)

const state = {
  merchant_name: "",
  merchant_code: "",
  isLogin: false,
  merchant_balance: [],
  merchant_balance_history: [],
  transactions_history: [],
  transferts: [],
  airtel_report_charge: [],
  vodacom_report_charge: [],
  orange_report_charge: [],
  global_report_charge: [],
  airtel_report_payout: [],
  vodacom_report_payout: [],
  orange_report_payout: [],
  global_report_payout: [],
  charge_airtel: {},
  payout_airtel: {},
  charge_vodacom: {},
  payout_vodacom: {},
  charge_orange: {},
  payout_orange: {},
  charge_global: {},
  payout_global: {},
  balance_by_date: {},
}


const mutations = {
  SET_LOGIN(state, value) {
    state.isLogin = value
  },
  SET_MERCHANT(state, value) {
    state.merchant_name = value
  },
  SET_MERCHANT_CODE(state, value) {
    state.merchant_code = value
  },
  SET_GLOBAL_CHARGE(state, value) {
    state.charge_global = value
  },
  SET_GLOBAL_PAYOUT(state, value) {
    state.payout_global = value
  },
  SET_VODACOM_PAYOUT(state, value) {
    state.payout_vodacom = value
  },
  SET_VODACOM_CHARGE(state, value) {
    state.charge_vodacom = value
  },
  SET_ORANGE_PAYOUT(state, value) {
    state.payout_orange = value
  },
  SET_ORANGE_CHARGE(state, value) {
    state.charge_orange = value
  },
  SET_AIRTEL_PAYOUT(state, value) {
    state.payout_airtel = value
  },
  SET_AIRTEL_CHARGE(state, value) {
    state.charge_airtel = value
  },
  MERCHANT_BALANCE(state, value) {
    state.merchant_balance = value
  },
  SET_DAILY_TRANSAC(state, value) {

    state.global_report_charge = value.global_charge
    state.global_report_payout = value.global_payout

    state.airtel_report_charge = value.airtel_charge
    state.airtel_report_payout = value.airtel_payout

    state.vodacom_report_charge = value.vodacom_charge
    state.vodacom_report_payout = value.vodacom_payout

    state.orange_report_charge = value.orange_charge
    state.orange_report_payout = value.orange_payout

    console.log(state.orange_report_payout);

  },
  SET_TRANSFERT(state, value){
    state.transferts = value
  }
}


const actions = {
  setLoginAction({ commit }, value) {
    commit('SET_LOGIN', value)
  },
  setMerchantAction({ commit }, value) {
    commit('SET_MERCHANT', value)
  },
  setMerchantCodeAction({ commit }, value) {
    commit('SET_MERCHANT_CODE', value)
  },
  async setGlobalChargeAction({ commit }) {
    let data = await services.global_report_charge()
    commit('SET_GLOBAL_CHARGE', data)
  },
  async setGlobalPayoutAction({ commit }) {
    let data = await services.global_report_payout()
    commit('SET_GLOBAL_PAYOUT', data)
  },
  async setVodacomPayoutAction({ commit }) {
    let data = await services.vodacom_report_payout();
    commit('SET_VODACOM_PAYOUT', data)
  },
  async setVodacomChargeAction({ commit }) {
    let data = await services.vodacom_report_charge();
    commit('SET_VODACOM_CHARGE', data)
  },
  async setOrangePayoutAction({ commit }) {
    let data = await services.orange_report_payout();
    commit('SET_ORANGE_PAYOUT', data)
  },
  async setOrangeChargeAction({ commit }) {
    let data = await services.orange_report_charge();
    commit('SET_ORANGE_CHARGE', data)
  },
  async setAirtelPayoutAction({ commit }) {
    let data = await services.airtel_report_payout();
    commit('SET_AIRTEL_PAYOUT', data)
  },
  async setAirtelChargeAction({ commit }) {
    let data = await services.airtel_report_charge();
    commit('SET_AIRTEL_CHARGE', data)
  },
  async setMerchantBalanceAction({ commit }) {
    let data = await services.balance();
    commit('MERCHANT_BALANCE', data)
  },
  async setDailyTransactionsAction({ commit }) {
    let data = await services.daily_all();
    commit('SET_DAILY_TRANSAC', data)
  },
  async setTransfertsAction({commit}){
    let data = await services.get_transferts()
    commit('SET_TRANSFERT', data)
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
