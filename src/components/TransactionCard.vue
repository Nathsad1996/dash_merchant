<template>
    <v-col class="d-flex justify-center">
        <v-card
            sm="12"
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
            <v-card-text class="text-h5 white--text d-flex justify-center">
                <v-container>
                    <v-row dense class="mx-auto ml-5">
                        <v-col
                            class="text-center text-h4 font-weight-bold"
                        >Successful : {{ transactions_data.Successful === undefined ? 0 : transactions_data.Successful }}</v-col>
                    </v-row>
                    <v-row dense class="mx-auto">
                        <v-col
                            class="text-center"
                        >Failed : {{ transactions_data.Failed === undefined ? 0 : transactions_data.Failed }}</v-col>
                        <v-col
                            class="text-center"
                        >Pending : {{ transactions_data.Pending === undefined ? 0 : transactions_data.Pending }}</v-col>
                    </v-row>
                    <v-row dense class="mx-auto">
                        <v-col
                            class="text-center"
                        >Submitted : {{ transactions_data.Submitted === undefined ? 0 : transactions_data.Submitted }}</v-col>
                        <v-col
                            class="text-center"
                        >None : {{ transactions_data.None === undefined ? 0 : transactions_data.None }}</v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn text block color="white">
                    Details &nbsp;
                    <v-icon>mdi-information</v-icon>
                </v-btn>
            </v-card-actions>
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