<script setup>
import { ref } from 'vue'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { useRoute } from 'vue-router'

const threadList = ref()
const comments = ref([])
const route = useRoute()

const getThreadList = async () => {
  const query = await getDocs(collection(db, 'thread'));
  threadList.value = query.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })).filter(item => item.id === route.params.id);
};

getThreadList();

</script>

<template>
  <div id="app">
    <ul>
      <li v-for="(thread, index) in threadList" :key="index">
        <h3>{{ thread.title }}</h3>
        <p>{{ thread.text }}</p>
        <ul>
          <li v-for="(comments, index) in thread.comments" :key="index">
            <p>{{ comments.comment }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
