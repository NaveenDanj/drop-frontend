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
            <!-- <v-btn icon dark>
                <v-icon>mdi-message-text</v-icon>
            </v-btn>
            <v-btn icon dark>
                <v-icon>mdi-account</v-icon>
            </v-btn> -->
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

export default {
    
    components: {
        Files,
        Favourite,
        Main,
        UploadFile
    },

    data(){
        return {
            drawer: true
        }
    }

}
</script>