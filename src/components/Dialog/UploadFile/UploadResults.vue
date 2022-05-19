<template>
    
    <v-card class="overflow-hidden">
        <v-card-title class="text-h5 #1D1D1F"> 
            Upload File 
            <v-spacer></v-spacer>
            <v-btn rounded icon
                @click="close"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text @dragover.prevent @drop.prevent class="pa-2">

            <v-row style="width : 100%;">

                <v-col cols="12" md="6" class="d-flex justify-center">
                    <div>
                        <center><img src="https://bucket.wondersoftinno.com/check.png" alt="check" width="100" height="100" /></center>
                        <center><label style="font-size : 18px; margin-top : -10px;">You're done!</label></center>
                        <center><p>The file has been uploaded. Your file is available for maximum 7 days!</p></center>
                        <center><label>Send another?</label></center>
                    </div>
                </v-col>

                <v-col cols="12" md="6" >
                    <div>
                        <label>Click to Copy(Valid for 24h)</label><br/>
                        <v-text-field 
                            class="mt-5"
                            outlined 
                            dense
                            placeholder="Password"
                            color="#A6A6A6" 
                            dark 
                            readonly 
                            style="width : 100%;"
                            :value="$store.state.currentFileData.password"
                        />

                        <label>Your Link</label><br/><br/>

                        <label ref="fileurl">https://drop.wondersoftinno.com/getfile/{{ $store.state.uploadedFile.fileID }}</label><br/>

                        <v-btn
                            outlined
                            color="purple"
                            rounded
                            dark
                            class="mt-5 mb-5"
                            @click="copyToClipBoard"
                        >
                            Copy Link
                        </v-btn>

                    </div>
                </v-col>

            </v-row>

        </v-card-text>

    </v-card>

</template>

<script>
export default {
    props : ['data'],

    methods : {

        close(){
            this.$emit('close');
        },

        copyToClipBoard(){

            let copyText = `https://drop.wondersoftinno.com/getfile/${ this.$store.state.uploadedFile.fileID }`;
            navigator.clipboard.writeText(copyText);
        }

    }

}
</script>