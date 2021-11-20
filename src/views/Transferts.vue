<template>
    <v-container fluid>
        <v-row class="mx-auto mt-5">
            <v-col class="d-flex justify-end">
                <v-dialog v-model="dialog">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn rounded v-bind="attrs" v-on="on" color="blue">New Transfert</v-btn>
                        <v-btn rounded outlined color="green" class="ml-5">
                            <download-csv :data="transferts"></download-csv>
                        </v-btn>
                    </template>

                    <v-card width="400">
                        <v-card-title
                            style="background-color: #643416;"
                            class="text-h5 d-flex justify-center white--text"
                        >New Transfert Details</v-card-title>

                        <v-card-text class="mt-5">
                            <v-form>
                                <v-select
                                    @change="update"
                                    placeholder="Channel"
                                    solo
                                    dense
                                    :items="channels"
                                    v-model="transfert.channel"
                                ></v-select>
                                <v-select
                                    v-model="transfert.from"
                                    placeholder="From"
                                    solo
                                    dense
                                    :items="from_ops"
                                >From</v-select>
                                <v-select
                                    v-model="transfert.to"
                                    placeholder="To"
                                    solo
                                    dense
                                    :items="to_ops"
                                >To</v-select>
                                <v-select
                                    v-model="transfert.currency"
                                    :items="currencies"
                                    solo
                                    dense
                                    placeholder="Currency"
                                ></v-select>
                                <v-text-field
                                    v-model="transfert.amount"
                                    solo
                                    dense
                                    type="number"
                                    placeholder="Amount"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                text
                                @click="process"
                                :loading="loading"
                            >Send Request</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="transferts"
                    :items-per-page="5"
                    :loading="loading"
                    class="elevation-1"
                ></v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import services from '../services/services';
export default {
    data: () => ({
        dialog: false,
        headers: [
            {
                text: 'Channel',
                align: 'start',
                sortable: false,
                value: 'channel',
            },
            { text: 'Amount', value: 'amount' },
            { text: 'Currency', value: 'currency' },
            { text: 'Requested At', value: 'requested_at' },
            { text: 'Processed At', value: 'processed_at' },
            { text: 'Transfert From', value: 'transfert_from' },
            { text: 'Transfert To', value: 'transfert_to' },
        ],
        channels: ["Wallet To Bank", "Wallet To Wallet"],
        from_ops: [],
        to_ops: [],
        currencies: ["USD", "CDF"],
        transfert: {
            amount: 0,
            currency: "",
            from: "",
            to: "",
            requested_at: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            channel: "",
            merchant_code: ""
        },
        loading: false
    }),
    methods: {
        ...mapActions(["setTransfertsAction"]),
        update(e) {
            if (e === "Wallet To Bank") {
                this.from_ops = ["Orange", "Vodacom", "Airtel"];
                this.to_ops = [
                    "RawBank",
                    "BankOfAfrica",
                    "ProCredit",
                    "EquityBCDC",
                    "Finca",
                    "EcoBank",
                    "AccessBank",
                ];
            }
            else if (e === "Wallet To Wallet") {
                this.from_ops = ["Orange", "Vodacom", "Airtel"];
                this.to_ops = ["Orange", "Vodacom", "Airtel"];
            }
            else if (e === "Bank To Wallet") {
                this.to_ops = ["Orange", "Vodacom", "Airtel"];
                this.from_ops = [
                    "RawBank",
                    "BankOfAfrica",
                    "ProCredit",
                    "EquityBCDC",
                    "EcoBank",
                    "AccessBank",
                ];
            }
        },
        async process() {
            this.transfert.merchant_code = this.merchant_code
            this.loading = true
            await services.add_transfert(this.transfert)
            await this.setTransfertsAction()
            this.loading = false
            this.dialog = false
        }
    },
    computed: {
        ...mapState(["merchant_code", "transferts"])
    },
    async mounted() {
        this.loading = true
        await this.setTransfertsAction()
        this.loading = false
    }
}
</script>

<style>
</style>