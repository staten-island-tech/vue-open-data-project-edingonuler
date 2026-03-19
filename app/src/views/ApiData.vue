<template>
  <h1>Crimes</h1>
  <div class="container">
    <CrimeCard v-for="(crime, index) in crimes" :key="index" :crime="crime" :id="index" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CrimeCard from '../components/CrimeCard.vue'

const crimes = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/5ucz-vwe8.json')
    const data = await res.json()

    crimes.value = data
  } catch (err) {
    console.log(err)
  }
})
</script>
