<template>
  <div v-if="langFile !== null">
    {{langFile.klas}}
    {{langFile.kajsa}}
  </div>
</template>

<script setup>
import {t} from "./utils/LanguageHandler.js"
import {onMounted, ref} from "vue";
const langFile = ref(null)

onMounted(() => {
  langFile.value = t('koala/hej').then(res => langFile.value = res)
})

</script>

<style scoped>
</style>
