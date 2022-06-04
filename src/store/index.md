关于状态管理：
1: 作为最简单的方案也许我们可以考虑[类 Flux 状态管理的官方实现](https://cn.vuejs.org/v2/guide/state-management.html#%E7%B1%BB-Flux-%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E7%9A%84%E5%AE%98%E6%96%B9%E5%AE%9E%E7%8E%B0)

2: 或者EventBus也是一种选择（虽然它可能有些问题，例如：内存泄漏）

3: 最后的方案我认为你再考虑使用vue专门的状态管理vuex或者pinia


请确定你是否是真的需要专门的状态管理库。