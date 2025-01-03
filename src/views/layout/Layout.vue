<script setup lang="ts">
import SideBar from './SideBar.vue'
</script>
<template>
  <div class="layout">
		<div class="side-bar">
			<SideBar />
		</div>
		<div class="content">
			<RouterView />
		</div>
  </div>
</template>
<style scoped lang="less">
.layout{
	display: flex;
	height: calc(100% - 64px);
	.side-bar{
		width: 200px;
		flex: 0 0 200px;
	}
	.content{
		flex: 1;
		background-color: red;
	}
}
</style>