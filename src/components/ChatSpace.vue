<script setup>
import { ref } from 'vue';

const textInput = ref('');
</script>


<template>
  <div>
    <h2>ChatSpace</h2>
    <div>
      <input type="text" v-model="textInput">
      <p>{{ textInput }}</p>
    </div>
  </div>
</template>