<template>
  <!-- 测试图片
    <img src="./images/keynote-en.png" alt=""> -->
  <!-- 语义化 -->
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
      name: "ca",
      casca: "cas",
    };
  },
  created() {
    // @ts-ignore
    this.$http.get("api/members/show.json?id=21").then((res: any) => {
      console.log(res, "rerere");
    });
  },
  methods: {
    cc(a: string) {
      return "csa";
    },
  },
};
</script>

<style>
@import url("./css/test2.css");
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
.block-left,.block-right {
  flex: 0 1 200px;
}
header,footer {
  width: 100%;
}
</style>