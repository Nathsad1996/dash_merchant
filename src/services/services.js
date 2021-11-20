import axios from "axios";
import store from "../store/index"

axios.defaults.baseURL = '/api/'

export default {
    login: async(data) => {
        let resp = await axios.post('login', data)
        return resp.data;
    },
    daily_all: async ()=> {
        let resp = await axios.get(`daily_all/${store.state.merchant_code}`)
        return resp.data;
    },
    balance: async() => {
        let resp = await axios.get(`balance/${store.state.merchant_code}`)
        return resp.data.balance;
    },
    vodacom_report_charge: async() => {
        let resp = await axios.get(`vodacom_report_charge/${store.state.merchant_code}`)
        return resp.data;
    },
    orange_report_charge: async() => {
        let resp = await axios.get(`orange_report_charge/${store.state.merchant_code}`)
        return resp.data;
    },
    airtel_report_charge: async() => {
        let resp = await axios.get(`airtel_report_charge/${store.state.merchant_code}`)
        return resp.data;
    },
    global_report_charge: async() => {
        let resp = await axios.get(`daily_transactions_charge/${store.state.merchant_code}`)
        return resp.data;
    },
    vodacom_report_payout: async() => {
        let resp = await axios.get(`vodacom_report_payout/${store.state.merchant_code}`)
        return resp.data;
    },
    orange_report_payout: async() => {
        let resp = await axios.get(`orange_report_payout/${store.state.merchant_code}`)
        return resp.data;
    },
    airtel_report_payout: async() => {
        let resp = await axios.get(`airtel_report_payout/${store.state.merchant_code}`)
        return resp.data;
    },
    global_report_payout: async() => {
        let resp = await axios.get(`daily_transactions_payout/${store.state.merchant_code}`)
        return resp.data;
    },
    week_history: async() => {
        let resp = await axios.get(`week_history/${store.state.merchant_code}`)
        return resp.data;
    },
    search_transactions: async (data) => {
        let resp = await axios.get(`transactions/${data}`)
        return resp.data;
    },
    balance_history: async (data) => {
        let resp = await axios.get(`balance_history/${data}`)
        return resp.data;
    },
    add_transfert: async (data) => {
        let resp = await axios.post('transfert', data)
        return resp.data;
    },
    get_transferts: async () => {
        let resp = await axios.get(`transferts/${store.state.merchant_code}`)
        return resp.data;
    }
}