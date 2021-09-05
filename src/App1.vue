<template>
    <div class="root">
        21
    </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
    name: 'demoRoot',
    data() {
        return {

        };
    },
    created() {
        // @ts-ignore
        console.log(this.$http, 'sss');
        // @ts-ignore
        this.$http.get('api/members/show.json?id=21').then((res: any) => {
            console.log(res, 'rerere');
        });
        // axios({
        //     method: 'get',
        //     url: 'api/members/show.json?id=21',
        //     responseType: 'json',
        //     headers: {'Access-Control-Allow-Origin': '*'},
        // })
        // .then(function (response: any) {
        //     console.log(response);

        // });
        // console.log(this.$http);
    },
};
</script>

<style>

</style>
