<template>
    <v-container fluid>
        <v-row class="mx-auto mt-5">
            <v-col>
                <v-card outlined class="grow-border">
                    <v-card-title>Search Balance</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
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
                            <v-col>
                                <v-btn outlined rounded color="blue">Search</v-btn>&nbsp;
                                <v-btn outlined rounded color="green">Export CSV</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <BalanceCard v-for="(balance, index) in balances" :key="index" :usd_amount="balance.usd_amount" :cdf_amount="balance.cdf_amount" :icon="balance.icon" :title="balance.title" :color="balance.color"></BalanceCard>
        </v-row>
    </v-container>
</template>

<script>
import BalanceCard from "../components/BalanceCard.vue"

export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        balances: [{
            cdf_amount: "16 278", usd_amount: "8 798", title: "Airtel Balance", color: "#DD4B39", icon: "mdi-cash-100"
        }, {
            cdf_amount: "16 278", usd_amount: "8 798", title: "Vodacom Balance", color: "#00A65A", icon: "mdi-cash-100"
        }, {
            cdf_amount: "16 278", usd_amount: "8 798", title: "Orange Balance", color: "#FF851B", icon: "mdi-cash-100"
        }, 
        ]
    }),
    components: { BalanceCard }
}
</script>

<style scoped>
.grow-border {
    border: 3px solid lightgray;
}
</style>