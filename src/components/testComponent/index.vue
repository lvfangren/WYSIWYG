<template>
  <div>
      {{name}}
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
export default {
    name: 'testCompon',
    data() {
        return {
            name: '我是子组件',
        };
    },
};
</script>

<style>

</style>
