<script lang="ts">
// import { onMounted } from 'vue';
// onMounted(() => {
//     // eslint-disable-next-line
//     $lfr();
//     console.log('object');
// });
export default {
    mounted() {
        // this.$lfr('cascas');
    },
};
</script>

<template>
  <div id="demo-page">
    <hello/>
    <!-- <test-tab/> -->
  </div>
</template>

<style scoped>
#demo-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
