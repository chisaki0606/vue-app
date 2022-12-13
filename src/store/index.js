import { createStore } from 'vuex'
import axios from '../axios-auth';

export default createStore({
  state:{
    idToken: null
  },
  getters: {
    idToken: state => state.idToken
  },
  mutations:{
    updateToken(state, idToken){
      state.idToken = idToken;
    }
  },
  actions: {
    login({commit}, authData){
      axios.post(
        '/accounts:signInWithPassword?key=AIzaSyCbN-x5NYs6Y0QJlJyDtFbF9AvKyexWazI',
      {
        email:authData.email,
        password:authData.password,
        returnSecureToken:true
      }).then(response=>{
        commit('updateToken', response.data.idToken);
        console.log(response);
      });
    },
    register(){
      axios.post(
        '/accounts:signUp?key=AIzaSyCbN-x5NYs6Y0QJlJyDtFbF9AvKyexWazI',
      {
        email:authData.email,
        password:authData.password,
        returnSecureToken:true
      }).then(response=>{
        commit('updateToken', response.data.idToken);
        console.log(response);
      });
    },
  }
});
