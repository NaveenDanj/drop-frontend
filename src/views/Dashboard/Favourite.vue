<template>
  
  <div class="mt-5 pa-5">
    
    <h2>Favourite</h2>

    <v-data-table
        style="background-color:#121212;"
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

</template>

<script>
  export default {
    data () {
      return {

        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Owner', value: 'owner' },
          { text: 'Uploaded Date', value: 'upload_date' },
          { text: 'File Size', value: 'file_size' },
          { text: 'Action', value: 'action' },
        ],

        items : [

            {
                name: 'Weekly Report.pdf',
                owner: 'John Doe',
                upload_date: '12/12/2019',
                file_size: '1.5MB',
            },
            {
                name: 'Milestone.docx',
                owner: 'John Doe',
                upload_date: '12/12/2019',
                file_size: '1.5MB',
            },
            {
                name: 'Training center.xlsx',
                owner: 'John Doe',
                upload_date: '12/12/2019',
                file_size: '1.5MB',
            },
            {
                name: 'Flavour.pptx',
                owner: 'John Doe',
                upload_date: '12/12/2019',
                file_size: '1.5MB',
            },

        ]
        
      }
    },
  }
</script>