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
            <v-card-title class="d-flex white--text justify-center">
                {{ title }} transactions &nbsp;
                <v-icon color="white" size="40">{{ icon }}</v-icon>
            </v-card-title>
            <v-card-text class="text-h5 white--text font-weight-bold d-flex justify-center">
                Successful : 353 <br>
                Failed : 25 <br>
                Pending : 47 <br>
                Submitted : 2 <br>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: ["color", "title", "icon", "amount"],
    methods: {
        detail() {
            if (this.title === "Charge") {
                this.$router.push('/transactions-detail')
            } else {
                this.$router.push('/transactions-detail')
            }
        }
    }
}
</script>

<style>
</style>