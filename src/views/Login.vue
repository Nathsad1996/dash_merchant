<template>
    <v-container  fluid>
        <v-row class="mx-auto mt-15">
            <v-col offset-lg="4" cols="4">
                <v-card rounded="xl" class="px-2" elevation="5">
                    <v-card-title class="mb-5 d-flex justify-center">
                        <v-img src="../assets/FreshPay logo_revised (1).png"></v-img>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field solo rounded placeholder="Login"></v-text-field>
                            <v-text-field @click:append="show = !show" v-model="password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"  solo rounded placeholder="Password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="pb-5">
                        <v-btn rounded large block color="blue">
                            <v-icon>mdi-login</v-icon>Login
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        show: false,
        password: ""
    })
}
</script>

<style scoped>
</style>