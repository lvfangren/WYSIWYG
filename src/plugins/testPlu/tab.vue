<template>
    <main>
        <div class="tab">
            <div class="tab-1" @click="activeName = 1" :class="activeName === 1 && 'active'">
                默认
            </div>
            <div class="tab-2" @click="activeName = 2" :class="activeName === 2 && 'active'">
                距离最近
            </div>
        </div>
        <div v-if="isKeepStatus">
          <!-- 缓存状态，所以使用动态组件 -->
          <keep-alive>
              <component v-bind:is="currentTabComponent"></component>
          </keep-alive>
        </div>
        <div v-else>
          <component v-bind:is="currentTabComponent"></component>
        </div>
    </main>
</template>
<script>
export default {
    props: {
        isKeepStatus: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            activeName: 1,
        };
    },
};
</script>
<style scoped  lang="less">
  .tab {
    display: flex;
    height: 60px;
    line-height: 60px;
    justify-content: center;
    font-size: 20px;
    &div {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #222222;
      letter-spacing: 0;
      font-weight: 400;
    }
    .tab-1 {
      margin-right: 16px;
    }
    .active {
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #222222;
      font-weight: 600;
      &::after {
        content: '';
        display: block;
        max-width: 66%;
        height: 6px;
        background: #ff4b3b;
        margin: 0 auto;
        transform: translateY(-14px);
        border-radius: 4px;
        animation: activeSubBar 0.3s;
      }
    }
  }
  @keyframes activeSubBar {
    0% {
      width: 0;
    }
    100% {
      width: 66%;
    }
  }

</style>
