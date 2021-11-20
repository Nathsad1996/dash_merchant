<template>
    <v-col cols="12" class="d-flex justify-center">
        <v-card outlined elevation="5" :color="color" height="70" width="100%">
            <v-card-text>
                <v-row class="mx-auto ml-15">
                    <v-col class="d-flex text-h5 justify-center white--text">
                        <strong>{{ title }}</strong> &nbsp;
                    </v-col>
                    <v-col
                        class="text-h5 white--text font-weight-bold"
                    >{{ Intl.NumberFormat("fr").format(usd_amount.toFixed(2)) }} USD</v-col>
                    <v-col
                        class="text-h5 white--text font-weight-bold"
                    >{{ Intl.NumberFormat("fr").format(cdf_amount.toFixed(2)) }} CDF</v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: ["cdf_amount", "usd_amount", "title", "color"],
}
</script>

<style>
</style>