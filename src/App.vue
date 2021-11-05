<template>
  <div id="demo-page">
    <header>
      header
    </header>
    <div class="content">
      <main>
        main
      </main>
      <aside class="block-left">
        aside
      </aside>
      <aside class="block-right">
        aside
      </aside>
    </div>
    <footer>
      footer
    </footer>
  </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            name: 'ca',
            casca: 'cas',
        };
    },
    created() {
        // @ts-ignore
        this.$http.get('/entries', {
            params: { category: 'science' },
        }).then((res: any) => {
            console.log(res, 'rerere');
        });
    },
    methods: {
        cc(a: string) {
            return 'cs';
        },
    },
};
</script>

<style>
#demo-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
header {
  background-color: aqua;
}
footer {
  background-color: red;
}
nav {
  background-color: blue;
}
main {
  background-color: skyblue;
  flex: 1;
}
.block-left {
  background-color:teal;
  order: -1;
}
.block-right {
  background-color:yellowgreen;
}
.content {
  display: flex;
  height: 100%;
}
.content aside {
  max-width: 200px;
  overflow: hidden;
  word-break: break-all;
}
.block-left,.block-right {
  flex: 0 1 200px;
}
header,footer {
  width: 100%;
}
</style>
