<template>
  <div>
      {{name}}
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
type Content = 21;
export default {
    name: 'testCompon',
    props: {
        contents: { type: Array as PropType<Content[]>, required: true },
        // listData: {
        //     validator: function() {

        //     },
        //     require: true,
        // },
    },
    data() {
        return {
            name: 'LFR%)#',
        };
    },
};
</script>

<style>

</style>
