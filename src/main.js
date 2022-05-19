import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import API from './API';

Vue.config.productionTip = false


async function mountApp(){

  let app_token = localStorage.getItem('token');
  console.log('ran' , app_token);

  if(app_token == null){
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");

    return;
  }

  try{

    let user = await API.get('/api/user' , {
      headers: {
        authorization: "Bearer " + app_token,
      },
    });

    console.log('the user is : ' , user);

    store.commit('setCurrentUser' , user.data);

  }catch(err){
    true
  }finally{
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }

}

mountApp();