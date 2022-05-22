<template>
  <div class="pa-2">
    <div class="ma-2">
      <label
        ><b>Update {{ version }}: The update addresses <a :href="issueLink" target="_blank">this</a> security issue.</b></label
      ><br />
      <label><b>Release Date : {{ releaseDate }} </b></label><br />
    </div>

    <v-divider></v-divider>

    <div class="pa-2">
      <p>
        Welcome to the {{ releaseDate }} release of DROP. There are many updates in this
        version that we hope you'll like, some of the key highlights include:
      </p>
    </div>

    <div>
      <ul>
          <li >test</li>
        <li v-for="(item , index) in list" :key="index">{{ item }}</li>
      </ul>
    </div>

    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
    props : [
        'version',
        'releaseDate',
        'releaseNotes',
        'issueLink'
    ],

    data(){
        return{
            list : []
        }
    },

    created(){
        
        let str_list = this.releaseNotes.split('\n');
        let obj = JSON.parse(str_list[ str_list.length - 1 ]);
        console.log(obj);
        this.list = obj.log;

    }

}
</script>