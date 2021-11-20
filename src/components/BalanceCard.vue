<template>
    <v-col class="d-flex justify-center">
        <v-card outlined elevation="5" :color="color" min-height="200" width="100%">
            <v-card-title class="d-flex justify-center white--text">
                {{ title }} &nbsp;
            </v-card-title>
            <v-card-text>
                <v-row class="mx-auto ml-15">
                    <v-col class="fill-height">
                        <v-card flat :color="color">
                            <v-card-title class="white--text">USD</v-card-title>
                            <v-card-text class="text-h5 white--text">
                                <strong>{{ Intl.NumberFormat("fr").format(usd_amount.toFixed(2))  }}</strong>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col class="fill-height">
                        <v-card flat :color="color">
                            <v-card-title class="white--text text-center">CDF</v-card-title>
                            <v-card-text class="text-h5 white--text">
                                <strong>{{ Intl.NumberFormat("fr").format(cdf_amount.toFixed(2))  }}</strong>
                            </v-card-text>
                        </v-card>
                    </v-col>
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