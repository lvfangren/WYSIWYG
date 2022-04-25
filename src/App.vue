<script lang="ts">
// import { onMounted } from 'vue';
// onMounted(() => {
//     // eslint-disable-next-line
//     $lfr();
//     console.log('object');
// });

export default {
    mounted() {
        document!.getElementById('loading-page')!.style.display = 'none';
        // this.$lfr('cascas');
    },
};
</script>

<template>
  <div id="demo-page">
    <!-- vue3短信验证码弹窗组件抽离 -->
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
