<script setup lang="ts">


// import axios from "axios";

// export default {
//   data() {
//     return {
//       title: '',
//       text: '',
//       threadList: [],
//     }
//   },

//  methods: {
//   addThread() {
//     axios.post('https://firestore.googleapis.com/v1/projects/vue-app-1b8cc/databases/(default)/documents/thread',
//     {
//       fields:{
//         title: {
//           stringValue: this.title
//         },
//         text:{
//           stringValue: this.text
//         }
//       }
//       }).then(response => {
//         console.log(response);
//       }).catch(error => {
//         console.log(error);
//       });
//       this.title = '';
//       this.text = '';
//     }
//   },
 
//   created() {
//     axios.get(
//       'https://firestore.googleapis.com/v1/projects/vue-app-1b8cc/databases/(default)/documents/thread'
//     ).then(response=>{
//       this.threadList = response.data.documents;
//       console.log(response.data.documents);
//     });
//   },
// }

import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'

const data = ref()
const error = ref()

const getUsers = async () => {
  console.log("getUsers")
  try {
    const usersCollection = collection(db, 'thread');
    const usersSnapshot = await getDocs(usersCollection);
    data.value = usersSnapshot.docs.map(doc => doc.data());
    console.log(data.value)
  } catch (e) {
    error.value = e
  } 
}

onMounted(() => {
    getUsers()
})
</script>

<template>
  <div id="app">
    <h2>スレッド一覧</h2>

    <ul>
      <li v-for="(data, index) in data" :key="index">
        <router-link :to="`/post/${index}`">
          <h3>{{ data.title }}</h3>
        </router-link>
        <p>{{ data.text }}</p>
      </li>
    </ul>    
  
    <!-- brタグで仮指定しているためあとの編集で気を付ける -->
    <input type="text" @keypress.enter="addThread" v-model="title"><br><br>
    <textarea cols="60" rows="10" @keypress.enter="addThread" v-model="text" /><br>
    <button @click="addThread">追加</button>
  </div>
</template>
