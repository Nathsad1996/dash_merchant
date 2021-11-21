<template>
  <v-container fluid>
    <v-row class="mx-auto">
      <v-col class="float-left text-h5">
        TOTAL
        <v-btn fab text :loading="loading_global" @click="reload_global">
          <v-icon size="35">mdi-refresh</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <TransactionCard
        v-for="(transaction, index) in global_details.transactions"
        :key="index"
        :color="transaction.color"
        :title="transaction.title"
        :transactions_data="transaction.data"
      ></TransactionCard>
    </v-row>
    <v-row class="mx-auto">
      <v-col class="float-left text-h5">
        Airtel
        <v-btn fab text :loading="loading_airtel" @click="reload_airtel">
          <v-icon size="35">mdi-refresh</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <TransactionCard
        v-for="(transaction, index) in airtel_details.transactions"
        :key="index"
        :color="transaction.color"
        :title="transaction.title"
        :transactions_data="transaction.data"
      ></TransactionCard>
      <BalanceCard
        v-for="volume in airtel_details.volume"
        :key="volume.cdf_amount"
        :title="volume.title"
        :cdf_amount="volume.cdf_amount"
        :usd_amount="volume.usd_amount"
        :icon="volume.icon"
        :color="volume.color"
      ></BalanceCard>
    </v-row>
    <v-row class="mx-auto">
      <v-col class="float-left text-h5">
        Vodacom
        <v-btn fab text :loading="loading_vodacom" @click="reload_vodacom">
          <v-icon size="35">mdi-refresh</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <TransactionCard
        v-for="(transaction, index) in vodacom_details.transactions"
        :key="index"
        :color="transaction.color"
        :title="transaction.title"
        :transactions_data="transaction.data"
      ></TransactionCard>
      <BalanceCard
        v-for="volume in vodacom_details.volume"
        :key="volume.cdf_amount"
        :title="volume.title"
        :cdf_amount="volume.cdf_amount"
        :usd_amount="volume.usd_amount"
        :icon="volume.icon"
        :color="volume.color"
      ></BalanceCard>
    </v-row>
    <v-row class="mx-auto">
      <v-col class="float-left text-h5">
        Orange
        <v-btn fab text :loading="loading_orange" @click="reload_orange">
          <v-icon size="35">mdi-refresh</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <TransactionCard
        v-for="(transaction, index) in orange_details.transactions"
        :key="index"
        :color="transaction.color"
        :title="transaction.title"
        :transactions_data="transaction.data"
      ></TransactionCard>
      <BalanceCard
        v-for="volume in orange_details.volume"
        :key="volume.cdf_amount"
        :title="volume.title"
        :cdf_amount="volume.cdf_amount"
        :usd_amount="volume.usd_amount"
        :icon="volume.icon"
        :color="volume.color"
      ></BalanceCard>
    </v-row>
    <v-row class="mx-auto">
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import TransactionCard from "../components/TransactionCard.vue";
import BalanceCard from "../components/BalanceCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: 'Home',
  data: () => ({
    global_details: {
      transactions: [{
        color: "blue", title: "Charge", data: {}
      }, {
        color: "blue", title: "Payout", data: {}
      }]
    },
    airtel_details: {
      transactions: [{
        color: "#DD4B39", title: "Airtel charge", data: {}
      }, {
        color: "#DD4B39", title: "Airtel payout", data: {}
      }],
      volume: [{
        cdf_amount: 0, usd_amount: 0, title: "Balance", color: "#DD4B39"
      }],
    },
    vodacom_details: {
      transactions: [{
        color: "#00A65A", title: "Vodacom charge", data: {}
      }, {
        color: "#00A65A", title: "Vodacom payout", data: {}
      }],
      volume: [{
        cdf_amount: 0, usd_amount: 0, title: "Balance", color: "#00A65A"
      }],
    },
    orange_details: {
      transactions: [{
        color: "#FF851B", title: "Orange charge", data: {}
      }, {
        color: "#FF851B", title: "Orange payout", data: {}
      }],
      volume: [{
        cdf_amount: 0, usd_amount: 0, title: "Balance", color: "#FF851B"
      }],
    },
    loading_global: false,
    loading_airtel: false,
    loading_vodacom: false,
    loading_orange: false,
  }),
  components: {
    TransactionCard, BalanceCard
  },
  methods: {
    ...mapActions(["setGlobalChargeAction", "setGlobalPayoutAction", "setAirtelChargeAction",
      "setAirtelPayoutAction", "setVodacomChargeAction", "setVodacomPayoutAction",
      "setOrangeChargeAction", "setOrangePayoutAction", "setMerchantBalanceAction",
      "setDailyTransactionsAction"]),
    detail() {
      console.log("i'm here");
    },
    async reload_global() {
      this.loading_global = true
      await this.setGlobalChargeAction()
      await this.setGlobalPayoutAction()

      this.global_details.transactions[0].data = this.charge_global
      this.global_details.transactions[1].data = this.payout_global
      this.loading_global = false
    },
    async reload_airtel() {
      this.loading_airtel = true
      await this.setAirtelChargeAction()
      await this.setAirtelPayoutAction()

      this.airtel_details.transactions[0].data = this.charge_airtel
      this.airtel_details.transactions[1].data = this.payout_airtel
      this.loading_airtel = false
    },
    async reload_orange() {

      this.loading_orange = true
      await this.setOrangeChargeAction()
      await this.setOrangePayoutAction()

      this.orange_details.transactions[0].data = this.charge_orange
      this.orange_details.transactions[1].data = this.payout_orange
      this.loading_orange = false
    },
    async reload_vodacom() {
      this.loading_vodacom = true
      await this.setVodacomChargeAction()
      await this.setVodacomPayoutAction()


      this.vodacom_details.transactions[0].data = this.charge_vodacom
      this.vodacom_details.transactions[1].data = this.payout_vodacom
      this.loading_vodacom = false
    },
  },
  computed: {
    ...mapState(["payout_global", "charge_global", "charge_vodacom",
      "payout_vodacom", "charge_airtel", "payout_airtel", "charge_orange",
      "payout_orange", "merchant_balance"])
  },
  async mounted() {

    // setting daily transactions

    this.loading_global = true

    await this.setGlobalChargeAction()
    await this.setGlobalPayoutAction()

    this.global_details.transactions[0].data = this.charge_global
    this.global_details.transactions[1].data = this.payout_global
    this.loading_global = false

    this.loading_airtel = true

    await this.setAirtelChargeAction()
    await this.setAirtelPayoutAction()

    this.airtel_details.transactions[0].data = this.charge_airtel
    this.airtel_details.transactions[1].data = this.payout_airtel
    this.loading_airtel = false

    this.loading_vodacom = true

    await this.setVodacomChargeAction()
    await this.setVodacomPayoutAction()

    this.vodacom_details.transactions[0].data = this.charge_vodacom
    this.vodacom_details.transactions[1].data = this.payout_vodacom
    this.loading_vodacom = false

    this.loading_orange = true

    await this.setOrangeChargeAction()
    await this.setOrangePayoutAction()

    this.orange_details.transactions[0].data = this.charge_orange
    this.orange_details.transactions[1].data = this.payout_orange
    this.loading_orange = false

    // setting balance


    await this.setMerchantBalanceAction()

    this.vodacom_details.volume[0].cdf_amount = this.merchant_balance[1]
    this.vodacom_details.volume[0].usd_amount = this.merchant_balance[3]

    this.orange_details.volume[0].cdf_amount = this.merchant_balance[5]
    this.orange_details.volume[0].usd_amount = this.merchant_balance[7]

    this.airtel_details.volume[0].cdf_amount = this.merchant_balance[9]
    this.airtel_details.volume[0].usd_amount = this.merchant_balance[11]

    // get daily transactions for all operators
    this.$nextTick(() => {
      this.setDailyTransactionsAction()
    })
  }
}

</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
</style>