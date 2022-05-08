<template>
    
    <v-card>
        <v-card-title class="text-h6 #1D1D1F">
        <v-icon left>mdi-file</v-icon>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="pa-2 d-flex justify-center" >

            <v-progress-circular
                
                :rotate="-90"
                :size="250"
                :width="15"
                :value="uploadedValue"
                color="primary"
            >
            {{ uploadedValue }} %
            </v-progress-circular>

        </v-card-text>

    </v-card>

</template>

<script>

    export default {
        props : ['uploadedValue']
    }

</script>
