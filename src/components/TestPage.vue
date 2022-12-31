<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      comment: '',
      comments: [],
    })
    const addComment = () => {
      state.comments.push(state.comment)
      state.comment = ''
    }
    const removeComment = (index) => {
      state.comments.splice(index, 1)
    }
    return {
      state,
      addComment,
      removeComment,
    }
  }
})
</script>

<template>
  <div id="app">
    <h2>ChatSpace</h2>
    <input type="text" @keypress.enter="addComment" v-model="state.comment">
    <button @click="addComment">追加</button>
    <ul>
      <li v-for="(comment, index) in state.comments" :key="index">
        <span>
          {{ comment }}
        </span>
        <span @click="removeComment(index)">X</span>
      </li>
    </ul>
  </div>
</template>
