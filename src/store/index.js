import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: false,
  merchant_balance: [],
  transactions_history: [],
  transctions_lookup: [],
  transferts: [],
  airtel_report: {},
  vodacom_report: {},
  orange_report: {},
  global_report: {},
  charge_airtel: [],
  payout_airtel: [],
  charge_vodacom: [],
  payout_vodacom: [],
  charge_orange: [],
  payout_orange: [],
  balance_by_date: {}
}


const mutations = {

}


const actions = {

}

const getters = {

}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
})
