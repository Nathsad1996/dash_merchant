<template>
    <v-col class="d-flex justify-center">
        <v-card outlined hover elevation="5" :color="color" min-height="200" width="100%">
            <v-card-title class="d-flex justify-center white--text">
                {{ title }} &nbsp;
                <v-icon color="white" size="40">{{ icon }}</v-icon>
            </v-card-title>
            <v-card-text>
                <v-row class="mx-auto ml-15">
                    <v-col class="fill-height">
                        <v-card flat :color="color">
                            <v-card-title class="white--text">USD</v-card-title>
                            <v-card-text class="text-h5 white--text">
                                <strong>{{ usd_amount }}</strong>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col class="fill-height">
                        <v-card flat :color="color">
                            <v-card-title class="white--text">CDF</v-card-title>
                            <v-card-text class="text-h5 white--text">
                                <strong>{{ cdf_amount }}</strong>
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
    props: ["cdf_amount", "usd_amount", "title", "color", "icon"],
}
</script>

<style>
</style>