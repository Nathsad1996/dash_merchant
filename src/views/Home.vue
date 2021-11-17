<template>
  <v-container fluid>
    <v-row class="mx-auto">
      <v-col class="float-left text-h4">
        Global Views
        <v-btn fab text :loading="true">
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
        :amount="transaction.amount"
        :icon="transaction.icon"
      ></TransactionCard>
    </v-row>
    <v-row class="mx-auto">
      <v-col class="float-left text-h4">
        Airtel
        <v-btn fab text>
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
        :amount="transaction.amount"
        :icon="transaction.icon"
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
      <v-col class="float-left text-h4">
        Vodacom
        <v-btn fab text>
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
        :amount="transaction.amount"
        :icon="transaction.icon"
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
      <v-col class="float-left text-h4">
        Orange
        <v-btn fab text>
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
        :amount="transaction.amount"
        :icon="transaction.icon"
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

export default {
  name: 'Home',
  data: () => ({
    global_details: {
      transactions: [{
        color: "blue", title: "Charge", icon: "mdi-finance", amount: "3 000"
      }, {
        color: "blue", title: "Payout", icon: "mdi-finance", amount: "3 000"
      }]
    },
    airtel_details: {
      transactions: [{
        color: "#DD4B39", title: "Charge", icon: "mdi-finance", amount: "3 000"
      }, {
        color: "#DD4B39", title: "Payout", icon: "mdi-finance", amount: "3 000"
      }],
      volume: [{
        cdf_amount: "16 278", usd_amount: "8 798", title: "Balance", color: "#DD4B39", icon: "mdi-cash-100"
      }],
    },
    vodacom_details: {
      transactions: [{
        color: "#00A65A", title: "Charge", icon: "mdi-finance", amount: "3 000"
      }, {
        color: "#00A65A", title: "Payout", icon: "mdi-finance", amount: "3 000"
      }],
      volume: [{
        cdf_amount: "397", usd_amount: "7 653", title: "Balance", color: "#00A65A", icon: "mdi-cash-100"
      }],
    },
    orange_details: {
      transactions: [{
        color: "#FF851B", title: "Charge", icon: "mdi-finance", amount: "3 000"
      }, {
        color: "#FF851B", title: "Payout", icon: "mdi-finance", amount: "3 000"
      }],
      volume: [{
        cdf_amount: "712 837 899", usd_amount: "600 838 111", title: "Balance", color: "#FF851B", icon: "mdi-cash-100"
      }],
    },
  }),
  components: {
    TransactionCard, BalanceCard
  },
  methods: {
    detail() {
      console.log("i'm here");
    }
  }
}

</script>


<style scoped>
.clickable {
  cursor: pointer;
}
</style>