<template>

  <v-app>
    <v-navigation-drawer app v-model="drawer" style="background-color:#121212;">

        <div class="pa-2">
            <img src="https://templates.iqonic.design/cloudbox/html/assets/images/logo-white.png"  style="width : 190px; " />
        </div>

        <v-divider></v-divider>

        <div class="d-flex justify-center mt-5">
            <UploadFile />
        </div>

        <!-- navigation list -->
        <v-list class="mt-5">
            <v-list-item dark link>
                <v-list-item-icon >
                    <v-icon >mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <!-- <v-list-item dark link>
                <v-list-item-icon >
                    <v-icon >mdi-file-multiple </v-icon>
                </v-list-item-icon>
                <v-list-item-title>Files</v-list-item-title>
            </v-list-item>

            <v-list-item dark link>
                <v-list-item-icon >
                    <v-icon >mdi-history </v-icon>
                </v-list-item-icon>
                <v-list-item-title>Recent</v-list-item-title>
            </v-list-item>

            <v-list-item dark link>
                <v-list-item-icon >
                    <v-icon >mdi-star-box-multiple </v-icon>
                </v-list-item-icon>
                <v-list-item-title>Favourite</v-list-item-title>
            </v-list-item> -->

        </v-list>

        <!-- <div style="border-top-width : 0.5px; border-top-style : solid; border-top-color : white;"></div> -->

        <template v-slot:append>
            <div style="width : 100%;color:white" class="pa-5 mb-15"  >
                
                <div style="width : 100%" class="d-flex" >
                    <v-icon dark x-large>mdi-cloud-outline</v-icon>
                    <h2 class="my-auto ml-5">Storage</h2>
                </div>

                <div class="mt-3">
                    <p>{{ fileCount }} / {{ fileLimit }} Files Used</p>
                    <v-progress-linear :value=" filePrecentage "></v-progress-linear><br/>
                    <p>{{ filePrecentage }}% Full - {{ fileLimit - fileCount }} Files Free</p>

                    <v-btn outlined color="success" @click="() => $router.push('/maintenance')">BUY STORAGE</v-btn>
                </div>

            </div>
        </template>


    </v-navigation-drawer>

    <v-app-bar app style="background-color:#121212;" elevation="0">
        
        <v-toolbar-title>
            <v-btn icon dark @click="() => drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <label class="white--text">DROP</label>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items dark>
            <UserAccountVue />
        </v-toolbar-items>

    </v-app-bar>

    <v-main class="pa-2" style="background-color:#1D1D1F;color:white;" >
        
        <Files v-if="false" />
        <Favourite v-if="false" />
        <Main v-if="true" />

    </v-main>

    <v-footer style="background-color : #121212;" class="pa-2 d-flex justify-space-between">
        <label style="color : #929292">Privacy Policy Terms of Use</label>
        <label style="color : #929292">Copyright 2022 DROP All Rights Reserved.</label>
    </v-footer>

  </v-app>

</template>

<script>

import Files from './Files.vue';
import Favourite from './Favourite.vue'
import Main from './Main.vue'
import UploadFile from '../../components/Dialog/UploadFile.vue'
import FileHandle from '../../Repository/FileHandle';
import UserAccountVue from '../../components/Dialog/UserAccount.vue';

export default {
    
    components: {
        Files,
        Favourite,
        Main,
        UploadFile,
        UserAccountVue
    },

    computed : {

        filePrecentage() {
            return (this.fileCount / this.fileLimit) * 100;
        },

    },

    data(){
        return {
            drawer: true,
            fileLimit : this.$store.state.currentUser.file_limit,
            fileCount : 0
        }
    },

    async created(){

        try{
            let userid = this.$store.state.currentUser.id;
            let res = await FileHandle.getFileCount();
            console.log('count ' , res);
            this.fileCount = res.data.userFilesCount;
        }catch(e){
            console.log(e);
        }


    },


}
</script>