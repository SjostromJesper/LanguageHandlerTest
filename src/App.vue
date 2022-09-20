<template>
  <div v-if="langFile">
    <h1>TEST</h1>
    {{langFile.anders}}
    {{langFile.kajsa}}
    {{langFile.jens.ett}}
  </div>
</template>

<script setup>
import {t} from "./utils/LanguageHandler.js"
import {ref} from "vue";

const langFile = ref(null)
t('koala/hej').then(res => langFile.value = res)

</script>

<style scoped>
</style>
