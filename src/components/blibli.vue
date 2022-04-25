<template>
    <div class="container">
        <div class="content">
            <div class="content-left">
                 <p>
                扫描二维码登录
            </p>
            <img src="" alt="" />
            <p>
                <div>请使用哔哩哔哩客户端</div>
                <div>扫码登录或扫码下载APP</div>
            </p>
            </div>
            <div class="content-right"></div>
        </div>
        <div class="footer">
            <p>
                扫描二维码登录
            </p>
            <img src="" alt="" />
            <p>
                <div>请使用哔哩哔哩客户端</div>
                <div>扫码登录或扫码下载APP</div>
            </p>
        </div>
        <div class="icon-close">
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    font-size: 20px;
}
.content {
    box-sizing: border-box;
    width: 820px;
    height: 444px;
    background-color: #fff;
    border-radius: 8px;
    padding: 52px 65px 29px 92px;
    position: absolute;
    top: calc(50% - 222px);
    left: calc(50% - 410px);
    display: flex;
}
.content-left {
    background: red;
    img {
        width: 100%;
        height: 200px;
    }
}

.content-right {
    background: green;
}
.footer {
    position: absolute;
}
.icon-close {
    position: absolute;
    width: 10px;
    height: 10px;
    color: rgb(49, 47, 47);
    top: calc(50% - 212px);
    left: calc(50% + 400px);
    background: red;
}
</style>
