<template>
  <div class="about">
    <button @click="getData" class="btn btn-primary">submit</button>
  </div>
  <!-- {{ axiosData }} -->
</template>

<script>
// import { ref } from 'vue'
// import axios from 'axios';

export default {
  setup() {
    //  const axiosData = ref([]);
    //  const url = ref('https://localhost:XXXX/weatherforecast');

    // onMounted(() => {

    //   axios.get(url.value)
    //   .then((response) => {
    //     axiosData.value = response
    //   })

    // })

    // const getData = () => {
    //   const url = ref('https://localhost:XXXX/weatherforecast');
    //     axios.get(url.value)
    //     .then((response) => {
    //       axiosData.value = response
    //     })
    // }

    return { }
  }
}
</script>