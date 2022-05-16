<template>
    
    <v-card class="height : 45vh">
        <v-card-title class="text-h5 #1D1D1F"> Upload File </v-card-title>

        <v-divider></v-divider>

        <v-card-text @dragover.prevent @drop.prevent class="pa-2">

            <v-row style="width : 100%;" class="red">

                <v-col cols="12" md="6" class="blue">
                    <img src="https://bucket.wondersoftinno.com/check.png" alt="check" width="100" height="100" />
                </v-col>

                <v-col cols="12" md="6" class="yellow">
                    asd
                </v-col>

            </v-row>

        </v-card-text>

    </v-card>

</template>

<script>
export default {
    props : ['data'],
}
</script>