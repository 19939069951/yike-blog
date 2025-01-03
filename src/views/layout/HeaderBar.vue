<script setup lang="ts">
import { MailOutlined, AntCloudOutlined } from '@ant-design/icons-vue'
</script>
<template>
  <div class="header-bar">
    <div class="header-bar__left">
      <img src="../../assets/vue.svg" alt="logo" />
      <span>华园博客后台</span>
    </div>
		<div class="header-bar_right">
			<MailOutlined class="icon-style"/>
			<a-config-provider
				:theme="{
					token: {
						colorPrimary: '#1890ff',
					},
				}"
			>
				<AntCloudOutlined class="icon-style"/>
			</a-config-provider>
			<a-dropdown>
				<a-avatar size="large">
					<template #icon><UserOutlined /></template>
				</a-avatar>
				<template #overlay>
					<a-menu>
						<a-menu-item>
							<a href="javascript:;">1st menu item</a>
						</a-menu-item>
						<a-menu-item>
							<a href="javascript:;">2nd menu item</a>
						</a-menu-item>
					</a-menu>
				</template>
			</a-dropdown>
		
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
		color: @pcolor-light;
		cursor: pointer;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      margin-left: @space-m;
    }
  }
	.header-bar_right{
		display: flex;
		align-items: center;
		.icon-style{
			font-size: @icon-size-m;
			margin-right: @space-l;
			cursor: pointer;
		}
	}
}
</style>