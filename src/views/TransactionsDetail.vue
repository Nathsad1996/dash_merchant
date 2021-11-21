<template>
    <v-container fluid>
        <v-row class="mx-auto">
            <v-col cols="12" class="col-lg-1 float-left">
                <v-icon color="blue" size="50" @click="goBack">mdi-arrow-left-circle</v-icon>
            </v-col>
            <v-col cols="12" class="col-lg-9 mt-2 text-h5 text-center">
                <strong>Details des transactions</strong>
            </v-col>
            <v-col cols="12" class="col-lg-2 mt-2 float-lg-left d-flex justify-center">
                <v-btn outlined rounded color="green">
                    <download-csv :data="items"></download-csv>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
        headers: [
            {
                text: 'Merchant ID',
                align: 'start',
                value: 'thirdparty_reference',
            },
            { text: 'Action', value: 'action' },
            { text: 'Customer Details', value: 'customer_details' },
            { text: 'Method', value: 'method' },
            { text: 'Amount', value: 'amount' },
            { text: 'Currency', value: 'currency' },
            { text: 'Status', value: 'status' },
            { text: 'Telco Reference', value: 'telco_reference' },
            { text: 'Created At', value: 'created_at' },
        ],
        items: []
    }),
    computed: {
        ...mapState(["global_report_charge", "global_report_payout",
            "airtel_report_charge", "airtel_report_payout",
            "vodacom_report_charge", "vodacom_report_payout",
            "orange_report_charge", "orange_report_payout"])
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    },
    mounted() {
        let param = this.$route.params.detail
        if (param === "Airtel charge") {
            this.items = this.airtel_report_charge
        } else if (param === "Airtel payout") {
            this.items = this.airtel_report_payout

        } else if (param === "Vodacom payout") {
            this.items = this.vodacom_report_payout

        } else if (param === "Vodacom charge") {
            this.items = this.vodacom_report_charge

        } else if (param === "Orange payout") {
            this.items = this.orange_report_payout

        } else if (param === "Orange charge") {
            this.items = this.orange_report_charge

        } else if (param === "Payout") {
            this.items = this.global_report_payout

        } else if (param === "Charge") {
            this.items = this.global_report_charge
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
</style>