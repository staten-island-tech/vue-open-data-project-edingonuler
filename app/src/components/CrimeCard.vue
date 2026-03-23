<template>
  <div class="card">
    <h2>
      <u>Crime #{{ id }}</u>
    </h2>
    <p><strong>Borough:</strong> {{ crime.boro }}</p>
    <p><strong>Location of Occurrence:</strong> {{ crime.loc_of_occur_desc }}</p>
    <p><strong>Jurisdiction Code:</strong> {{ crime.jurisdiction_code }}</p>
    <p><strong>Description:</strong> {{ crime.loc_classfctn_desc }}</p>
    <p><strong>Date:</strong> {{ crime.occur_date }}</p>
  </div>
</template>

<script setup>
// import { Bar } from 'vue-chartjs'
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale,
// } from 'chart.js'

defineProps({
  crime: Object,
  id: Number,
})
</script>

<style></style>
