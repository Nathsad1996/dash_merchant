<template>
    <v-container fluid>
        <v-row class="mt-15">
            <v-col class="d-flex justify-center">
                <v-card width="400" rounded="xl" class="px-2" elevation="5">
                    <v-card-title class="mb-5 d-flex justify-center">
                        <v-img src="../assets/FreshPay logo_revised (1).png"></v-img>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="login" solo rounded placeholder="Login"></v-text-field>
                            <v-text-field
                                @click:append="show = !show"
                                v-model="password"
                                :type="show ? 'text' : 'password'"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                solo
                                rounded
                                placeholder="Password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="pb-5">
                        <v-btn :loading="loading" rounded large block color="blue" @click="loginUser">
                            <v-icon>mdi-login</v-icon>Login
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-snackbar color="red" v-model="snackbar" max-height="500" top>
                    {{ text }}
                    <template v-slot:action="{ attrs }">
                        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                    </template>
                </v-snackbar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from "vuex"
import services from "../services/services"

export default {
    data: () => ({
        loading: false,
        show: false,
        login: "",
        password: "",
        snackbar: false,
        text: "Bad credentials, please enter right login information"
    }),
    methods: {
        ...mapActions(["setLoginAction", "setMerchantAction", "setMerchantCodeAction"]),
        async loginUser() {
            let cred = { password: this.password, login: this.login }
            this.loading = true
            let response = await services.login(cred)
            this.loading = false
            if (response.logged === false) {
                this.snackbar = true;
            }
            else {
                this.setMerchantAction(response.merchant);
                this.setMerchantCodeAction(response.merchant_code)
                this.setLoginAction(true)
                this.$router.push('/home')
            }
        }
    }
}
</script>

<style scoped>
</style>