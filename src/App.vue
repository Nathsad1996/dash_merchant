<template>
  <v-app id="inspire">
    <v-navigation-drawer width="300" v-show="login" color="#222D32" v-model="drawer" app>
      <v-list>
        <v-list-item link to="/home" class="white--text">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-group :value="true" prepend-icon="mdi-chart-box">
          <template v-slot:activator>
            <v-list-item-title class="white--text">Business Reports</v-list-item-title>
          </template>
          <v-list-item to="/report" link class="white--text">
            <v-list-item-icon>
              <v-icon>mdi-swap-horizontal</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Transferts</v-list-item-title>
          </v-list-item>
          <v-list-item to="/balance" link class="white--text">
            <v-list-item-icon>
              <v-icon>mdi-bank</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Balance</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item link to="/history" class="white--text">
          <v-list-item-icon>
            <v-icon>mdi-history</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Transactions history</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar v-show="login" color="#F04E23" class="white--text" dense app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-toolbar-title class="d-none d-lg-flex d-md-flex d-xl-flex d-xl-none">
        <strong>Freshpay Congo Merchant Portal</strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div>
            <v-icon color="white" size="35" v-bind="attrs" v-on="on">mdi-account-circle</v-icon>&nbsp;
            <strong class="text-button">{{ merchant_name }}</strong>
          </div>
        </template>
        <v-list>
          <v-list-item link @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"

export default {
  data: () => ({
    drawer: false,
  }),
  methods: {
    ...mapActions(["setLoginAction"]),
    logout() {
      window.sessionStorage.clear()
      this.setLoginAction(false)
      this.$router.push("/")
      window.location.reload()
    }
  },
  computed: {
    ...mapState(["merchant_name"]),
    ...mapGetters(["login"])
  }
}
</script>

<style>
  #inspire{
    font-family: 'Avenir';
  }
</style>