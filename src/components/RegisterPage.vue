
<script>
import axios from '../axios-auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },

  // methods:{
  //   register() {
  //     this.$store.dispatch('register', {
  //       email: this.email,
  //       password: this.password
  //     });
  //     this.email='';
  //     this.password='';
  //   }
  // }

  // 今後storeで扱えるようにしたい
  methods: {
    register() {
      axios.post(
        '/accounts:signUp?key=AIzaSyCbN-x5NYs6Y0QJlJyDtFbF9AvKyexWazI',
      {
        email:this.email,
        password:this.password,
        returnSecureToken:true
      }).then(response=>{
        console.log(response);
      });
    }
  }
}
</script>

<template>
  <div>
    <h2>登録</h2>
    <label for="email">Email</label>
    <input id="email" type="email" v-model="email">
    <br><br>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password">
    <br><br>
    <button @click="register">登録</button>
  </div>
</template>
