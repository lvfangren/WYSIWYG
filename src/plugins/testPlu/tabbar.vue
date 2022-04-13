<template>
<!-- B站的登录tab -->
    <main>
        <div class="tab">
            <div :class="[`tab-${index}`, activeName === index && 'active']" v-for="(subInfo, index) in subTabList" :key="index" @click.prevent="changeCurrentCom(index)">{{ subInfo }}</div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { ref, defineProps, withDefaults, defineAsyncComponent, defineComponent, defineEmits } from 'vue';
// import { InBaseOptions } from './type';
// type constraint
interface InBaseOptions {
    isKeepStatus?: boolean,
    subTabList: any[]
};

// custom event
const emit = defineEmits(['tab-click']);

// model data
const activeName = ref(0);
const props = withDefaults(defineProps<InBaseOptions>(), {
    subTabList: () => {
        return ['默认', '默认1'];
    },
});

// methods
const changeCurrentCom = (currentIdx: any) => {
    console.log(currentIdx);
    activeName.value = currentIdx;
    emit('tab-click', currentIdx);
};
</script>
<style scoped  lang="less">
  .tab {
    display: flex;
    height: 60px;
    line-height: 60px;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
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
      // font-family: PingFangSC-Semibold;
      font-family: var(--font-base);
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
