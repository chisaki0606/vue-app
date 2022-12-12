<script>
export default {
  data() {
    return {
      content: {
        comment: '',
        isActive: false,
      },
      contents: [],
    }
  },
  
  methods: {
    addComment() {
      this.contents.push({comment: this.content.comment, isActive: false});
      this.content.comment = ''
    },
    editComment(index) {
      this.contents[index].comment = this.contents[index].comment
      this.contents[index].isActive = true
    },
    editDone(index) {
      this.contents[index].isActive = false
    },
    removeComment(index) {
      this.contents.splice(index, 1)
    }
  }
}
</script>

<template>
  <div id="app">
    <h2>ChatSpace</h2>
    <p>{{ this.$route.params.id }}</p>
    <input type="text" @keypress.enter="addComment" v-model="content.comment">
    <button @click="addComment">追加</button>
    <ul>
      <li v-for="(content, index) in contents" :key="index">
        <span v-if="!content.isActive">
          {{ content.comment }}
          <button @click="editComment(index)">編集</button>
        </span>
        <span v-else>
          <input type="text" @keypress.enter="editDone(index)" v-model="content.comment">
          <button @click="editDone(index)">編集完了</button>
        </span>
        <span @click="removeComment(index)">X</span>
      </li>
    </ul>
  </div>
</template>
