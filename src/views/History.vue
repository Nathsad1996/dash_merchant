<template>
  <v-container fluid>
    <v-row class="mx-auto mt-5">
      <v-col>
        <v-card outlined class="grow-border">
          <v-card-title>Transactions Search</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" class="col-lg-6">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="dates"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dates"
                      label="Choose a date range or a date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      clearable
                      outlined
                      dense
                    ></v-text-field>
                  </template>
                  <v-date-picker multiple v-model="dates" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" class="col-lg-6">
                <v-btn class="mr-5" dense outlined rounded color="blue" @click="search" :loading="loading">Search</v-btn>
                <v-btn dense outlined rounded color="green">
                  <download-csv :data="items"></download-csv>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-auto mt-10">
      <v-col>
        <v-data-table
          :loading="loading"
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import services from '../services/services'

export default {
  data: () => ({
    dates: "",
    menu: false,
    headers: [
      {
        text: 'Merchant ID',
        align: 'start',
        value: 'thirdparty_reference',
      },
      { text: 'Action', value: 'action' },
      { text: 'Customer Details', value: 'customer_details' },
      { text: 'Method', value: 'method' },
      { text: 'Amount', value: 'amount' },
      { text: 'Currency', value: 'currency' },
      { text: 'Status', value: 'status' },
      { text: 'Telco Reference', value: 'telco_reference' },
      { text: 'Created At', value: 'created_at' },
    ],
    items: [],
    loading: false
  }),
  methods: {
    async search() {
      let data = ""
      if (Array.isArray(this.dates)) {
        this.dates = this.dates.filter(el => el !== '')
        if (this.dates.length == 2) {
          data += `${this.dates[0]},${this.dates[1]},${this.merchant_code}`
        }
        else {
          data += `${this.dates[0]},${this.dates[0]},${this.merchant_code}`
        }
        this.loading = true
        let resp = await services.search_transactions(data)
        this.loading = false;
        this.items = resp;
      }
      else if (typeof this.dates === "string" && this.dates !== '') {
        data += `${this.dates},${this.merchant_code}`
        this.loading = true
        let resp = await services.search_transactions(data)
        this.loading = false;
        this.items = resp;
      }
      else {
        this.loading = true
        let resp = await services.week_history()
        this.loading = false;
        this.items = resp;
      }

    }
  },
  computed: {
    ...mapState(['merchant_code'])
  },
  async mounted() {
    this.loading = true
    let data = await services.week_history()
    this.loading = false;
    this.items = data;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
.grow-border {
  border: 3px solid lightgray;
}
</style>