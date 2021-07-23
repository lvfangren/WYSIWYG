<template>
  <div>
      csacsa1221
      <img src="./images/keynote-en.png" alt="">
  </div>
</template>

<script lang="ts">
export default {
    data() {
      return {
        name: 'ca',
        casca: "cas"
      }
    },
    created() {
        // @ts-ignore 
        console.log(this.$http, 'sss');
        // @ts-ignore 
        this.$http.get('api/members/show.json?id=21').then( (res: any) => {
            console.log(res,'rerere');
        });
    },
    methods: {
      cc(a: string) {
        return 'csa'
      }
    }
}
</script>

<style>
@import url('./css/test2.css');
</style>