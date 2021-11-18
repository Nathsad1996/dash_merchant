<template>
    <v-container fluid>
        <v-row class="mx-auto mt-5">
            <v-col class="d-flex justify-end">
                <v-dialog v-model="dialog">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn rounded v-bind="attrs" v-on="on" color="blue">New Transfert</v-btn>
                        <v-btn rounded outlined color="green" class="ml-5">Export Csv</v-btn>
                    </template>

                    <v-card width="400">
                        <v-card-title style="background-color: #643416;" class="text-h5 d-flex justify-center white--text">New Transfert Details</v-card-title>

                        <v-card-text class="mt-5">
                            <v-form>
                                <v-select placeholder="Channel" solo dense :items="channels"></v-select>
                                <v-select placeholder="From" solo dense :items="from_ops">From</v-select>
                                <v-select placeholder="To" solo dense :items="to_ops">To</v-select>
                                <v-select :items="currencies" solo dense placeholder="Currency"></v-select>
                                <v-text-field solo dense type="number" placeholder="Amount"></v-text-field>
                            </v-form>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text @click="dialog = false">Send Request</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        headers: [
            {
                text: 'Merchant ID',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'Amount', value: 'calories' },
            { text: 'Type', value: 'fat' },
            { text: 'Customer details', value: 'carbs' },
            { text: 'Status', value: 'protein' },
            { text: 'Created At', value: 'iron' },
        ],
        desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%',
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%',
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%',
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8%',
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: '16%',
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: '0%',
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: '2%',
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: '45%',
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: '22%',
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%',
            },
        ],
        channels: ["Wallet To Bank", "Wallet To Wallet", "Wallet To Cash", "Bank To Wallet"],
        from_ops: [],
        to_ops: [],
        currencies: ["USD", "CDF"]
    })
}
</script>

<style>
</style>