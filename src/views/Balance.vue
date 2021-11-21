<template>
    <v-container fluid>
        <v-row class="mx-auto mt-5">
            <v-col>
                <v-card outlined class="grow-border">
                    <v-card-title>Search Balance</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" class="col-lg-6">
                                <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :return-value.sync="date"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="date"
                                            label="Choose a date to display balance"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            clearable
                                            outlined
                                            dense
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                        >OK</v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" class="col-lg-6">
                                <v-btn
                                    outlined
                                    rounded
                                    color="blue"
                                    :loading="loading"
                                    @click="search"
                                    class="mr-5"
                                >Search</v-btn>&nbsp;
                                <v-btn outlined rounded color="green">
                                    <download-csv :data="balances"></download-csv>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <BalanceCard
                v-for="(balance, index) in balances"
                :key="index"
                :usd_amount="balance.usd_amount"
                :cdf_amount="balance.cdf_amount"
                :icon="balance.icon"
                :title="balance.title"
                :color="balance.color"
            ></BalanceCard>
        </v-row>
        <v-row>
            <v-col>
                <v-snackbar color="info" v-model="snackbar" max-height="500" top>
                    {{ text }}
                    <template v-slot:action="{ attrs }">
                        <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                    </template>
                </v-snackbar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BalanceCard from "../components/BalanceCard.vue"
import services from '../services/services'

export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        loading: false,
        balances: [{
            cdf_amount: 0, usd_amount: 0, title: "Vodacom Balance", color: "#00A65A"
        }, {
            cdf_amount: 0, usd_amount: 0, title: "Orange Balance", color: "#FF851B"
        }, {
            cdf_amount: 0, usd_amount: 0, title: "Airtel Balance", color: "#DD4B39"
        },
        ],
        snackbar: false,
        text: "No Balance Founded"
    }),
    methods: {
        ...mapActions(["setMerchantBalanceAction"]),
        async search() {
            let today = new Date().toISOString().split('T')[0]

            if (this.date === today) {
                this.loading = true
                await this.setMerchantBalanceAction()

                this.balances[0].cdf_amount = this.merchant_balance[1]
                this.balances[0].usd_amount = this.merchant_balance[3]

                this.balances[1].cdf_amount = this.merchant_balance[5]
                this.balances[1].usd_amount = this.merchant_balance[7]

                this.balances[2].cdf_amount = this.merchant_balance[9]
                this.balances[2].usd_amount = this.merchant_balance[11]

                this.loading = false;
            }
            else {
                this.loading = true;
                let data = `${this.date},${this.merchant_code}`
                let resp = await services.balance_history(data)

                if (resp.length != 0) {
                    this.balances[0].usd_amount = parseFloat(resp[0])
                    this.balances[0].cdf_amount = parseFloat(resp[1])

                    this.balances[1].usd_amount = parseFloat(resp[4])
                    this.balances[1].cdf_amount = parseFloat(resp[5])

                    this.balances[2].usd_amount = parseFloat(resp[2])
                    this.balances[2].cdf_amount = parseFloat(resp[3])
                    this.loading = false;
                }
                else {
                    this.balances[0].usd_amount = 0
                    this.balances[0].cdf_amount = 0

                    this.balances[1].usd_amount = 0
                    this.balances[1].cdf_amount = 0

                    this.balances[2].usd_amount = 0
                    this.balances[2].cdf_amount = 0
                    this.snackbar = true;
                    this.loading = false;
                }
            }
        }
    },
    computed: {
        ...mapState(["merchant_balance", "merchant_code"])
    },
    components: { BalanceCard },
    mounted() {
        this.balances[0].cdf_amount = this.merchant_balance[1]
        this.balances[0].usd_amount = this.merchant_balance[3]

        this.balances[1].cdf_amount = this.merchant_balance[5]
        this.balances[1].usd_amount = this.merchant_balance[7]

        this.balances[2].cdf_amount = this.merchant_balance[9]
        this.balances[2].usd_amount = this.merchant_balance[11]
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
.grow-border {
    border: 3px solid lightgray;
}
</style>