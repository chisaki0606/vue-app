<script>
export default {
  data() {
    return {
      thread: {
        title: '',
        text: '',
      },
      threadList: [],
    }
  },
  
  methods: {
    addThread() {
      this.threadList.push({title: this.thread.title, text: this.thread.text});
      this.thread.title = ''
      this.thread.text = ''
    },
  }
}
</script>

<template>
  <div id="app">
    <h2>スレッド一覧</h2>    
    <ul>
      <li v-for="(thread, index) in threadList" :key="index">
        <router-link :to="`/post/${index}`">
          <h3>{{ thread.title }}</h3>
        </router-link>
        <p>{{ thread.text }}</p>
      </li>
    </ul>

    <!-- brタグで仮指定しているためあとの編集で気を付ける -->
    <input type="text" @keypress.enter="addThread" v-model="thread.title"><br><br>
    <textarea cols="60" rows="10" @keypress.enter="addThread" v-model="thread.text" /><br>
    <button @click="addThread">追加</button>
  </div>
</template>
