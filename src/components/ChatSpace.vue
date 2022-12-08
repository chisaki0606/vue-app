<script>
export default {
  data() {
    return {
      comment: '',
      comments:[]
    }
  },
  methods: {
    addComment() {
      this.comments.push(this.comment)
      this.comment = ''
    },
    removeComment(index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<template>
  <div id="app">
    <h2>ChatSpace</h2>
    <input v-model="comment">
    <button @click="addComment">追加</button>
    <ul>
      <li v-for="(comment, index) in comments" :key="index">{{ comment }} <span @click="removeComment(index)">X</span></li>
    </ul>
  </div>
</template>