<script setup lang="ts"></script>
<template>
  <div class="header-bar">
    <div class="header-bar__left">
      <img src="../../assets/vue.svg" alt="logo" />
      <span>Vue 3 Admin</span>
    </div>
  </div>
</template>
<style scoped lang="less">
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  .header-bar__left {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      margin-left: 10px;
    }
  }
}
</style>