<template>
<v-container fluid>
    <v-row>
        <v-col cols="12" sm="3" md="2">
            <v-card>
                <v-container>
                    <div class="text-h6 black--text">Filters</div>
                    <div class="text-center text-subtitle-1 black--text">Launch year</div>
                    <v-divider></v-divider>
                    <v-row class="pb-3">
                        <v-col cols="6" sm="6" align="center" justify="center" md="6" v-for="(year,i) in years" :key="year.text+''+i">
                            <v-btn @click="changeYear(year.value)" v-bind:color="selectedYear==year.value ? 'green lighten-2' : 'green lighten-4'" small>{{ year.text }}</v-btn>
                        </v-col>
                    </v-row>
                    <div class="text-center text-subtitle-1 black--text">Successfull Launch</div>
                    <v-divider></v-divider>
                    <v-row class="pb-3">
                        <v-col cols="6" md="6" sm="6" align="center" justify="center" v-for="launch in launchs" :key="launch.text+''+launch.text">
                            <v-btn @click="changeLaunch(launch.value)" v-bind:color="selectedLaunch==launch.value ? 'green lighten-2' : 'green lighten-4'" small>{{ launch.text }}</v-btn>
                        </v-col>
                    </v-row>
                    <div class="text-center text-subtitle-1 black--text">Successfull Landing</div>
                    <v-divider></v-divider>
                    <v-row class="pb-3">
                        <v-col cols="6" md="6" sm="6" align="center" justify="center" v-for="(landing,i) in landings" :key="i+''+landing.text+''+landing.value">
                            <v-btn @click="changeLanding(landing.value)" v-bind:color="selectedLanding==landing.value ? 'green lighten-2' : 'green lighten-4'" small>{{ landing.text }}</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
        <v-col cols="12" sm="9" md="10">
            <v-row>
                <v-col cols="12" sm="6" md="3" class="pt-0" v-for="(spacexdata, i) in spacexdatalist" :key="i">
                    <Card :missionid="spacexdata.mission_id" :missionimage="spacexdata.links.mission_patch" :missionname="spacexdata.mission_name" :flightnumber="spacexdata.flight_number" :launchyear="spacexdata.launch_year" :launchsuccess="spacexdata.launch_success" :landingsuccess="spacexdata.launch_landing" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import {
    mapGetters
} from "vuex";
import store from "@/store";

import {
    FETCH_SPACEX_DATA
} from "@/store/actions.type";
import _ from 'lodash'
export default {
    name: 'Home',
    beforeRouteEnter(to, from, next) {
        store.dispatch(FETCH_SPACEX_DATA, 'launches?limit=100').then(() => {
            next();
        });
    },

    components: {
        Card: () => import('@/components/card/Card')
    },
    computed: {
        ...mapGetters(["spacexdatalist"]),
    },
    mounted() {
        this.$
    },
    methods: {
        changeLaunch: _.debounce(function (launch) {
            this.selectedLaunch = launch
            this.filter()
        }, 500),
        changeYear: _.debounce(function (year) {
            this.selectedYear = year
            this.filter()
        }, 500),
        changeLanding: _.debounce(function (landing) {
            this.selectedLanding = landing
            this.filter()
        }, 500),
        filter() {
            this.$store.dispatch(FETCH_SPACEX_DATA, 'launches?limit=100&launch_success=' + (this.selectedLaunch != null ? this.selectedLaunch : '') + '&launch_year=' + (this.selectedYear != null ? this.selectedYear : '') + '&land_success=' + (this.selectedLanding != null ? this.selectedLanding : ''))
        }
    },
    data: () => ({
        selectedYear: null,
        selectedLaunch: null,
        selectedLanding: null,
        years: [{
                value: 2006,
                text: "2006"
            },
            {
                value: 2007,
                text: "2007"
            },
            {
                value: 2008,
                text: "2008"
            },
            {
                value: 2009,
                text: "2009"
            },
            {
                value: 2010,
                text: "2010"
            },
            {
                value: 2011,
                text: "2011"
            },
            {
                value: 2012,
                text: "2012"
            },
            {
                value: 2013,
                text: "2013"
            },
            {
                value: 2014,
                text: "2014"
            },
            {
                value: 2015,
                text: "2015"
            },
            {
                value: 2016,
                text: "2016"
            },
            {
                value: 2017,
                text: "2017"
            },
            {
                value: 2018,
                text: "2018"
            },
            {
                value: 2019,
                text: "2019"
            },
        ],
        launchs: [{
                value: true,
                text: "True"
            },
            {
                value: false,
                text: "False"
            },
        ],
        landings: [{
                value: true,
                text: "True"
            },
            {
                value: false,
                text: "False"
            },
        ],

    }),
}
</script>
