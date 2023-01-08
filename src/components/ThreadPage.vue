<script setup lang="ts">
import { ref } from 'vue'
import { db } from '../firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const id = ref('')
const title = ref('')
const text = ref('')
const threadList = ref()

const getThreadList = async () => {
  const query = await getDocs(collection(db, 'thread'));
  threadList.value = query.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
};

getThreadList();

const addThread = async () => {
  threadList.value.push({id: id.value, title: title.value, text: text.value });
  await addDoc(collection(db, 'thread'), {
    title: title.value,
    text: text.value,
  });
  title.value = '';
  text.value = '';
};  
</script>

<template>
  <div id="app">
    <h2>スレッド一覧</h2>
    <ul>
      <li v-for="(thread, index) in threadList" :key="index">
        <router-link :to="`/post/${thread.id}`">
          <h3>{{ thread.title }}</h3>
        </router-link>
        <p>{{ thread.text }}</p>
      </li>
    </ul>    
  
    <!-- brタグで仮指定しているためあとの編集で気を付ける -->
    <input type="text" @keypress.enter="addThread" v-model="title"><br><br>
    <textarea cols="60" rows="10" @keypress.enter="addThread" v-model="text" /><br>
    <button @click="addThread">追加</button>
  </div>
</template>
