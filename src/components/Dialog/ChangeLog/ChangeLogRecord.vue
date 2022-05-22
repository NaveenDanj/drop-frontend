<template>
  <div class="pa-2">
    <div class="ma-2">
      <label
        ><b>Update {{ version }}: The update addresses <a :href="issueLink">this</a> security issue.</b></label
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

        let obj = JSON.parse(releaseNotes);
        this.list = obj.log;

    }

}
</script>