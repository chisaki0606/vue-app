<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      content: {
        comment: '',
        isActive: false,
      },
      contents: [],
    })
    const addComment = () => {
      state.contents.push({comment: state.content.comment, isActive: false});
      state.content.comment = ''
    }
    const editComment = index => {
      state.contents[index].comment = state.contents[index].comment
      state.contents[index].isActive = true
    }
    const editDone = index => {
      state.contents[index].isActive = false
    }
    const removeComment = index => {
      state.contents.splice(index, 1)
    }
    return {
      state,
      addComment,
      editComment,
      editDone,
      removeComment,
    }
  }
})
</script>

<template>
  <div id="app">
    <h2>ChatSpace</h2>
    <input type="text" @keypress.enter="addComment" v-model="state.content.comment">
    <button @click="addComment">追加</button>
    <ul>
      <li v-for="(content, index) in state.contents" :key="index">
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
