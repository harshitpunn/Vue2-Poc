<template>
<v-card>
    <v-container>
        <v-img :src="missionimage">
        </v-img>
        <div class="text-subtitle-1 font-weight-bold blue--text pt-2 pb-3">{{ missionname+'#'+flightnumber }}</div>
        <div class="text-subtitle-1 pb-2"><span class="font-weight-bold black--text">Mission ids:</span>
            <span>
                <ul>
                    <li v-for="(missioniddata,i) in missionid" class="blue--text" :key="missionid+''+i">{{ missioniddata}}</li>
                </ul>
            </span>
        </div>
        <div class="text-subtitle-1 pb-2"><span class="font-weight-bold black--text">Launch year:</span><span class="blue--text">{{ launchyear }}</span></div>
        <div class="text-subtitle-1 pb-2"><span class="font-weight-bold black--text">Successful Launch:</span><span class="blue--text">{{ (launchsuccess ? 'true' : 'false')}}</span></div>
        <div class="text-subtitle-1 pb-2"><span class="font-weight-bold black--text">Successful Landing:</span><span class="blue--text">{{ (landingsuccess ? 'true' : 'false')}}</span></div>
    </v-container>
</v-card>
</template>

<script>
export default {
    name: 'Card',
    props: {
        missionname: String,
        missionid: Array,
        flightnumber: Number,
        launchyear: String,
        launchsuccess: Boolean,
        landingsuccess: Boolean,
        missionimage: String,
    },

};
</script>
