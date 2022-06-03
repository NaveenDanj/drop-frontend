<template>
  <div class="pa-5" style="color: white">
    <h2>My Drive</h2>

    <v-row class="mt-3">
      <v-col cols="12" md="12">
        <v-card
          style="background-color: #121212"
          class="elevation-0 white--text"
        >
          <div class="d-flex pa-3 justify-space-between">
            <div class="">
              <span style="font-size: 30px">Welcome {{ $store.state.currentUser.name }}</span>
              <p style="font-size: 15px">
                upload files to your cloud storage and share them with your friends. No signup required. No upload limits.
              </p>
            </div>

            <div>
              <img
                style="width: 150px"
                src="https://templates.iqonic.design/cloudbox/html/assets/images/layouts/mydrive/background.png"
              />
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- <v-col cols="12" md="4" style="height: 100%">
        <v-card
          style="background-color: #121212"
          class="elevation-0 white--text pa-3"
        >
          <span style="font-size: 20px">Quick Access</span>

          <div class="d-flex justify-space-around mt-1">
            <div style="border: 1px solid gray">
              <img
                style="width: 150px; height: 75px"
                src="https://templates.iqonic.design/cloudbox/html/assets/images/layouts/mydrive/folder-1.png"
              /><br />
            </div>

            <div style="border: 1px solid gray">
              <img
                style="width: 150px; height: 75px"
                src="https://templates.iqonic.design/cloudbox/html/assets/images/layouts/mydrive/folder-2.png"
              />
            </div>
          </div>
        </v-card>
      </v-col> -->
      
    </v-row
    ><br />

    <div style="background-color: #121212" class="pa-5">
      <div class="d-flex justify-space-between">
        <h2>Files</h2>
      </div>

      <v-data-table
        style="background-color: #121212"
        :headers="headers"
        :items="items"
        :items-per-page="5"
        hide-default-footer
        class="elevation-0 mt-5"
        rounded
        dark
      >
        <template v-slot:[`item.action`]="{ item }">
          <v-btn icon @click="getLink(item)">
            <!-- menu icon -->
            <v-icon>mdi-link-variant </v-icon>
          </v-btn>
          <SendFileToUserVue />
        </template>
      </v-data-table>

      <center>
        <div style="width : 50%">
          <v-pagination v-model="page" class="my-4" :length="pages"></v-pagination>
        </div>
      </center>

    </div>
  </div>
</template>

<script>
import FileHandle from "../../Repository/FileHandle";
import SendFileToUserVue from "../../components/Dialog/SendFileToUser.vue";

export default {

  components : {
    SendFileToUserVue
  },

  watch:{

    page(newPage){
      console.log(newPage);
      this.getData();
    }


  },


  created() {
    this.getData();
  },

  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "original_name",
        },
        { text: "Uploaded Date", value: "created_at" },
        { text: "Expire At", value: "expire_at" },
        { text: "Action", value: "action" },
      ],
      currentPage: 1,
      items: [],
      page : 1,
      pages : 1,
    };
  },

  methods: {
    async getData() {
      try {
        let userid = this.$store.state.currentUser.id;
        let response = await FileHandle.getUserFiles(userid , this.page);
        console.log("response", response);
        this.items = response.data.userFiles.data;
        this.pages = response.data.userFiles.total;

        this.items.map((item) => {
          item.created_at = new Intl.DateTimeFormat("en-US").format(
            new Date(item.created_at)
          );

          let created_at_timestamp = new Date(item.created_at).getTime();
          let expire_at_timestamp = item.expired_at + created_at_timestamp;
          item.expire_at = new Intl.DateTimeFormat("en-US").format(
            new Date(expire_at_timestamp)
          );

          // item.expire_at =
        });
      } catch (err) {
        console.log(err);
      }
    },

    getLink(item) {
      // copy link to clipboard
      console.log(item);
      navigator.clipboard.writeText('https://drop.wondersoftinno.com/getfile/' + item.fileID);
    },
  },
};
</script>