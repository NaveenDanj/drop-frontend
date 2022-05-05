<template>
  <div class="pa-5" style="color: white">
    <h2>My Drive</h2>

    <v-row class="mt-3">
      <v-col cols="12" md="8">
        <v-card
          style="background-color: #121212"
          class="elevation-0 white--text"
        >
          <div class="d-flex pa-3 justify-space-between">
            <div class="">
              <span style="font-size: 30px">Welcome Naveen</span>
              <p style="font-size: 15px">
                You have 32 new notifications and 23 unread messages to reply
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

      <v-col cols="12" md="4" style="height: 100%">
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
      </v-col> </v-row
    ><br />


    <div style="background-color : #121212;" class="pa-5">

      <h2>Files</h2>

      <v-data-table
        style="background-color: #121212"
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-0 mt-5"
        rounded
        dark
      >
        <template v-slot:[`item.action`]="{}">
          <v-btn icon>
            <!-- menu icon -->
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
      </v-data-table>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Owner", value: "owner" },
        { text: "Uploaded Date", value: "upload_date" },
        { text: "File Size", value: "file_size" },
        { text: "Action", value: "action" },
      ],

      items: [
        {
          name: "Weekly Report.pdf",
          owner: "John Doe",
          upload_date: "12/12/2019",
          file_size: "1.5MB",
        },
        {
          name: "Milestone.docx",
          owner: "John Doe",
          upload_date: "12/12/2019",
          file_size: "1.5MB",
        },
        {
          name: "Training center.xlsx",
          owner: "John Doe",
          upload_date: "12/12/2019",
          file_size: "1.5MB",
        },
        {
          name: "Flavour.pptx",
          owner: "John Doe",
          upload_date: "12/12/2019",
          file_size: "1.5MB",
        },
      ],
    };
  },
};
</script>