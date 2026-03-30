<template>
  <canvas ref="chartCanvas"></canvas>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto'

Chart.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  crimes: {
    type: Array,
    required: true
  }
})

const chartCanvas = ref(null)
let chartInstance = null

function buildChart(data) {
  if (chartInstance) {
    chartInstance.destroy()
  }

  const locationCounts = {}

  data.forEach(crime => {
    const location = crime.loc_classfctn_desc || 'UNKNOWN'

    if (!locationCounts[location]) {
      locationCounts[location] = 0
    }

    locationCounts[location]++
  })

  const labels = Object.keys(locationCounts)
  const values = Object.values(locationCounts)

  chartInstance = new Chart(chartCanvas.value, {
    type: 'pie',
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#66FF66',
            '#FF66B2',
            '#66CCCC',
            '#C9CBCF'
          ]
        }
      ]
    }
  })
}

onMounted(() => {
  if (props.crimes.length) {
    buildChart(props.crimes)
  }
})

watch(
  () => props.crimes,
  (newVal) => {
    if (newVal.length) {
      buildChart(newVal)
    }
  },
  { deep: true }
)
</script>
