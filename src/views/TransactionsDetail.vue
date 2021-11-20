<template>
    <v-container fluid>
        <v-row class="mx-auto">
            <v-col cols="1" class="float-left">
                <v-icon color="blue" size="50" @click="goBack">mdi-arrow-left-circle</v-icon>
            </v-col>
            <v-col cols="9" class="mt-2 text-h5 text-center">
                <strong>Details des transactions</strong>
            </v-col>
            <v-col class="mt-2 float-right">
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
        if (param === "Airtel Charge") {
            this.items = this.airtel_report_charge
        } else if (param === "Airtel Payout") {
            this.items = this.airtel_report_payout

        } else if (param === "Vodacom Payout") {
            this.items = this.vodacom_report_payout

        } else if (param === "Vodacom Charge") {
            this.items = this.vodacom_report_charge

        } else if (param === "Orange Payout") {
            this.items = this.orange_report_payout

        } else if (param === "Orange Charge") {
            this.items = this.orange_report_charge

        } else if (param === "Payout") {
            this.items = this.global_report_payout

        } else if (param === "Charge") {
            this.items = this.global_report_charge
        }
    }
}
</script>

<style>
</style>