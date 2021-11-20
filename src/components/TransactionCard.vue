<template>
    <v-col class="d-flex justify-center">
        <v-card
            outlined
            hover
            elevation="5"
            @click="detail"
            :color="color"
            class="clickable"
            width="100%"
            min-height="200"
        >
            <v-card-title class="d-flex white--text justify-center">{{ title }} transactions &nbsp;</v-card-title>
            <v-card-text class="text-h5 white--text font-weight-bold d-flex justify-center">
                <v-container>
                    <v-row
                        dense
                        class="mx-auto"
                        v-for="(value, key)  in transactions_data"
                        :key="value"
                    >
                        <v-col class="d-flex justify-center">{{ key }} : {{ value }}</v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: ["color", "title", "transactions_data"],
    methods: {
        detail() {
            if (this.title === "Airtel Charge") {
                this.$router.push(`/transactions-detail/${this.title}`)
            } else if (this.title === "Airtel Payout") {
                this.$router.push(`/transactions-detail/${this.title}`)

            } else if (this.title === "Vodacom Payout") {
                this.$router.push(`/transactions-detail/${this.title}`)

            } else if (this.title === "Vodacom Charge") {
                this.$router.push(`/transactions-detail/${this.title}`)

            } else if (this.title === "Orange Payout") {
                this.$router.push(`/transactions-detail/${this.title}`)

            } else if (this.title === "Orange Charge") {
                this.$router.push(`/transactions-detail/${this.title}`)

            } else if (this.title === "Payout") {
                this.$router.push(`/transactions-detail/${this.title}`)

            } else if (this.title === "Charge") {
                this.$router.push(`/transactions-detail/${this.title}`)
            }
        }
    }
}
</script>

<style>
</style>